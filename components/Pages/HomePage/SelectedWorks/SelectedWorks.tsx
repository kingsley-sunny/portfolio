import Link from "next/link";
import { projects } from "../../../../base/data/projects";
import { cn } from "../../../../lib/utils";
import MainContainer from "../../../shared/Container";
import { ProjectCard } from "./ProjectCard/ProjectCard";

export const SelectedWorks = () => {
  return (
    // header
    <div className={cn("padding-all font-oswald py-12 lg:py-32")}>
      <MainContainer>
        <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-24">
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-grayColor lg:grid lg:space-y-5 lg:text-4xl">
            <span className="text-6xl uppercase tracking-wider lg:text-[10rem] lg:tracking-widest">
              Selected
            </span>
            <span className="inline-block w-full border-2 border-grayColor"></span>
          </h2>

          <h2 className="flex items-center gap-2 text-2xl font-semibold text-grayColor lg:grid lg:space-y-5 lg:text-4xl">
            <span className="inline-block w-full border-2 border-grayColor"></span>
            <span className="text-6xl uppercase tracking-wider lg:text-right lg:text-[10rem] lg:tracking-widest">
              Works
            </span>
          </h2>
        </div>

        <div className="mt-10 grid gap-12 md:grid-cols-2 xl:gap-16">
          {projects?.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>

        <div className="mx-auto mt-12">
          <Link
            href={"/#projects"}
            className="font-lexend flex justify-center text-base text-foreground underline lg:text-2xl"
          >
            SEE MORE PROJECTS
          </Link>
        </div>
      </MainContainer>
    </div>
  );
};
