import portraitImg from "@/public/images/portrait.jpeg";
import Image from "next/image";
import Link from "next/link";
import MainContainer from "../../../shared/Container";

export const HelpingCompanies = () => {
  return (
    <div className="padding-all bg-blueGray py-10 lg:pb-36 lg:pt-20">
      <MainContainer className="relative">
        <div className="relative w-full">
          <div className="relative mx-auto flex h-96 w-96 justify-center rounded-full bg-greenColor/20 lg:h-[43rem] lg:w-[43rem]">
            <div className="absolute bottom-0 mx-auto h-80 w-64 overflow-hidden rounded-sm backdrop-filter lg:h-[579px] lg:w-[444px]">
              <Image
                src={portraitImg}
                fill
                className="h-full w-full"
                objectFit="cover"
                alt="Profile picture"
              />
              <div className="absolute inset-0 h-full w-full bg-black/40"></div>
            </div>
            <h2 className="absolute bottom-16 text-center text-2xl font-semibold text-white lg:hidden lg:text-[84px] lg:leading-[100px]">
              Helping tech company build better products
            </h2>
          </div>
          <div className="absolute bottom-24 w-full">
            <h2 className="mx-auto hidden max-w-7xl text-center font-light text-white lg:block lg:text-[84px] lg:leading-[100px]">
              Helping tech company build better products
            </h2>
          </div>
        </div>

        <Link
          href={"/#projects"}
          className="static right-10 mx-auto mt-8 flex h-36 w-36 items-center justify-center rounded-full bg-greenColor text-sm text-white/80 lg:absolute lg:bottom-3 lg:mt-0 lg:h-40 lg:w-40 lg:text-base xl:right-20"
        >
          START A PROJECT
        </Link>
      </MainContainer>
    </div>
  );
};
