import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const Discounts = () => {
  return (
    <div>
      <h3 className="uppercase text-slate-950 font-bold my-2">Kedvezmények</h3>

      <div className="flex items-center space-x-2 my-2">
        <Switch id="szja" />
        <Label htmlFor="szja">25 év alattiak SZJA kedvezménye</Label>
      </div>
      <div className="flex items-center space-x-2 my-2">
        <Switch id="hazas" />
        <Label htmlFor="hazas">Friss házasok kedvezménye</Label>
      </div>
      <div className="flex items-center space-x-2 my-2">
        <Switch id="szemelyi" />
        <Label htmlFor="szemelyi">Személyi adókedvezmény</Label>
      </div>
      <div className="flex items-center space-x-2 my-2">
        <Switch id="csaladi" />
        <Label htmlFor="csaladi">Családi adókedvezmény</Label>
      </div>
    </div>
  );
};

export default Discounts;
