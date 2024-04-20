import { MemberDataIF } from '@/lib/types';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import CurrencyInput from './components/CurrencyInput';

interface SalaryCalculatorProps {
  current: MemberDataIF;
  setCurrent: (value: MemberDataIF) => void;
}

const SalaryCalculator = ({ current, setCurrent }: SalaryCalculatorProps) => {
  return (
    <div className="bg-slate-200 p-5 rounded-xl w-full basis-2/4">
      <div>
        <h1 className="uppercase text-2xl font-bold">
          {current?.name} bérének kiszámítása
        </h1>
        <div className="grid w-full max-w-sm items-center gap-1.5 my-5">
          <Label htmlFor="name">Családtag neve</Label>
          <Input
            type="text"
            id="name"
            value={current['name']}
            onChange={(e) => {
              setCurrent({
                ...current,
                name: e.target.value,
              });
            }}
          />
          <p className="text-slate-500">Add meg a családtag nevét!</p>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 my-5">
          <Label htmlFor="gross">Bruttó bér</Label>
          <CurrencyInput
            value={current}
            setValue={(value: number) => {
              setCurrent({
                ...current,
                amount: value,
              });
            }}
          />
          <p className="text-slate-500">Add meg a bruttó bért!</p>
        </div>
      </div>
    </div>
  );
};

export default SalaryCalculator;
