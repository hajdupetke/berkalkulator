import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { MemberDataIF } from '@/lib/types';
import { useEffect, useState } from 'react';

import DateModal from './DateModal';
import { Badge, badgeVariants } from '@/components/ui/badge';
import DependantsInput from './DependantsInput';
import { diff_years } from '@/lib/utils';

interface DiscountsProps {
  current: MemberDataIF;
  setCurrent: (value: MemberDataIF) => void;
}

const Discounts = ({ current, setCurrent }: DiscountsProps) => {
  const [discounts, setDiscounts] = useState<boolean[]>(current['discounts']);

  useEffect(() => {
    setCurrent({
      ...current,
      discounts: discounts,
    });
  }, [discounts]);

  useEffect(() => {
    setDiscounts(current['discounts']);
  }, [current['name']]);
  return (
    <>
      <h3 className="uppercase text-slate-950 font-bold my-2">Kedvezmények</h3>

      <div className="flex items-center space-x-2 my-2">
        <Switch
          id="szja"
          checked={discounts[0]}
          onCheckedChange={(e) =>
            setDiscounts(discounts.map((elem, ind) => (ind == 0 ? e : elem)))
          }
        />
        <Label htmlFor="szja">25 év alattiak SZJA kedvezménye</Label>
      </div>
      <div className="flex items-center space-x-2 my-2">
        <Switch
          id="hazas"
          checked={discounts[1]}
          onCheckedChange={(e) =>
            setDiscounts(discounts.map((elem, ind) => (ind == 1 ? e : elem)))
          }
        />
        <Label htmlFor="hazas">Friss házasok kedvezménye</Label>
        {discounts[1] == true && (
          <DateModal
            current={current}
            setCurrent={(date) => {
              setCurrent({
                ...current,
                date: date,
              });
            }}
          />
        )}
        {current['date'] &&
          discounts[1] &&
          (diff_years(current['date'], new Date()) <= 2 ? (
            <Badge className={badgeVariants({ variant: 'green' })}>
              Jogosult
            </Badge>
          ) : (
            <Badge className={badgeVariants({ variant: 'red' })}>
              Nem jogosult
            </Badge>
          ))}
      </div>
      <div className="flex items-center space-x-2 my-2">
        <Switch
          id="szemelyi"
          checked={discounts[2]}
          onCheckedChange={(e) =>
            setDiscounts(discounts.map((elem, ind) => (ind == 2 ? e : elem)))
          }
        />
        <Label htmlFor="szemelyi">Személyi adókedvezmény</Label>
      </div>
      <div className="flex items-center space-x-2 my-2">
        <Switch
          id="csaladi"
          checked={discounts[3]}
          onCheckedChange={(e) =>
            setDiscounts(discounts.map((elem, ind) => (ind == 3 ? e : elem)))
          }
        />
        <Label htmlFor="csaladi">Családi adókedvezmény</Label>
      </div>
      {discounts[3] && (
        <DependantsInput
          dependants={current['dependants']}
          setDependants={(value) =>
            setCurrent({ ...current, dependants: value })
          }
          discounted={current['dependantsWithDiscount']}
          setDiscounted={(value) => {
            setCurrent({ ...current, dependantsWithDiscount: value });
          }}
        />
      )}
    </>
  );
};

export default Discounts;
