import HomeSearch from "@/components/HomeSearch";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar/>
      <main className="flex justify-between items-center h-screen w-full ">
        <HomeSearch/>
      </main>
    </>
  );
}
