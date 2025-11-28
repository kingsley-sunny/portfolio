"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIES } from "../../../../base/data/testimonies";
import { useCarousel } from "../../../../base/hooks/useCarousel";
import MainContainer from "../../../shared/Container";
import { TestimonialCard } from "./TestimonialCard";

export const TestimonialSection = () => {
  const { emblaRef, scrollNext, scrollPrev } = useCarousel({ align: "center" });

  return (
    <section className="padding-all py-20 lg:py-32">
      <MainContainer>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {TESTIMONIES.map((testimony) => (
              <TestimonialCard key={testimony.id} {...testimony} />
            ))}
          </div>
        </div>
        {/* arrows */}
        <div className="mt-5 flex items-center justify-center space-x-4 lg:mt-10">
          <button
            className="rounded-full border border-foreground p-1.5 lg:p-3"
            onClick={scrollPrev}
          >
            <ChevronLeft />
          </button>

          <button
            className="rounded-full border border-foreground p-1.5 lg:p-3"
            onClick={scrollNext}
          >
            <ChevronRight />
          </button>
        </div>
      </MainContainer>
    </section>
  );
};
