import Head from "next/head";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Home() {
  return (
    <div className="home">
      <Head>
        <title>Spotify Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Sidebar />
        {/* Center */}{" "}
      </main>

      <div> {/* Player */}</div>
    </div>
  );
}
