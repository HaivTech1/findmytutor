import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";

import FAQ from "@/components/FAQ/Faq";
import GetPaidSection from "@/components/GetPaidSection/GetPaidSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import Mainlayout from "@/components/Mainlayout";
import SubFeature from "@/components/SubFeature/TestimonialSection";
import TutorStudent from "@/components/TutorStudent.tsx/Features";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <Mainlayout>
      <section className={`${geistSans.variable} ${geistMono.variable}`}>
        <HeroSection />
        <TutorStudent />
        <SubFeature />
        <FAQ />
        <GetPaidSection />
      </section>
    </Mainlayout>
  );
}
