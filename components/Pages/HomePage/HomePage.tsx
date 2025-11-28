import { useState } from "react";
import { About } from "./About/About";
import Banner from "./Banner/Banner";
import { BlogSection } from "./BlogSection/BlogSection";
import { HelpingCompanies } from "./HelpingCompanies/HelpingCompanies";
import { SelectedWorks } from "./SelectedWorks/SelectedWorks";

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);

  // Track the scroll position using useEffect
  // useEffect(() => {
  //   const handleScroll = () => {
  //     console.log("🚀 ~~ handleScroll ~~ window.scrollY:", window.scrollY);
  //     window.scrollTo(0, window.scrollY + 100);
  //     setScrollY(window.scrollY); // Update the scrollY state as the user scrolls
  //   };

  //   // Listen to the scroll event
  //   window.addEventListener("scroll", handleScroll);

  //   // Clean up event listener on component unmount
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
      <Banner />
      <About />
      <SelectedWorks />
      <HelpingCompanies />
      <BlogSection />
    </>
  );
};

export default HomePage;
