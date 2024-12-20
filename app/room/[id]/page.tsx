import Table from "@/components/room/Table";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <div className="h-full flex items-center justify-center">
      <div className="h-full aspect-square">
        <Table numSeats={8} />
      </div>
    </div>
  );
};
export default page;
