import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MissionSection from "./components/MissionSection";
import TeamSection from "./components/TeamSection";
import CTASection from "./components/CTASection";
import { getEmployees } from "@/lib/people";

export default function Home() {
  const employees = getEmployees();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <MissionSection />
        {/* <TeamSection employees={employees} /> */}
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
