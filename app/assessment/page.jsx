import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Assessment from "../../components/Assessment";

export const metadata = {
  title: "Future Readiness Assessment — Coach Sandeep Jadav",
  description:
    "Get your child's Global University Readiness Score in 2 minutes. Free, personalized, and revealing.",
};

export default function AssessmentPage() {
  return (
    <main>
      <Nav />
      <div style={{ paddingTop: "clamp(60px, 8vw, 90px)" }}>
        <Assessment />
      </div>
      <Footer />
    </main>
  );
}
