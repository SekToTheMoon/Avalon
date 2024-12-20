"use server";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import db from "../utils/db";
import { profileSchema, validateWithZod } from "../utils/zodScheme";

const getAuthUser = async () => {
  // code body
  const user = await currentUser();
  if (!user) {
    throw new Error("You must logged!!!");
  }
  if (!user.privateMetadata.hasProfile) redirect("/profile");
  return user;
};
const renderError = (e: unknown): { msg: string } => {
  return { msg: e instanceof Error ? e.message : "เกิดข้อผิดพลาด" };
};

export const createProfile = async (prevState: any, formData: FormData) => {
  try {
    const user = await currentUser();
    if (!user) throw new Error("You must login");
    const rawData = Object.fromEntries(formData);
    const validateField = validateWithZod(profileSchema, rawData);

    await db.profile.create({
      data: {
        userId: user.id,
        profileImage: user.imageUrl ?? "",
        total_win: 0,
        ...validateField,
      },
    });
    const client = await clerkClient();
    await client.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });
    // return { message: "Create Profile Success!!!" };
  } catch (error) {
    // console.log(error);
    return renderError(error);
  }
  redirect("/");
};

export const createRoom = async (prevState: any, formData: FormData) => {
  let roomId;
  try {
    const user = await getAuthUser();
    const rawData = Object.fromEntries(formData);

    const roomData = await db.room.create({
      data: {
        profileId: user.id,
        total_player: Number(rawData.total_player),
        amount_player: 1,
        status: "รอ",
        morgana: rawData?.morgana ? true : false,
        mordred: rawData?.mordred ? true : false,
        oberon: rawData?.oberon ? true : false,
      },
    });
    roomId = roomData.id;

    // return { message: "Create Profile Success!!!" };
  } catch (error) {
    // console.log(error);
    return renderError(error);
  }
  redirect("/room/" + roomId);
};

export const fetchRooms = async () => {
  const roomData = await db.room.findMany({
    select: {
      id: true,
      total_player: true,
      amount_player: true,
      status: true,
      profileRoom: { select: { name: true, profileImage: true } },
    },
    take: 20,
    orderBy: { createdAt: "desc" },
  });

  return roomData;
};

export const updateRoom = async ({}) => {};

export const joinRoom = async (id: string) => {
  db.room.update({
    where: { id },
    data: {
      amount_player: { increment: 1 },
    },
  });
};
