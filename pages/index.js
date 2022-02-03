import Sidebar from "../components/Sidebar/Sidebar";
import Center from "../components/Center/Center";
import Player from "../components/Player/Player";
import { getSession } from "next-auth/react";

export default function Home() {
  return (
    <div className="home">
      <main>
        <Sidebar />
        <Center />
      </main>
      <Player />
    </div>
  );
}

// Prefetch information prior - Ensures correct access token is available & valid within other components
export async function getServerSideProps(context) {
  const session = await getSession(context);
  return { props: { session } };
}
