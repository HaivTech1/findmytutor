import FAQ from "@/components/FAQ/Faq";
import GetPaidSection from "@/components/GetPaidSection/GetPaidSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import Mainlayout from "@/components/Mainlayout";
import SubFeature from "@/components/SubFeature/TestimonialSection";
import TutorStudent from "@/components/TutorStudent.tsx/Features";
import { PageSEO } from "@/hooks/SEO";
import siteSettings from "@/hooks/siteSettings";
import { UseAuth } from "@/hooks/UseAuth";

export default function Home() {

  UseAuth({
    middleware: "",
    redirectIfAuthenticated: ""
  });

  return (
    <Mainlayout>
      <PageSEO
        title={siteSettings.title}
        description={siteSettings.description}
      />

      <section>
        <HeroSection />
        <TutorStudent />
        <SubFeature />
        <FAQ />
        <GetPaidSection />
      </section>
    </Mainlayout>
  );
}
