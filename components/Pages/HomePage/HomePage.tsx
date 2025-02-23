import { About } from "./About/About";
import Banner from "./Banner/Banner";
import { BlogSection } from "./BlogSection/BlogSection";
import { HelpingCompanies } from "./HelpingCompanies/HelpingCompanies";
import { SelectedWorks } from "./SelectedWorks/SelectedWorks";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <About />
      <SelectedWorks />
      <HelpingCompanies />
      <BlogSection />
    </div>
  );
};

export default HomePage;
