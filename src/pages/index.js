import Header from "@/components/header";
import Hero from "@/components/hero";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex  flex-col items-center justify-between  ${inter.className}`}
    >
      <Header />
      <Hero />
    </main>
  );
}