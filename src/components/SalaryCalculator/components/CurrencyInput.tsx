import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { MemberDataIF } from '@/lib/types';
import { useEffect, useState } from 'react';

interface CurrencyInputProps {
  value: MemberDataIF;
  setValue: (value: number) => void;
}

const numberToCurrency = (num: number) => {
  return num.toLocaleString('hu-HU', {
    currency: 'HUF',
    style: 'currency',
    maximumFractionDigits: 0,
  });
};

/* Custom input for currency purposes */
const CurrencyInput = ({ value, setValue }: CurrencyInputProps) => {
  const [val, setVal] = useState<string>(numberToCurrency(value['amount']));
  const [type, setType] = useState<string>('text');

  useEffect(() => {
    setVal(numberToCurrency(value['amount']));
  }, [value['name']]);

  const localStringToNumber = (s: String) => {
    return Number(String(s).replace(/[^0-9.,-]+/g, ''));
  };

  return (
    <>
      <Label htmlFor="gross">Bruttó bér</Label>
      <Input
        type={type}
        value={val}
        maxLength={20}
        onFocus={() => {
          setType('number');
          setVal(value['amount'].toString());
          console.log(value);
        }}
        onBlur={(e) => {
          setType('text');
          const val = e.target.value;
          const text = numberToCurrency(localStringToNumber(val));
          setVal(text);
        }}
        onChange={(e) => {
          if (e.target.value.length <= 20) {
            setVal(e.target.value);
            setValue(parseInt(e.target.value));
          }
        }}
      />
      <p className="text-slate-500">Add meg a bruttó bért!</p>

      <Slider
        value={[value['amount']]}
        step={1}
        className="my-5"
        max={500000}
        onValueChange={(e) => {
          setValue(e[0]);
          setVal(numberToCurrency(value['amount']));
        }}
      />
    </>
  );
};

export default CurrencyInput;
