import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { MemberDataIF } from '@/lib/types';
import { MouseEventHandler } from 'react';

interface FamilyMemberTabsProps {
  data: MemberDataIF[];
  current: MemberDataIF;
  setData: (value: MemberDataIF) => void;
  setCurrent: (value: MemberDataIF) => void;
}

const FamilyMemberTabs = ({
  data,
  current,
  setData,
  setCurrent,
}: FamilyMemberTabsProps) => {
  const handleButtonClick: MouseEventHandler = (event) => {
    event.preventDefault();
    const nextId = data[data.length - 1].id + 1;
    const val = {
      id: nextId,
      name: '',
      amount: 0,
      discounts: [],
    };

    setData(val);
    setCurrent(val);
  };

  return (
    <div className="flex gap-1 align-center items-center">
      <div className="flex gap-1 bg-slate-200 px-1 py-1 rounded align-center items-center">
        {data.map((data: MemberDataIF) => {
          return (
            <Button
              className={cn(
                'bg-slate-200 px-3 py-1 rounded text-black min-w-10',
                data.id == current.id
                  ? 'bg-white hover:bg-gray-100'
                  : 'hover:bg-slate-300'
              )}
              key={data.id}
              onClick={(_) => setCurrent(data)}
            >
              {data?.name}
            </Button>
          );
        })}
      </div>
      <Button
        className="bg-slate-200 px-4 aspect-square h-full rounded flex align-center items-center  text-2xl text-black hover:bg-slate-300 "
        onClick={handleButtonClick}
      >
        +
      </Button>
    </div>
  );
};

export default FamilyMemberTabs;
