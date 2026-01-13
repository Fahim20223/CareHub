import About from "@/components/shared/About/About";
import BannerSlider from "@/components/shared/Banner/BannerSlider";
import ServicesOverview from "@/components/shared/ServiesOverview/ServicesOverview";

import Testimonials from "@/components/shared/Testimonials/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <BannerSlider></BannerSlider>
      <About />
      <ServicesOverview />
      <Testimonials />
    </div>
  );
}
