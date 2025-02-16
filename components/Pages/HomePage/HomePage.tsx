import { About } from "./About/About";
import Banner from "./Banner/Banner";
import { SelectedWorks } from "./SelectedWorks/SelectedWorks";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <About />
      <SelectedWorks />
      <Banner />
      <Banner />
    </div>
  );
};

export default HomePage;
