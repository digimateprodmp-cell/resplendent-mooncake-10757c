import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";

export const metadata = {
  title: "Terms of Use — Coach Sandeep Jadav",
  description:
    "The terms that apply when you use this website or engage with Coach Sandeep Jadav's mentorship programs.",
};

const LAST_UPDATED = "August 8, 2026";

export default function TermsPage() {
  return (
    <main>
      <Nav />

      <section className="section section--gradient" style={{ paddingTop: "clamp(140px, 16vw, 200px)" }}>
        <div className="container">
          <Reveal className="shead">
            <h1 className="h-display">Terms of Use</h1>
            <span className="kicker-after">Please Read Before You Book</span>
          </Reveal>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <Reveal className="legal">
            <span className="legal__updated">Last updated: {LAST_UPDATED}</span>

            <p>
              These terms apply when you use this website or engage with
              Coach Sandeep Jadav&rsquo;s mentorship programs (the
              &ldquo;Services&rdquo;). By using the site or booking a
              session, you&rsquo;re agreeing to the terms below.
            </p>

            <h2>About The Services</h2>
            <p>
              We provide long-term admissions mentorship across three
              programs — Young Achiever (Grade 8–9), Future Global Leader
              (Grade 10–11), and Elite University Admission (Grade 12) —
              along with free resources, an assessment tool, and informational
              content, as described on the{" "}
              <a href="/programs">Programs</a> and{" "}
              <a href="/framework">Framework</a> pages.
            </p>

            <h3>No Guarantee Of Admission</h3>
            <p>
              We do not, and cannot, guarantee admission to any specific
              university or program. University admissions are decided by
              the universities themselves, based on many factors outside
              any mentor&rsquo;s control. The outcomes and success stories
              shown on this site (see <a href="/stories">Success
              Stories</a>) reflect real, individual results and are not a
              promise of similar results for every student.
            </p>

            <h3>Assessment &amp; Tools Are Informational Only</h3>
            <p>
              The Future Readiness Assessment and any tools marked
              &ldquo;Coming Soon&rdquo; on the <a href="/tools">Tools</a>{" "}
              page produce indicative, non-binding scores or estimates for
              general guidance. They are not a formal evaluation and should
              not be treated as a guarantee of outcome, admission chances,
              or program fit.
            </p>

            <h2>Pricing &amp; Booking</h2>
            <p>
              Program pricing depends on the student&rsquo;s starting point
              and chosen program, and is confirmed individually during a
              strategy session — it is not published on this site.
              Cancellation, rescheduling, and refund terms for a booked
              program are provided directly at the time of enrollment;
              contact <a href="mailto:hello@coachsandeep.com">hello@coachsandeep.com</a>{" "}
              for the specifics that apply to you.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              The content on this site — including the Global Success
              Framework™, program names, written copy, and design — belongs
              to Coach Sandeep Jadav. You&rsquo;re welcome to read and share
              links to it, but please don&rsquo;t copy or republish it
              without permission.
            </p>

            <h2>Using This Site</h2>
            <p>
              Please use the contact forms, chat widget, and assessment tool
              honestly and for their intended purpose. We reserve the right
              to disregard spam, abusive submissions, or attempts to misuse
              the site.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              This site links to third-party platforms — including
              WhatsApp, Calendly, LinkedIn, and Instagram — for
              communication and scheduling. Once you leave this site for
              one of those platforms, their own terms and privacy practices
              apply, not ours.
            </p>

            <h2>Limitation Of Liability</h2>
            <p>
              The information on this site is provided to help you make
              informed decisions about your child&rsquo;s education, and is
              offered &ldquo;as is,&rdquo; without warranties of any kind.
              To the extent permitted by law, Coach Sandeep Jadav is not
              liable for decisions made solely on the basis of information
              published on this site, without a direct conversation with
              our team.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms are governed by the laws of India, where Coach
              Sandeep Jadav is based, without prejudice to any statutory
              consumer protections that may apply to you in your own
              location.
            </p>

            <h2>Changes To These Terms</h2>
            <p>
              We may update these terms from time to time. Continued use of
              the site after an update means you accept the revised terms.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about these terms? Email{" "}
              <a href="mailto:hello@coachsandeep.com">hello@coachsandeep.com</a>.
            </p>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
