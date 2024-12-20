import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
const UserIcon = ({
  name,
  imgUrl,
  x,
  y,
}: {
  name: string;
  imgUrl: string;
  x: number;
  y: number;
}) => {
  return (
    <div
      className="absolute flex flex-col items-center justify-center gap-1"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: `translate(-50%, -50%) `, // ปรับ rotate เพื่อให้หันหน้าเข้าโต๊ะ
      }}
    >
      <Avatar className="h-10 w-10 md:w-14 md:h-14">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Label
        className="text-center text-primary-foreground bg-primary text-xs  md:p-1 md:px-2 md:border rounded-lg"
        htmlFor="terms"
      >
        มั่นหน้า
      </Label>
    </div>
  );
};
export default UserIcon;
