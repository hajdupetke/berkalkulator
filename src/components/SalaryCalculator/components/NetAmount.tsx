import { MemberDataIF } from '@/lib/types';
import { calculateNetAmount, numberToCurrency } from '@/lib/utils';

interface NetAmountProps {
  current: MemberDataIF;
}

const NetAmount = ({ current }: NetAmountProps) => {
  return (
    <>
      <div className="font-bold text-xl">Számított nettó bér: </div>
      <div className="rounded bg-slate-700 text-white font-bold text-xl px-6 py-3">
        {numberToCurrency(calculateNetAmount(current))}
      </div>
    </>
  );
};

export default NetAmount;
