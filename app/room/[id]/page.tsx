import { createRoom } from "@/app/utils/supabase";
import Table from "@/components/room/Table";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const room = createRoom(id);

  return (
    <div className="h-full flex items-center justify-center">
      <div className="h-full aspect-square">
        <Table numSeats={8} />
      </div>
    </div>
  );
};
export default page;
