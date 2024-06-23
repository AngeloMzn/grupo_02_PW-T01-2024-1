
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar isLoggedIn={false} />
      <p>seloken</p>
    </main>

  );
}
