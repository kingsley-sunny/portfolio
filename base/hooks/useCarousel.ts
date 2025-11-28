"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

export const useCarousel = (props?: Parameters<typeof useEmblaCarousel>[0]) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: props?.align || "start" },
    [Autoplay()],
  );
  const [currentNo, setCurrentNo] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", (value) => {
        setCurrentNo(value.selectedScrollSnap());
      });

      emblaApi.on("autoplay:select", (value) =>
        setCurrentNo(value.selectedScrollSnap()),
      );
    }
  }, [emblaApi]);

  return { emblaApi, emblaRef, scrollPrev, scrollNext, currentNo };
};
