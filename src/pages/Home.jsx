import HomeHeader from "../components/Home/HomeHeader";
import ScienceSection from "../components/Home/ScienceSection";
import SolutionSection from "../components/Home/SolutionSection";
import TrustSection from "../components/Home/TrustSection";
import ServicesSection from "../components/Home/ServicesSection";
import TestimonialSection from "../components/Home/TestimonialSection";
import PressCoverageSection from "../components/Home/PressCoverageSection";
import HomeBlogSection from "../components/Home/HomeBlogSection";
import CtaSection from "../components/Home/CtaSection";
import FaqSection from "../components/Home/FaqSection";
function Home() {
  return (
    <div id="wealth-home">
      <div id="get-started">
        <div className="wealth-header-image mobile-wealth-header"></div>
        <HomeHeader />
        <ScienceSection />
        <SolutionSection />
        <TrustSection />
        <ServicesSection />
        <TestimonialSection />
        <PressCoverageSection />
        <HomeBlogSection />
        <CtaSection />
        <FaqSection />

      </div>
    </div>
  );
}

export default Home;
