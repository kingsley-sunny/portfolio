"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";
import { IComponentProps } from "../../../base/interfaces/interface";
import { cn } from "../../../lib/utils";
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
    <div className='relative'>
      <div className={cn("padding-all sticky z-50 top-0 w-full", className)}>
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
              <a
                href='https://www.github.com/kingsley-sunny'
                className='py-1 border-b border-b-muted-foreground'
                target='_blank'
              >
                Github
              </a>
              <a
                href='https://www.x.com/ezeobi_sunny'
                className='py-1 border-b border-b-muted-foreground'
                target='_blank'
              >
                Twitter
              </a>
            </div>

            {/* ham burger menu */}
            <motion.button
              onClick={() => setIsMenuOpen(true)}
              className='w-10 h-10 bg-secondary-100 flex items-center justify-center rounded-full lg:hidden'
            >
              {/* <TwoMenuIcon className='text-primary-muted-foreground' /> */}
            </motion.button>
          </div>
        </MainContainer>

        {/* Mobile Menu Links */}
        <AnimatePresence mode='wait'>
          {isMenuOpen && (
            <motion.button
              initial={{ clipPath: "circle(20px at 0px 0px)", opacity: 1 }}
              animate={{ clipPath: "circle(120dvh at 0px 0px)", opacity: 1 }}
              exit={{ clipPath: "circle(30px at 0px 0px)", opacity: 1 }}
              transition={{ duration: 0.7 }}
              onClick={() => setIsMenuOpen(false)}
              className='w-9 h-9 absolute top-1/2 right-0 bg-greenColor rounded-full lg:hidden'
            >
              <MobileNavLinks isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <div className='bg-secondary-50 absolute -top-48 -left-48 lg:-top-36 lg:-left-36 rounded-full w-96 h-96 lg:w-[30rem] lg:h-[30rem] z-0 '></div>
    </div>
  );
};

export default NavBar;

// TODO: install this dependencies later react-awesome-review, react-type, smooth-react-scrollbar
