"use client";
import Link from "next/link";
import { ModeToggle } from "./theme-changer";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="py-4">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h1 className="font-bold text-xl">LOGO</h1>
        </Link>
        <ul className="flex items-center gap-3">
          <li>
            <Link href={"/wishlist"} className={"text-md font-bold"}>
              Wishlist
            </Link>
          </li>
          <li>
            <Link href={"/cart"} className={"text-md font-bold"}>
              cart
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-3">
          <Button onClick={() => router.push("/login")}>Login</Button>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
