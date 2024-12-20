import ContainerForm from "@/components/form/ContainerForm";
import InputForm from "@/components/form/InputForm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { createProfile } from "../action/action";

const page = () => {
  return (
    <main className="flex justify-center items-center h-full">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>สร้างบัญชี </CardTitle>
          <CardDescription>รอเล่นด้วยกันอยู่นะ</CardDescription>
        </CardHeader>
        <CardContent>
          <ContainerForm actionParams={createProfile}>
            <div className="grid w-full items-center gap-4">
              <InputForm name="name" type="text" label="ชื่อ" />
              <div className="flex justify-between">
                <Button size={"lg"} type="submit">
                  สร้าง
                </Button>
              </div>
            </div>
          </ContainerForm>
        </CardContent>
      </Card>
    </main>
  );
};
export default page;
