import Image from "next/image";
import { TESTIMONIES } from "../../../../base/data/testimonies";

export const TestimonialCard = ({
  content,
  id,
  img,
  name,
  title,
}: (typeof TESTIMONIES)[0]) => {
  return (
    <div className="mr-5 w-full max-w-full shrink-0">
      <div className="mx-auto max-w-[830px] font-light">
        <p className="text-center leading-[1.5] lg:text-3xl lg:leading-[1.5]">
          {content}
        </p>
        <div className="mt-6 flex flex-col items-center lg:mt-8">
          <div className="relative h-[50px] w-[50px] overflow-hidden rounded-full lg:h-[90px] lg:w-[90px]">
            <Image
              src={img}
              fill
              className="h-[50px] w-[50px] object-cover shadow-inner lg:h-[90px] lg:w-[90px]"
              alt="Profile picture"
            />
          </div>
          <p className="mt-3 text-center text-xs uppercase text-muted-foreground lg:text-sm">
            {name} - {title}
          </p>
        </div>
      </div>
    </div>
  );
};
