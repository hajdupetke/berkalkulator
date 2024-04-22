import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog';
import { MemberDataIF } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DatePicker } from './DatePicker';

interface DateModalProps {
  current: MemberDataIF;
  setCurrent: (date: Date | undefined) => void;
}

const DateModal = ({ current, setCurrent }: DateModalProps) => {
  const [date, setDate] = useState<Date | undefined>(current['date']);

  return (
    <Dialog>
      <DialogTrigger className="px-1 text-xs/tight h-5 rounded bg-slate-900 text-white">
        {!current.date ? 'Dátum hozzáadása' : 'Dátum módositása'}
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogDescription>
          A kedvezmény először a házasságkötést követő hónapra vehető igénybe és
          a házassági életközösség alatt legfeljebb 24 hónapon keresztül jár
        </DialogDescription>
        <div className="grid w-full max-w-sm items-center gap-1.5 my-5">
          <Label htmlFor="date">Add meg a házasságkötés dátumát</Label>
          <DatePicker date={date} setDate={setDate} />
          <p className="text-slate-500 text-xs">Például: 2020/02/03</p>
        </div>
        <DialogClose asChild>
          <Button
            onClick={(_) => {
              setCurrent(date);
            }}
            className="w-1/5"
          >
            Mentés
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default DateModal;
