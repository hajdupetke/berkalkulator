import { MemberDataIF } from '@/lib/types';
import { calculateNetAmount } from '@/lib/utils';

interface NetAmountProps {
  current: MemberDataIF;
}

const NetAmount = ({ current }: NetAmountProps) => {
  return (
    <>
      <div className="font-bold text-xl">Számított nettó bér: </div>
      <div className="rounded bg-slate-700 text-white font-bold text-xl px-6 py-3">
        {calculateNetAmount(current).toLocaleString('hu-HU', {
          currency: 'HUF',
          style: 'currency',
          maximumFractionDigits: 0,
        })}
      </div>
    </>
  );
};

export default NetAmount;
