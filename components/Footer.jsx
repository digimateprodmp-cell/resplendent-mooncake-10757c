export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="/" className="nav__logo">
              Coach <span>Sandeep</span>
            </a>
            <p>
              A Global Student Success Ecosystem — transforming students from
              Grade 8 onwards into the applicants top universities can&rsquo;t
              ignore.
            </p>
          </div>

          <div>
            <h4>Explore</h4>
            <a href="/about">About Coach Sandeep</a>
            <a href="/framework">The Framework</a>
            <a href="/programs">Programs</a>
            <a href="/test-prep">Test Prep</a>
            <a href="/universities">Universities</a>
          </div>

          <div>
            <h4>Connect</h4>
            <a href="/stories">Success Stories</a>
            <a href="/assessment">Readiness Assessment</a>
            <a href="/contact">Book A Session</a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>

          <div>
            <h4>Free Resources</h4>
            <a href="/resources">Guides &amp; Checklists</a>
            <a href="/tools">AI Tools</a>
            <a href="/events">Upcoming Events</a>
          </div>

          <div>
            <h4>Insights For Parents</h4>
            <form className="footer__news" onSubmit={undefined} action="#">
              <input type="email" placeholder="Your email" aria-label="Email" required />
              <button type="submit">Join</button>
            </form>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Coach Sandeep · Global Student Success Ecosystem</span>
          <div className="footer__legal">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
