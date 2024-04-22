import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

interface DependantsInputProps {
  dependants: number;
  setDependants: (value: number) => void;
  discounted: number;
  setDiscounted: (value: number) => void;
}

const buttonStyle =
  'w-4 h-4 rounded-full mx-2 inline-flex items-center justify-center border border-slate-500 bg-slate-50 text-gray-700 text-xl cursor-pointer hover:bg-slate-100 p-0';

const DependantsInput = ({
  dependants,
  setDependants,
  discounted,
  setDiscounted,
}: DependantsInputProps) => {
  useEffect(() => {
    if (discounted > dependants) setDiscounted(dependants);
  }, [dependants]);
  return (
    <div>
      <Button
        className={buttonStyle}
        onClick={(_) => {
          if (dependants - 1 >= 0) {
            setDependants(dependants - 1);
          }
        }}
      >
        -
      </Button>
      {dependants}
      <Button
        className={buttonStyle}
        onClick={(_) => {
          setDependants(dependants + 1);
        }}
      >
        +
      </Button>
      Eltartott, ebből kedvezményezett
      <Button
        className={buttonStyle}
        onClick={(_) => {
          if (discounted - 1 >= 0 && discounted - 1 <= dependants) {
            setDiscounted(discounted - 1);
          }
        }}
      >
        -
      </Button>
      {discounted}
      <Button
        className={buttonStyle}
        onClick={(_) => {
          if (discounted + 1 <= dependants) setDiscounted(discounted + 1);
        }}
      >
        +
      </Button>
    </div>
  );
};

export default DependantsInput;
