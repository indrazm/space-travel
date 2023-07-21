import { Home } from "@/components/Home";
import { API_URL } from "@/utils/apiUrl";

async function getTrips() {
  const res = await fetch(`${API_URL}/api/v1/trip`);
  const data = await res.json();
  return data;
}

export default async function Page() {
  const { tripData } = await getTrips();

  return <Home tripData={tripData} />;
}
