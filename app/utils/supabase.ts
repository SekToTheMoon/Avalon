import { createClient } from "@supabase/supabase-js";

const url = process.env.SUPABASE_URL as string;
const key = process.env.SUPABASE_ANON_KEY as string;
const supabase = createClient(url, key);

// Simple function to log any messages we receive
function messageReceived(payload: any) {
  console.log(payload);
}

export const createRoom = async (id: string) => {
  const room = supabase.channel(id);

  // Subscribe to the Channel
  room
    .on("broadcast", { event: "test" }, (payload: any) =>
      messageReceived(payload)
    )
    .subscribe();

  return room;
};
