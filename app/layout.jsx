import "./globals.css";
import StickyCTA from "../components/StickyCTA";
import ChatWidget from "../components/ChatWidget";
import N8nChat from "../components/N8nChat";

export const metadata = {
  title: "Coach Sandeep | Build The Student Top Universities Can't Ignore",
  description:
    "A long-term mentorship ecosystem that transforms students from Grade 8 onwards into globally competitive university applicants.",
  keywords:
    "study abroad mentorship, ivy league admission, global university preparation, student profile building, Coach Sandeep",
  openGraph: {
    title: "Coach Sandeep — Global Student Success Ecosystem",
    description:
      "Build the student top universities can't ignore. Mentorship from Grade 8 to admission.",
    type: "website",
  },
};

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Coach Sandeep Jadav — Global Student Success Ecosystem",
  description:
    "A long-term mentorship ecosystem that transforms students from Grade 8 onwards into globally competitive university applicants.",
  url: "https://coachsandeep.com",
  areaServed: "Worldwide",
  sameAs: ["https://wa.me/", "https://linkedin.com/", "https://instagram.com/"],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Young Achiever Program (Grade 8–9)" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Future Global Leader Program (Grade 10–11)" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Elite University Admission (Grade 12)" } },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Manrope:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
        />
      </head>
      <body>
        {children}
        <StickyCTA />
        <ChatWidget />
        <N8nChat />
      </body>
    </html>
  );
}
