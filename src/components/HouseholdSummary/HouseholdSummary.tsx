import { MemberDataIF } from '@/lib/types';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { calculateNetAmount, numberToCurrency } from '@/lib/utils';

interface HouseholdProps {
  data: MemberDataIF[];
}

const HouseholdSummary = ({ data }: HouseholdProps) => {
  const calculateSum = () => {
    const netSalaries = data.map((elem) => calculateNetAmount(elem));

    return netSalaries.reduce((prev, curr) => prev + curr, 0);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-slate-200 p-5 rounded-xl w-full basis-2/4">
      <h2 className="text-xl font-semibold my-4">
        Háztartás összesített jövedelme
      </h2>
      <Table className="bg-slate-400 !text-white">
        <TableHeader className="bg-slate-700">
          <TableRow>
            <TableHead className="font-bold text-lg">Családtag</TableHead>
            <TableHead className="font-bold text-lg">Nettó bér</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((elem) => {
            return (
              <TableRow key={elem.id}>
                <TableCell className="font-semibold">{elem['name']}</TableCell>
                <TableCell>
                  {numberToCurrency(calculateNetAmount(elem))}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Összesen</TableCell>
            <TableCell>{numberToCurrency(calculateSum())}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default HouseholdSummary;
