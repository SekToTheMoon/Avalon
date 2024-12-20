"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import UserIcon from "./UserIcon";

const Table = ({ numSeats }: { numSeats: number }) => {
  const seats = [];
  const angleIncrement = 360 / numSeats;
  let quest: number[];
  let good: number;
  let evil: number;

  const [isStart, setIsStart] = useState<boolean>(false);
  const [player, setPlayer] = useState<number[]>([0, 0, 0, 0, 0, 0, 0]);
  for (let i = 0; i < numSeats; i++) {
    const angle = i * angleIncrement;
    const x = 140 * Math.cos((angle * Math.PI) / 180); // คำนวณตำแหน่ง x
    const y = 140 * Math.sin((angle * Math.PI) / 180); // คำนวณตำแหน่ง y

    seats.push(<UserIcon key={i} x={x} y={y} name="sdf" imgUrl="sdf" />);
  }
  if (numSeats === 5) {
    quest = [2, 3, 2, 3, 3];
    good = 3;
    evil = 2;
  } else if (numSeats === 6) {
    quest = [2, 3, 4, 3, 4];
    good = 4;
    evil = 2;
  } else if (numSeats === 7) {
    quest = [2, 3, 3, 4, 4];
    good = 4;
    evil = 3;
  } else {
    quest = [3, 4, 4, 5, 5];
    good = 5;
    evil = 3;
  }

  const handleStartGame = () => {
    setIsStart(true);
    const startPlayer = Math.floor(Math.random() * 10);
  };
  return (
    <div className="relative w-full h-full rounded-full bg-primary flex justify-center items-center">
      <div className="absolute w-1/3 h-1/3 rounded-full bg-secondary flex flex-col justify-center items-center">
        {isStart ? (
          <>
            <div>sdfsdfdsfdsf</div>
            <div className="grid grid-cols-5 gap-1">
              <div className="rounded-full bg-green-300 w-4 h-4"></div>
              <div className="rounded-full bg-green-300 w-4 h-4"></div>
              <div className="rounded-full bg-green-300 w-4 h-4"></div>
              <div className="rounded-full bg-green-300 w-4 h-4"></div>
              <div className="rounded-full bg-green-300 w-4 h-4"></div>
            </div>
          </>
        ) : (
          <Button onClick={handleStartGame}>เริ่ม</Button>
        )}
      </div>
      {seats}
    </div>
  );
};

export default Table;
