import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import PressBar from "../components/PressBar";
import AudienceToggle from "../components/AudienceToggle";
import Reality from "../components/Reality";
import Story from "../components/Story";
import Framework from "../components/Framework";
import Programs from "../components/Programs";
import Growth from "../components/Growth";
import Dashboard from "../components/Dashboard";
import ParentTrust from "../components/ParentTrust";
import Universities from "../components/Universities";
import Testimonials from "../components/Testimonials";
import NextSteps from "../components/NextSteps";
import Finale from "../components/Finale";
import Footer from "../components/Footer";

export const metadata = {
  title: "Coach Sandeep Jadav — Global Student Success Ecosystem | University Admissions Mentorship",
  description:
    "From Grade 8 to global university admission — a mentorship ecosystem preparing students for Harvard, Oxford, Stanford, MIT and beyond. Real framework, real mentors, real outcomes.",
};

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Stats />
      <PressBar />
      <AudienceToggle />
      <Reality />
      <Story />
      <Framework />
      <Programs />
      <Growth />
      <Dashboard />
      <ParentTrust />
      <Universities />
      <Testimonials />
      <NextSteps />
      <Finale />
      <Footer />
    </main>
  );
}
