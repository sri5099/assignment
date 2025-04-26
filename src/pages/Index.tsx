
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { SpaceOverview } from "@/components/SpaceOverview";
import { AppDownload } from "@/components/AppDownload";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <SpaceOverview />
      <AppDownload />
    </div>
  );
};

export default Index;
