import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";

const InputModalForm = ({ name, label }: { name: string; label: string }) => {
  return (
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor={label} className="text-right">
        {label}
      </Label>
      <Select name={name} defaultValue="5">
        <SelectTrigger className="col-span-3">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>จำนวน</SelectLabel>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="6">6</SelectItem>
            <SelectItem value="7">7</SelectItem>
            <SelectItem value="8">8</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default InputModalForm;
