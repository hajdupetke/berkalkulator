import FamilyMemberTabs from './FamilyMemberTabs/FamilyMemberTabs';
import HouseholdSummary from './HouseholdSummary/HouseholdSummary';
import SalaryCalculator from './SalaryCalculator/SalaryCalculator';
import { MemberDataIF } from '@/lib/types';
import { useState } from 'react';

const HouseholdSalaryCalculator = () => {
  const [members, setMembers] = useState<string[]>(['Lajos', 'Sándor']);
  const [currMember, setCurrent] = useState<string>('Lajos');
  const [data, setData] = useState<MemberDataIF[]>([]);

  const getCurrentData = () => {
    const currentData = data.find((elem) => elem.name == currMember);

    return currentData;
  };

  return (
    <>
      <header>
        <FamilyMemberTabs
          members={members}
          setMembers={(value: string) => setMembers([...members, value])}
          current={currMember}
          setCurrent={(value: string) => setCurrent(value)}
        />
      </header>
      <main className="flex gap-5">
        <SalaryCalculator />
        <HouseholdSummary />
      </main>
    </>
  );
};

export default HouseholdSalaryCalculator;
