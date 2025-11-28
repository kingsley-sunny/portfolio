import portraitImg from "@/public/images/portrait.jpeg";
import Image from "next/image";
import MainContainer from "../../../shared/Container";

export const AboutPageBanner = () => {
  return (
    <div className="padding-all py-10 lg:py-24">
      <MainContainer>
        <h1 className="text-4xl font-light leading-[1.3] lg:max-w-[70%] lg:text-[94px] lg:leading-[1.1]">
          Helping brands thrive in the digital world
        </h1>
        <div className="mt-6 h-full font-light leading-[1.6] lg:mt-14 lg:grid lg:grid-cols-2 lg:gap-10 lg:text-xl lg:leading-[1.6]">
          <p className="">
            In my free time I engage the junior developers in knowledge sharing
            sessions, showing them patterns and best practices in building
            software. Am dedicating this website in sharing important knowledge
            that will help junior developers become in becoming better Senior
            developers.
            <span className="hidden lg:mt-5 lg:block">
              <br />
              In my free time I engage the junior developers in knowledge
              sharing sessions, showing them patterns and best practices in
              building software. Am dedicating this website in sharing important
              knowledge that will help junior developers become in becoming
              better Senior developers.
            </span>
          </p>
          <div className="relative mt-10 h-[400px] w-full lg:ml-32 lg:mt-0 lg:h-[570px] lg:w-[440px]">
            <Image
              src={portraitImg}
              fill
              className="h-full w-full object-cover"
              alt="Profile picture"
            />
          </div>
        </div>
      </MainContainer>
    </div>
  );
};
