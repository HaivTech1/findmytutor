import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";

import FAQ from "@/components/FAQ/Faq";
import GetPaidSection from "@/components/GetPaidSection/GetPaidSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import Mainlayout from "@/components/Mainlayout";
import SubFeature from "@/components/SubFeature/TestimonialSection";
import TutorStudent from "@/components/TutorStudent.tsx/Features";
import { UseAuth } from "@/hooks/UseAuth";

export default function Home() {

  UseAuth({
    middleware: "",
    redirectIfAuthenticated: ""
  });

  return (
    <Mainlayout>
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
