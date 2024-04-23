import FamilyMemberTabs from './FamilyMemberTabs/FamilyMemberTabs';
import HouseholdSummary from './HouseholdSummary/HouseholdSummary';
import SalaryCalculator from './SalaryCalculator/SalaryCalculator';
import { MemberDataIF } from '@/lib/types';
import { useEffect, useState } from 'react';
import { defaultValues } from '@/lib/defaultValues';
import { useLocalStorage } from '@/lib/utils';

const HouseholdSalaryCalculator = () => {
  const [data, setData] = useLocalStorage(defaultValues);
  const [current, setCurrent] = useState<MemberDataIF>(data[0]);

  const deleteCurrent = () => {
    setData(data.filter((e) => e.id != current.id));
    setCurrent(data[0]);
  };

  useEffect(() => {
    setData(data.map((e) => (e.id == current.id ? current : e)));
  }, [current]);

  return (
    <>
      <header className="my-5 self-start">
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
      <main className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
        <SalaryCalculator
          current={current}
          setCurrent={(value: MemberDataIF) => {
            setCurrent(value);
            setData(data.map((elem) => (elem.id === value.id ? value : elem)));
          }}
          deleteCurrent={deleteCurrent}
        />
        <HouseholdSummary data={data} />
      </main>
    </>
  );
};

export default HouseholdSalaryCalculator;
