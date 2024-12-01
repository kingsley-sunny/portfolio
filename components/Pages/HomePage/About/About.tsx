import Link from "next/link";
import MainContainer from "../../../shared/Container";

export const About = () => {
  return (
    <div className="padding-all bg-foreground-200 py-12 lg:py-32">
      <MainContainer className="grid gap-16 lg:grid-cols-3">
        <div className="col-span-2">
          <h2 className="text-2xl leading-[1.5] lg:text-4xl lg:leading-[1.3]">
            In 2017 I started a startup Osmaxin Developers where we work on
            clients projects, tutor new developers, engage them in real life
            projects as interns.
          </h2>
          <p className="mt-8 font-light lg:text-xl">
            In my free time I engage the junior developers in knowledge sharing
            sessions, showing them patterns and best practices in building
            software. Am dedicating this website in sharing important knowledge
            that will help junior developers become in becoming better Senior
            developers.
          </p>
        </div>

        <div className="flex h-full w-full items-center justify-end">
          <Link
            href={"/#projects"}
            className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-muted-foreground text-foreground lg:h-40 lg:w-40 lg:text-lg"
          >
            ABOUT ME
          </Link>
        </div>
      </MainContainer>
    </div>
  );
};
