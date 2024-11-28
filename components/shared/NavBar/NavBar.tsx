"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { IComponentProps } from "../../../base/interfaces/interface";
import { cn } from "../../../lib/utils";
import TwoMenuIcon from "../../Icons/TwoMenu";
import MainContainer from "../Container";
import Logo from "../Logo";

const NavBar = ({ className }: IComponentProps) => {
  const { setTheme, theme } = useTheme();

  return (
    <div className={cn("padding-all", className)}>
      <MainContainer className='flex items-center py-4 lg:py-6 justify-between'>
        {/*logo  */}
        <Logo />

        {/* Navbar Links */}
        <nav className='lg:flex items-center space-x-5 hidden text-lg text-muted-foreground'>
          <Link href={"/"} className=''>
            Work
          </Link>

          <div className='w-8 h-0.5 bg-muted-foreground'></div>

          <Link href={"/"} className=''>
            About
          </Link>

          <div className='w-8 h-0.5 bg-muted-foreground'></div>

          <Link href={"/"} className=''>
            Blog
          </Link>

          <div className='w-8 h-0.5 bg-muted-foreground'></div>

          <Link href={"/"} className=''>
            Contact
          </Link>
        </nav>

        <div className='flex items-center space-x-5 lg:space-x-10'>
          {/* theme switcher */}

          {theme === "dark" ? (
            <MoonIcon className='cursor-pointer' onClick={() => setTheme("light")} />
          ) : (
            <SunIcon className='cursor-pointer' onClick={() => setTheme("dark")} />
          )}

          {/* the social links */}
          <div className='lg:flex hidden items-center space-x-10'>
            <a href='https://www.github.com/kingsley-sunny' className='' target='_blank'>
              Github
            </a>
            <a href='https://www.x.com/ezeobi_sunny' className='' target='_blank'>
              Twitter
            </a>
          </div>

          {/* hambuger menu */}
          <div className='w-10 h-10 bg-greenColor flex items-center justify-center rounded-full lg:hidden'>
            <TwoMenuIcon className='text-primary' />
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default NavBar;
