import Footer from "@/components/Footer";
import HomeHero from "@/components/sections/home/home-hero";
import HomeMarketOptimization from "@/components/sections/home/home-market-optimization";
import HomeCompany from "@/components/sections/home/home-company";
import HomeLokalisierung from "@/components/sections/home/home-lokalisierung";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HomeHero />
      <HomeMarketOptimization />
      <HomeCompany />
      <HomeLokalisierung />
      <Footer />
    </div>
  );
}
