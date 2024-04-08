import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

interface FamilyMemberTabsProps {
  members: string[];
  setMembers: (value: string) => void;
  current: string;
  setCurrent: (value: string) => void;
}

const FamilyMemberTabs = ({
  members,
  setMembers,
  current,
  setCurrent,
}: FamilyMemberTabsProps) => {
  return (
    <div className="flex gap-1">
      {members.map((value: string, index: number) => {
        return (
          <div className="bg-slate-200 px-1 py-1 rounded align-center items-center">
            <Button
              className={cn(
                'bg-slate-200 px-3 py-1 rounded text-black',
                value == current
                  ? 'bg-white hover:bg-gray-100'
                  : 'hover:bg-slate-300'
              )}
              onClick={(event) => setCurrent(value)}
            >
              {value}
            </Button>
          </div>
        );
      })}
      <Button className="bg-slate-200 px-4 aspect-square h-full rounded align-center items-center flex text-2xl text-black hover:bg-slate-300 ">
        +
      </Button>
    </div>
  );
};

export default FamilyMemberTabs;
