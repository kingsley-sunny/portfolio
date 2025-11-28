import { AboutPageBanner } from "./AboutPageBanner/AboutPageBanner";
import { ServicesSection } from "./ServicesSection/ServicesSection";
import { TestimonialSection } from "./TestimonialSection/TestimonialSection";

export const AboutPage = () => {
  return (
    <>
      <AboutPageBanner />
      <ServicesSection />
      <TestimonialSection />
    </>
  );
};
