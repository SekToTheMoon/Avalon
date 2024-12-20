import { useState } from "react";
import { fetchRooms } from "../action/action";

const useRooms = () => {
  const [rooms, setRooms] = useState<any[]>([]);
  //   const getRooms = async () => {
  //     const roomData = await fetchRooms();
  //     setRooms(roomData);
  //   };
  return { rooms, setRooms };
};
export default useRooms;
