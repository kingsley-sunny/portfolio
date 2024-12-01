"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";
import { IComponentProps } from "../../../base/interfaces/interface";
import { cn } from "../../../lib/utils";
import TwoMenuIcon from "../../Icons/TwoMenu";
import MainContainer from "../Container";
import Logo from "../Logo";
import { MobileNavLinks } from "./MobileNavLinks/MobileNavLinks";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const NavBar = ({ className }: IComponentProps) => {
  const { setTheme, theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <div className={cn("padding-all sticky top-0 z-50 w-full", className)}>
        <MainContainer className="flex items-center justify-between py-4 lg:py-6">
          {/*logo  */}
          <Logo />

          {/* Navbar Links */}
          <nav className="hidden items-center space-x-5 text-lg text-muted-foreground lg:flex">
            <Link href={"/"} className="">
              Work
            </Link>

            <div className="h-0.5 w-8 bg-muted-foreground"></div>

            <Link href={"/"} className="">
              About
            </Link>

            <div className="h-0.5 w-8 bg-muted-foreground"></div>

            <Link href={"/"} className="">
              Blog
            </Link>

            <div className="h-0.5 w-8 bg-muted-foreground"></div>

            <Link href={"/"} className="">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-5 lg:space-x-10">
            {/* theme switcher */}

            {theme === "dark" ? (
              <MoonIcon
                className="cursor-pointer"
                onClick={() => setTheme("light")}
              />
            ) : (
              <SunIcon
                className="cursor-pointer"
                onClick={() => setTheme("dark")}
              />
            )}

            {/* the social links */}
            <div className="hidden items-center space-x-10 lg:flex">
              <a
                href="https://www.github.com/kingsley-sunny"
                className="border-b border-b-muted-foreground py-1"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://www.x.com/ezeobi_sunny"
                className="border-b border-b-muted-foreground py-1"
                target="_blank"
              >
                Twitter
              </a>
            </div>

            {/* ham burger menu */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-greenColor lg:hidden"
            >
              <TwoMenuIcon className="text-white/80" />
            </button>
          </div>
        </MainContainer>

        {/* Mobile Menu Links */}
        {isMenuOpen && (
          <MobileNavLinks
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        )}
      </div>

      <div className="absolute -left-48 -top-48 z-0 h-96 w-96 rounded-full bg-secondary-50 lg:-left-36 lg:-top-36 lg:h-[30rem] lg:w-[30rem]"></div>
    </div>
  );
};

export default NavBar;

// TODO: install this dependencies later react-awesome-review, react-type, smooth-react-scrollbar
