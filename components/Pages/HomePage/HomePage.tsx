import { About } from "./About/About";
import Banner from "./Banner/Banner";
import { HelpingCompanies } from "./HelpingCompanies/HelpingCompanies";
import { SelectedWorks } from "./SelectedWorks/SelectedWorks";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <About />
      <SelectedWorks />
      <HelpingCompanies />
      <Banner />
      <Banner />
    </div>
  );
};

export default HomePage;
