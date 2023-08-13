import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 backdrop-saturate-200 backdrop-blur-sm z-30 flex items-center justify-between py-3 px-4 md:px-8 bg-white/80 shadow-lg">
      <Link href={"/"}>
        <div className="flex items-center gap-3">
          <Image src="/dish.png" width={36} height={36} />
          <h1 className="font-semibold">Hoteliers</h1>
        </div>
      </Link>
      <div>Hotel Name Here</div>
    </nav>
  );
};

export default Navbar;
