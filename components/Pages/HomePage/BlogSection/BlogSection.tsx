"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { DUMMY_BLOGS } from "../../../../base/data/blog-data";
import { useCarousel } from "../../../../base/hooks/useCarousel";
import { BlogCard } from "../../../shared/BlogCard/BlogCard";
import MainContainer from "../../../shared/Container";

export const BlogSection = () => {
  const { emblaRef, scrollNext, scrollPrev } = useCarousel();
  return (
    <section className="padding-all bg-popover py-20 lg:py-24">
      <MainContainer className="relative flex items-center justify-between">
        <div className="absolute -left-10 -top-14 z-0 h-44 w-44 rounded-full bg-secondary-50 transition-all duration-100 lg:-left-10 lg:-top-20 lg:h-80 lg:w-80"></div>

        {/* header */}
        <h1 className="relative z-10 font-oswald text-5xl font-medium tracking-[2] text-grayColor lg:text-[122px] lg:tracking-[30px]">
          BLOG
        </h1>

        {/* arrows */}
        <div className="mt-8 flex items-center justify-end space-x-4 lg:mt-10">
          <button
            className="rounded-full border border-foreground p-2 lg:p-3"
            onClick={scrollPrev}
          >
            <ChevronLeft />
          </button>

          <button
            className="rounded-full border border-foreground p-2 lg:p-3"
            onClick={scrollNext}
          >
            <ChevronRight />
          </button>
        </div>
      </MainContainer>

      <div className="mt-16 overflow-hidden lg:mt-28" ref={emblaRef}>
        <div className="flex">
          {DUMMY_BLOGS.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>

      <MainContainer>
        <div className="mt-12 flex justify-end lg:mt-24">
          <Link
            href={"/blog"}
            className="flex justify-center font-lexend text-base text-foreground underline lg:text-2xl"
          >
            SEE MORE POSTS
          </Link>
        </div>
      </MainContainer>
    </section>
  );
};
