import CreateDialog from "@/components/lobby/CreateDialog";
import LobbyContainer from "@/components/lobby/LobbyContainer";
import LobbyList from "@/components/lobby/LobbyList";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { TableRow } from "@/components/ui/table";

export default async function Home() {
  const user = await currentUser();
  if (!user?.privateMetadata.hasProfile) redirect("/profile");

  return (
    <>
      <div className="flex">
        <h1 className="text-3xl font-bold">Lobby</h1>
        <CreateDialog />
      </div>
      <main className="mt-4 rounded-lg bg-secondary px-8 py-5 ">
        <LobbyContainer>
          <LobbyList />
        </LobbyContainer>
      </main>
    </>
  );
}
