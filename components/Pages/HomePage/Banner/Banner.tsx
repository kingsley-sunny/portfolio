import WorkSpaceImg from "@/public/images/workspace.jpg";
import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MainContainer from "../../../shared/Container";

const Banner = () => {
  return (
    <div className="padding-all h-full py-12 xl:py-2">
      <MainContainer className="grid h-full gap-2 lg:py-10 xl:grid-cols-2">
        <div className="xl:py-12">
          <h1 className="text-5xl capitalize xl:text-[7rem]">
            full Stack Developer
          </h1>
          <p className="mt-6 max-w-[80%] font-extralight leading-8 text-foreground lg:text-xl xl:mt-12 xl:max-w-[70%] xl:text-2xl xl:leading-10">
            I build Digital products through Years of Software Engineering
            Mastery and experience has thought me alot
          </p>

          <button className="mt-12 hidden h-32 w-32 rounded-full bg-greenColor text-white/80 xl:block">
            SEE WORK
          </button>
        </div>

        <div className="relative overflow-hidden xl:overflow-visible">
          <Image
            className="relative z-10 mt-12 w-full xl:mt-0 xl:h-96 xl:w-full"
            src={WorkSpaceImg}
            alt="Thumbnail"
          />

          <div className="absolute -right-32 bottom-0 z-0 h-64 w-64 rounded-full bg-secondary-50 lg:-right-48 lg:bottom-32 lg:h-96 lg:w-96"></div>

          <div className="">
            <p className="relative z-10 ml-auto mt-8 text-right text-4xl uppercase xl:text-[6.5rem] xl:leading-[1]">
              Ezeobi Kingsley Sunny
            </p>
            <Link
              href={"/#projects"}
              className="flex h-28 w-28 items-center justify-center rounded-full bg-greenColor text-white/80 xl:hidden"
            >
              SEE WORK
            </Link>
          </div>
        </div>
      </MainContainer>

      <div className="flex items-center justify-center">
        <button className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-muted-foreground">
          <ArrowDownIcon className="h-12 w-8" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
