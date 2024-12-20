import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

const CheckboxDialog = ({ name, label }: { name: string; label: string }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Checkbox className="col-span-1 ml-auto" name={name} />
      <Label className="col-span-3">{label}</Label>
    </div>
  );
};
export default CheckboxDialog;
