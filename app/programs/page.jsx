import ProgramsClient from "./ProgramsClient";

export const metadata = {
  title: "Programs — Young Achiever, Future Global Leader, Elite University Admission | Coach Sandeep Jadav",
  description:
    "Three programs, one ecosystem: Young Achiever (Grade 8–9), Future Global Leader (Grade 10–11), and Elite University Admission (Grade 12) — every student enters at their grade, exits globally competitive.",
};

/**
 * FAQPage structured data — mirrors the FAQS array in ProgramsClient.jsx.
 * Kept in sync manually; if the FAQ copy changes there, update this too.
 */
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Isn't Grade 8 too early to think about universities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's too early to apply — and exactly the right time to build. The profiles that win Ivy League admissions are built over 4–5 years of leadership, research, and achievement. Starting in Grade 12 means competing against students who started in Grade 8.",
      },
    },
    {
      "@type": "Question",
      name: "How is this different from a study-abroad agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Agencies process applications. We build applicants. This is a long-term mentorship ecosystem — personality discovery, skill development, leadership building, and only then, admission strategy.",
      },
    },
    {
      "@type": "Question",
      name: "How involved are parents in the journey?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Deeply, but efficiently: monthly progress reports, a live student dashboard, and scheduled strategy calls. Full visibility, zero guesswork.",
      },
    },
    {
      "@type": "Question",
      name: "Does my child work with one mentor or many?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One dedicated mentor per student, for consistency and trust — supported by specialists for research, essays, and interviews when needed.",
      },
    },
    {
      "@type": "Question",
      name: "What if my child doesn't know what they want yet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That's the starting point, not a problem. Stage one of the framework — Discover — exists precisely to answer that question with evidence, not guesswork.",
      },
    },
  ],
};

export default function ProgramsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <ProgramsClient />
    </>
  );
}
