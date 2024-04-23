import { MemberDataIF } from '@/lib/types';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import CurrencyInput from './components/CurrencyInput';
import Discounts from './components/Discounts';
import NetAmount from './components/NetAmount';
import { Button } from '../ui/button';

interface SalaryCalculatorProps {
  current: MemberDataIF;
  setCurrent: (value: MemberDataIF) => void;
  deleteCurrent: () => void;
}

const SalaryCalculator = ({
  current,
  setCurrent,
  deleteCurrent,
}: SalaryCalculatorProps) => {
  return (
    <div className="bg-slate-200 p-5 rounded-xl relative w-full basis-2/4">
      <Button
        className="absolute right-3 bg-red-600 hover:bg-red-800"
        onClick={() => deleteCurrent()}
      >
        Törlés
      </Button>
      <div>
        <h1 className="uppercase text-2xl font-bold">
          {current?.name} bérének kiszámítása
        </h1>
        <div className="w-full max-w-md items-center gap-1.5 my-5">
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
        <div className="w-full max-w-md items-center gap-1.5 my-5">
          <CurrencyInput
            value={current}
            setValue={(value: number) => {
              setCurrent({
                ...current,
                amount: value,
              });
            }}
          />
        </div>
        <div className="w-full max-w-lg items-center gap-1.5 my-5">
          <Discounts current={current} setCurrent={setCurrent} />
        </div>
        <div className="flex flex-col  justify-center items-center gap-1.5 my-5">
          <NetAmount current={current} />
        </div>
      </div>
    </div>
  );
};

export default SalaryCalculator;
