import { createClient, RealtimeChannel } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Simple function to log any messages we receive
function messageReceived(payload: any) {
  console.log("on delete");
  console.log(payload);
}

export const newRoom = () => {
  const room = supabase.channel("rooms");
  return room;
};

export const deleteChannel = (channel: RealtimeChannel) => {
  supabase.removeChannel(channel);
};
