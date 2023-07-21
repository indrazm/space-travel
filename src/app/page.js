import { Home } from "@/components/Home";

async function getTrips() {
  const res = await fetch("http://localhost:3000/api/v1/trip");
  const data = await res.json();
  return data;
}

export default async function Page() {
  const { tripData } = await getTrips();

  return <Home tripData={tripData} />;
}
