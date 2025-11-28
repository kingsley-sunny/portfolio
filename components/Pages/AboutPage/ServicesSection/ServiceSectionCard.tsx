import { SERVICES } from "../../../../base/data/services";

export const ServiceSectionCard = ({
  description,
  id,
  name,
}: (typeof SERVICES)[0]) => {
  return (
    <div className="relative py-4 font-light lg:px-16">
      <div className="absolute -left-16 top-0 h-[150px] w-[150px] rounded-full bg-secondary-50 transition-all duration-500 lg:left-0 lg:h-[175px] lg:w-[175px]"></div>
      <div className="relative">
        <h2 className="hidden text-3xl font-light lg:block">{"0" + id}</h2>
        <h1 className="mt-4 text-3xl">{name}</h1>
        <p className="mt-4 text-base leading-[1.5] text-muted-foreground lg:mt-7 lg:text-xl lg:leading-[1.5]">
          {description}
        </p>
      </div>
    </div>
  );
};
