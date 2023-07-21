import { BuyTicket } from "@/components/BuyTicket";
import { API_URL } from "@/utils/apiUrl";

async function getTicket(tripId) {
  const res = await fetch(`${API_URL}/api/v1/ticket?tripId=${tripId}`);
  const data = await res.json();
  return data;
}

export default async function Page({ searchParams }) {
  const { tripId } = searchParams;
  const { ticket } = await getTicket(tripId);

  return <BuyTicket ticket={ticket} tripId={tripId} />;
}
