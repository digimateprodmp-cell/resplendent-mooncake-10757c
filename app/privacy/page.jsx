import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";

export const metadata = {
  title: "Privacy Policy — Coach Sandeep Jadav",
  description:
    "How Coach Sandeep Jadav collects, uses, and protects the information you share through this website.",
};

const LAST_UPDATED = "August 8, 2026";

export default function PrivacyPage() {
  return (
    <main>
      <Nav />

      <section className="section section--gradient" style={{ paddingTop: "clamp(140px, 16vw, 200px)" }}>
        <div className="container">
          <Reveal className="shead">
            <h1 className="h-display">Privacy Policy</h1>
            <span className="kicker-after">Your Information, Handled Plainly</span>
          </Reveal>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <Reveal className="legal">
            <span className="legal__updated">Last updated: {LAST_UPDATED}</span>

            <p>
              This policy explains what information this website collects
              when you use it, how that information is handled, and who to
              contact if you have questions. It covers{" "}
              <strong>coachsandeep.com</strong> and the &ldquo;Global
              Student Success Ecosystem&rdquo; programs described on it
              (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;the site&rdquo;).
            </p>

            <h2>What We Collect</h2>
            <p>We only collect information you choose to give us, through:</p>
            <ul>
              <li><strong>The strategy session / contact form</strong> — parent name, phone/WhatsApp number, email, student&rsquo;s grade, and any notes you add about dream universities or concerns.</li>
              <li><strong>Free resource requests</strong> — your email address, so the requested guide can be sent to you.</li>
              <li><strong>Event waitlist &amp; newsletter sign-ups</strong> — your email address.</li>
              <li><strong>The chat widget</strong> — whatever you type into it, for the duration of that browser session only. It is not stored after you close the tab.</li>
            </ul>
            <p>
              The <strong>Future Readiness Assessment</strong> is different:
              your answers and score are calculated and shown entirely in
              your browser. They are never sent to us or stored anywhere
              unless you separately choose to share them through the
              contact form.
            </p>

            <h2>How Submissions Actually Work</h2>
            <p>
              This site does not run its own server-side database of form
              submissions. Every form is designed to open your own email
              app with a pre-filled message addressed to our team inbox
              (<a href="mailto:hello@coachsandeep.com">hello@coachsandeep.com</a>).
              When you press send, the message travels through your own
              email provider — the same as writing us an email directly.
              We only receive what you choose to send.
            </p>

            <h2>Cookies &amp; Analytics</h2>
            <p>
              This site does not currently use analytics, advertising, or
              tracking cookies. The only third-party resource it loads is
              Google Fonts, used to display the site&rsquo;s typefaces —
              loading a font can involve a request to Google&rsquo;s
              servers, in the same way almost any website using web fonts
              does. If that changes in the future (for example, if we add
              analytics), this policy will be updated first.
            </p>

            <h2>How We Use Your Information</h2>
            <ul>
              <li>To respond to your inquiry and arrange a strategy session.</li>
              <li>To send the specific guide, resource, or update you requested.</li>
              <li>To share occasional program updates, but only if you&rsquo;ve opted into a mailing list.</li>
            </ul>
            <p>
              We do not sell your information, and we do not share it with
              third parties for their own marketing purposes.
            </p>

            <h2>Data Retention</h2>
            <p>
              Because submissions arrive as ordinary emails, they are kept
              for as long as needed to respond to and manage your inquiry —
              the same as any other email in our inbox. You can ask us to
              delete your information at any time (see &ldquo;Your
              Rights&rdquo; below).
            </p>

            <h2>Children&rsquo;s Information</h2>
            <p>
              Our programs are built for students from Grade 8 onward, and
              this site is intended to be used by parents/guardians on
              behalf of their child, or by students old enough to make
              their own inquiries with parental awareness. Where
              information about a minor is submitted (for example, a
              student&rsquo;s grade or interests), we assume it has been
              shared with a parent or guardian&rsquo;s knowledge.
            </p>

            <h2>Your Rights</h2>
            <p>
              You can ask us, at any time, to tell you what information we
              hold about you, correct it, or delete it. Email{" "}
              <a href="mailto:hello@coachsandeep.com">hello@coachsandeep.com</a>{" "}
              and we&rsquo;ll act on it directly.
            </p>

            <h2>Changes To This Policy</h2>
            <p>
              If how we handle information changes — for example, if we add
              analytics or a new form service — we&rsquo;ll update this page
              and the &ldquo;Last updated&rdquo; date above.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about this policy or your information? Email{" "}
              <a href="mailto:hello@coachsandeep.com">hello@coachsandeep.com</a>.
            </p>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
