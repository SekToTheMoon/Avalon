"use client";
import { TableCell, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { supabase } from "@/app/utils/supabase";
import { fetchRooms } from "@/app/action/action";

const LobbyList = () => {
  const [rooms, setRooms] = useState<any[]>([]);
  const fetchRoom = async () => {
    const roomList = await fetchRooms();
    setRooms(roomList);
  };
  const room = supabase
    .channel("rooms")
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "Room" },
      async () => {
        const updatedRooms = await fetchRooms(); // Fetch rooms again after change
        setRooms(updatedRooms);
      }
    )
    .subscribe();

  useEffect(() => {
    fetchRoom();
    return () => {
      supabase.removeChannel(room);
    };
  }, []);

  // Subscribe to the Channel

  return (
    <>
      {rooms.map((room) => (
        <TableRow key={room.id}>
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
