import Footer from "@/components/custom/Footer";
import Navbar from "@/components/custom/Navbar";
import Image from "next/image";
import Interested from "@/components/custom/Interested";

export default function Home() {
  return (
    <div>
      <main className="font-rubik">
        <Interested />
        <Footer />
      </main>
    </div>
  );
}
