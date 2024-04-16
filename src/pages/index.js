import Hero from "@/components/hero";
import Fumdap from "@/components/fumdap";
import Video from "@/components/video";
import Numeros from "@/components/numeros";
import Beneficios from "@/components/beneficios";
import Faq from "@/components/faq";

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
      <Fumdap />
      <Beneficios />
      <Faq />
    </main>
  );
}
