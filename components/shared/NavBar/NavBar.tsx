import Link from "next/link";
import { IComponentProps } from "../../../base/interfaces/interface";
import { cn } from "../../../lib/utils";
import TwoMenuIcon from "../../Icons/TwoMenu";
import MainContainer from "../Container";
import Logo from "../Logo";

const NavBar = ({ className }: IComponentProps) => {
  return (
    <div className={cn("border padding-all", className)}>
      <MainContainer className='flex items-center py-4 lg:py-6 justify-between'>
        {/*logo  */}
        <Logo />

        {/* Navbar Links */}
        <nav className='lg:flex items-center space-x-5 hidden text-lg'>
          <Link href={"/"} className=''>
            Work
          </Link>

          <div className='w-8 h-0.5 bg-foreground'></div>

          <Link href={"/"} className=''>
            About
          </Link>

          <div className='w-8 h-0.5 bg-foreground'></div>

          <Link href={"/"} className=''>
            Blog
          </Link>

          <div className='w-8 h-0.5 bg-foreground'></div>

          <Link href={"/"} className=''>
            Contact
          </Link>
        </nav>

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
      </MainContainer>
    </div>
  );
};

export default NavBar;
