import CreateDialog from "@/components/lobby/CreateDialog";
import LobbyContainer from "@/components/lobby/LobbyContainer";
import LobbyList from "@/components/lobby/LobbyList";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { fetchRooms } from "./action/action";

export default async function Home() {
  const user = await currentUser();
  if (!user?.privateMetadata.hasProfile) redirect("/profile");

  const roomData = await fetchRooms();
  return (
    <>
      <div className="flex">
        <h1 className="text-3xl font-bold">Lobby</h1>
        <CreateDialog />
      </div>
      <main className="mt-4 rounded-lg bg-secondary px-8 py-5 ">
        <LobbyContainer>
          <LobbyList rooms={roomData} />
        </LobbyContainer>
      </main>
    </>
  );
}
