import Image from "next/image";
import Link from "next/link";
import { projects } from "../../../../../base/data/projects";
import { cn } from "../../../../../lib/utils";

export const ProjectCard = ({
  category,
  name,
  href,
  techStack,
  year,
  img,
  bgClassName,
}: (typeof projects)[0]) => {
  return (
    <Link href={href} className="relative block">
      {/* image */}
      <div
        className={cn(
          "h-[15rem] w-full px-8 py-8 lg:h-[28rem] lg:p-16",
          bgClassName,
        )}
      >
        <div className="relative h-full w-full">
          <Image src={img} alt={name} fill objectFit="contain" />
        </div>
      </div>

      {/* text and description */}
      <div className="">
        <h2 className="border-b border-b-foreground/50 py-4 text-4xl lg:text-6xl">
          {name}
        </h2>
        <div className="font-lexend mt-2 flex items-center justify-between text-sm uppercase text-foreground/70 lg:mt-4 lg:text-base">
          <p className="">{category}</p>
          <p className="flex items-center gap-2">
            <p className="h-[0.4px] w-6 bg-foreground"></p>
            {year}
          </p>
        </div>
      </div>
    </Link>
  );
};
