"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  if (pathname.includes("dashboard")) {
    return <></>;
  } else {
    return (
      <nav className="flex justify-center container mx-auto p-5">
        <ul className="flex justify-between items-center w-1/2">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/post">
            <li>All Posts</li>
          </Link>
          <Link href="/meals">
            <li>All Meals</li>
          </Link>
        </ul>
      </nav>
    );
  }
};

export default Navbar;
