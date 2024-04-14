import Hero from "@/components/hero";
import Especialidades from "@/components/especialidades";
import Video from "@/components/video";
import Numeros from "@/components/numeros";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex  flex-col items-center justify-between  ${inter.className}`}
    >
      <Hero />
      <Video />
      <Numeros />
      <Especialidades />
    </main>
  );
}
