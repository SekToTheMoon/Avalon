import { TableCell, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { Button } from "../ui/button";

type roomProps = {
  id: string;
  total_player: number;
  amount_player: number;
  status: string;
  profileRoom: {
    name: string;
    profileImage: string;
  };
};

const LobbyList = ({ rooms }: { rooms: roomProps[] }) => {
  return (
    <>
      {rooms.map((room) => (
        <TableRow>
          <TableCell className="font-medium">
            {room.id.substring(0, 8)}
          </TableCell>
          <TableCell className="flex items-center gap-2">
            {room.profileRoom.name}
            <Avatar className="w-8 h-8">
              <AvatarImage
                src={room.profileRoom.profileImage}
                alt="roomOwner"
              />
              <AvatarFallback>รูป</AvatarFallback>
            </Avatar>
          </TableCell>
          <TableCell>{room.status}</TableCell>
          <TableCell className="text-right">
            {room.amount_player + "/" + room.total_player}
          </TableCell>
          <TableCell className="text-right">
            <Button asChild disabled={room.amount_player >= room.total_player}>
              <Link href={"room/" + room.id}>เข้าร่วม</Link>
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};
export default LobbyList;
