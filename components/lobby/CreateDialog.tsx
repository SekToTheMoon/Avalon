import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import InputModalForm from "../form/InputModalForm";
import CheckboxDialog from "./CheckboxDialog";
import ContainerForm from "../form/ContainerForm";
import { createRoom } from "@/app/action/action";

const CreateDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">สร้างห้อง</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <ContainerForm actionParams={createRoom}>
          <DialogHeader>
            <DialogTitle>สร้างห้อง</DialogTitle>
            <DialogDescription>ชวนเพื่อนมาเล่นกันเยอะๆนะ</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <InputModalForm name="total_player" label="ผู้เล่น" />
            <CheckboxDialog name="morgana" label="Morgana  และ Percival" />
            <CheckboxDialog name="mordred" label="Mordred" />
            <CheckboxDialog name="oberon" label="Oberon" />
          </div>
          <DialogFooter>
            <Button type="submit">บันทึก</Button>
          </DialogFooter>
        </ContainerForm>
      </DialogContent>
    </Dialog>
  );
};

export default CreateDialog;
