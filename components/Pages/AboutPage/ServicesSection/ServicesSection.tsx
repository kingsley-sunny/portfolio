import { SERVICES } from "../../../../base/data/services";
import MainContainer from "../../../shared/Container";
import { ServiceSectionCard } from "./ServiceSectionCard";

export const ServicesSection = () => {
  return (
    <section className="padding-all py-8 lg:py-16">
      <MainContainer>
        <h2 className="text-4xl font-light lg:text-7xl">
          I can help you with ...
        </h2>
        <div className="mt-12 lg:mt-20 lg:flex">
          {SERVICES.map((service) => (
            <ServiceSectionCard key={service.id} {...service} />
          ))}
        </div>
      </MainContainer>
    </section>
  );
};
