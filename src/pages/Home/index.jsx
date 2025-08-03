import HeroSection from "./components/HeroSection";
import LatestCollection from "./components/LatestCollection";
import BestSeller from "./components/BestSeller";
import OurPolicy from "./components/OurPolicy";
import Newsletter from "../../components/Newsletter";

export default function index() {
  return (
    <>
      <HeroSection />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <Newsletter />
    </>
  );
}
