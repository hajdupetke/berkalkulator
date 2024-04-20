import { Input } from '@/components/ui/input';
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
  );
};

export default CurrencyInput;
