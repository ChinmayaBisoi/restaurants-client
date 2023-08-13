import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
import MainLayout from "@/components/layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={poppins.className}>
      <MainLayout>Hi</MainLayout>
    </main>
  );
}
