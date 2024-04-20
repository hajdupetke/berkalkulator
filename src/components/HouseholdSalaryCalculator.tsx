import FamilyMemberTabs from './FamilyMemberTabs/FamilyMemberTabs';
import HouseholdSummary from './HouseholdSummary/HouseholdSummary';
import SalaryCalculator from './SalaryCalculator/SalaryCalculator';
import { MemberDataIF } from '@/lib/types';
import { useEffect, useState } from 'react';
import { defaultValues } from '@/lib/defaultValues';

const emptyData = {
  id: -1,
  name: '',
  amount: -1,
  discounts: [],
  date: new Date(),
  dependants: -1,
  dependantsWithDiscount: -1,
};

const HouseholdSalaryCalculator = () => {
  const [data, setData] = useState<MemberDataIF[]>(defaultValues);
  const [current, setCurrent] = useState<MemberDataIF>(data[0]);

  useEffect(() => {
    setData(data.map((e) => (e.id == current.id ? current : e)));
  }, [current]);

  return (
    <>
      <header className="my-5 w-full">
        <FamilyMemberTabs
          data={data}
          setData={(value: MemberDataIF) => {
            setData([...data, value]);
          }}
          current={current}
          setCurrent={(value: MemberDataIF) => {
            setCurrent(value);
            console.log(value);
          }}
        />
      </header>
      <main className="flex gap-5 w-full">
        <SalaryCalculator
          current={current}
          setCurrent={(value: MemberDataIF) => {
            setCurrent(value);
            setData(data.map((elem) => (elem.id === value.id ? value : elem)));
          }}
        />
        <HouseholdSummary />
      </main>
    </>
  );
};

export default HouseholdSalaryCalculator;
