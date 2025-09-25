import Footer from "@/components/Footer";
import HomeHero from "@/components/sections/home/home-hero";
import HomeMarketOptimization from "@/components/sections/home/home-market-optimization";
import HomeCompany from "@/components/sections/home/home-company";
import HomeLocalization from "@/components/sections/home/home-localization";
import HomeDatev from "@/components/sections/home/home-datev";
import HomeCompliance from "@/components/sections/home/home-compliance";
import HomePartners from "@/components/sections/home/home-partners";
import HomeCta from "@/components/sections/home/home-cta";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HomeHero />
      <HomeMarketOptimization />
      <HomeCompany />
      <HomeLocalization />
      <HomeDatev />
      <HomeCompliance />
      <HomePartners />
      <HomeCta />
      <Footer />
    </div>
  );
}
