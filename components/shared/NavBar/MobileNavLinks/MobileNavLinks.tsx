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
      <button
        className='fixed inset-0 bg-black/80 z-0'
        onClick={() => setIsMenuOpen(false)}
      ></button>
      <div className='h-[100dvh] w-2/3 fixed z-50 top-0 bg-secondary-100 inset-0 padding-all text-white/80'>
        <MainContainer className='relative z-10'>
          <div className='py-6 border-b border-muted-foreground'>
            <Logo />
          </div>

          {/* the links */}
          <div className='py-8 border-b border-muted-foreground'>
            <Link href={"/"} className='uppercase py-3 font-light block text-xl'>
              Home
            </Link>

            <Link href={"/"} className='uppercase py-3 font-light block text-xl'>
              Work
            </Link>

            <Link href={"/"} className='uppercase py-3 font-light block text-xl'>
              About
            </Link>

            <Link href={"/"} className='uppercase py-3 font-light block text-xl'>
              Blog
            </Link>

            <Link href={"/"} className='uppercase py-3 font-light block text-xl'>
              Contact
            </Link>
          </div>

          <div className='py-8'>
            <p className='text-sm font-light uppercase text-muted-foreground'>Socials</p>

            <div className='mt-4 space-y-4'>
              <a href='' className='font-extralight underline text-lg block'>
                Linkedin
              </a>

              <a href='' className='font-extralight underline text-lg block'>
                Twitter
              </a>

              <a href='' className='font-extralight underline text-lg block'>
                Github
              </a>
            </div>
          </div>
        </MainContainer>
      </div>
    </>
  );
};
