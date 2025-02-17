import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import MainContainer from "../../Container";
import Logo from "../../Logo";

export const MobileNavLinks = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.button
            key={"backdrop"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: [0.4, 0, 0.2, 1], duration: 0.4 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-0 bg-black/50 backdrop-blur-md"
            onClick={() => setIsMenuOpen(false)}
          ></motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            key={"menuItems"}
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{ ease: [0.4, 0, 0.2, 1], duration: 0.4 }}
            className="padding-all fixed inset-0 top-0 z-50 h-[100dvh] w-2/3 bg-secondary-100 text-white/80"
          >
            <MainContainer className="relative z-10">
              <div className="border-b border-muted-foreground py-6">
                <Logo />
              </div>

              {/* the links */}
              <div className="border-b border-muted-foreground py-8">
                <Link
                  href={"/"}
                  className="block py-3 text-xl font-light uppercase"
                >
                  Home
                </Link>

                <Link
                  href={"/"}
                  className="block py-3 text-xl font-light uppercase"
                >
                  Work
                </Link>

                <Link
                  href={"/"}
                  className="block py-3 text-xl font-light uppercase"
                >
                  About
                </Link>

                <Link
                  href={"/"}
                  className="block py-3 text-xl font-light uppercase"
                >
                  Blog
                </Link>

                <Link
                  href={"/"}
                  className="block py-3 text-xl font-light uppercase"
                >
                  Contact
                </Link>
              </div>

              <div className="py-8">
                <p className="text-sm font-light uppercase text-muted-foreground">
                  Socials
                </p>

                <div className="mt-4 space-y-4">
                  <a
                    href=""
                    className="block text-lg font-extralight underline"
                  >
                    Linkedin
                  </a>

                  <a
                    href=""
                    className="block text-lg font-extralight underline"
                  >
                    Twitter
                  </a>

                  <a
                    href=""
                    className="block text-lg font-extralight underline"
                  >
                    Github
                  </a>
                </div>
              </div>
            </MainContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
