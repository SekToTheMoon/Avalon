import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const LobbyContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Table>
      <TableCaption>สร้างห้องก่อนเข้าเล่นเสมอ</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">เลขห้อง</TableHead>
          <TableHead>ผู้สร้าง</TableHead>
          <TableHead>สถานะ</TableHead>
          <TableHead className="text-right">ห้อง</TableHead>
          <TableHead className="text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>{children}</TableBody>
    </Table>
  );
};
export default LobbyContainer;
