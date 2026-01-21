/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [dropdown, setDropdown] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  function changeTheme() {
    setTheme(theme == "light" ? "dark" : "light");
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "auto";
    setDropdown(false);
  }, [pathname]);

  if (!mounted) {
    return null;
  }

  function toggleDropdown() {
    if (!dropdown) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    setDropdown(!dropdown);
  }

  function toggleIfSamePage(route: string) {
    if (pathname === route) {
      document.body.style.overflow = "auto";
      setDropdown(false);
    }
  }

  return (
    <header
      className={`${
        dropdown ? "h-screen md:h-18" : "h-18"
      } gap-[60px] absolute top-0 flex w-full items-center md:justify-between flex-col md:flex-row p-6 z-999 bg-(--background)`}
    >
      <div className=" flex flex-row w-full md:w-auto justify-between items-center">
        <div className="h-6 flex gap-[10px]">
          <Image
            src={theme == "light" ? "logo.svg" : "darkmode-logo.svg"}
            alt="logo"
            preload
            height={24}
            width={24}
          />
          <h1 className="m-auto">Portfolio</h1>
        </div>
        <div className="flex md:hidden">
          <Image
            onClick={() => toggleDropdown()}
            src={
              dropdown
                ? theme == "light"
                  ? "cross.svg"
                  : "darkmode-cross.svg"
                : theme == "light"
                ? "burger.svg"
                : "darkmode-burger.svg"
            }
            alt="theme toggle"
            height={20}
            width={20}
          />
        </div>
      </div>

      <div
        className={`flex flex-col ${
          dropdown ? "flex gap-[40px]" : "hidden md:flex gap-[60px]"
        } md:flex md:flex-row  `}
      >
        <Link
          onClick={() => toggleIfSamePage("/")}
          className={`w-18 text-center ${pathname == "/" ? "selected" : ""}`}
          href="/"
        >
          Home
        </Link>
        <Link
          onClick={() => toggleIfSamePage("/work")}
          className={`w-18 text-center ${
            pathname == "/work" ? "selected" : ""
          }`}
          href="work"
        >
          Work
        </Link>
        <Link
          onClick={() => toggleIfSamePage("/about")}
          className={`w-18 text-center ${
            pathname == "/about" ? "selected" : ""
          }`}
          href="about"
        >
          About
        </Link>
      </div>

      <div
        className={`flex flex-col-reverse items-center gap-[24px] mt-auto ${
          dropdown ? "flex pb-[38px] gap-[40px] md:pb-0" : "hidden md:flex"
        } md:flex md:flex-row`}
      >
        <Image
          onClick={() => router.push("https://www.figma.com/@nnross")}
          alt="figma link"
          src={theme == "light" ? "figma.svg" : "darkmode-figma.svg"}
          height={24}
          width={80}
          className="cursor-pointer"
        />
        <Image
          onClick={() => changeTheme()}
          src={theme == "light" ? "light.svg" : "moon.svg"}
          alt="theme toggle"
          height={20}
          width={20}
          className="cursor-pointer"
        />
      </div>
    </header>
  );
}
