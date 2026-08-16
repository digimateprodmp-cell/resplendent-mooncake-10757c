/**
 * Rule-based knowledge base for the FAQ chat widget — no API, no vendor,
 * no LLM call. Every answer is drawn from copy that already exists
 * elsewhere on the site, so the bot never states anything the rest of
 * the site doesn't already stand behind. Pricing, guarantees, refunds,
 * and discounts are deliberately NOT fabricated — where the site has no
 * published answer, the bot says so honestly and routes to a real human.
 *
 * Matching: each KB entry scores on (a) how many keyword phrases appear
 * in the user's text and (b) how specific those phrases are (multi-word
 * phrases outweigh single generic words), so "how much does grade 8
 * cost" doesn't get swallowed by the wrong entry just because "grade 8"
 * appears elsewhere too.
 */

export const QUICK_QUESTIONS = [
  "What programs do you offer?",
  "Isn't Grade 8 too early?",
  "How much does it cost?",
  "Can you guarantee admission?",
  "How is this different from an agency?",
  "How do I book a session?",
];

export const KB = [
  {
    keywords: ["program", "programs", "offer", "course", "courses"],
    text:
      "Three programs, one ecosystem: Young Achiever (Grade 8–9), Future Global Leader (Grade 10–11), and Elite University Admission (Grade 12). Every student enters at their grade and exits globally competitive.",
    link: { href: "/programs", label: "See all programs →" },
  },
  {
    keywords: ["grade 8", "too early", "too young", "young", "start early", "starting age", "youngest age"],
    text:
      "It's too early to apply — and exactly the right time to build. The profiles that win top admissions are built over 4–5 years of leadership, research, and achievement. Starting in Grade 12 means competing against students who started in Grade 8.",
    link: { href: "/framework", label: "See the 5-stage framework →" },
  },
  {
    keywords: ["too late", "already grade 12", "grade 12 now", "last minute", "senior year", "already in 12th"],
    text:
      "Grade 12 is late for building a 4-year profile — but not too late to apply well. The Elite University Admission program is built exactly for this stage: strategic shortlisting, essay mastery, interview prep, and a decisive application strategy, done with calm rather than panic.",
    link: { href: "/programs", label: "See the Elite University Admission program →" },
  },
  {
    keywords: ["cost", "price", "pricing", "fee", "fees", "how much", "expensive", "afford"],
    text:
      "Pricing depends on the program and your child's starting point, so I won't guess a number here. The fastest way to get an exact quote is a free strategy session — no pressure, no obligation.",
    link: { href: "/contact", label: "Book a free strategy session →" },
  },
  {
    keywords: ["guarantee", "guaranteed", "promise", "assure", "definitely get in", "sure shot", "100%"],
    text:
      "No honest mentor can guarantee a specific admission — and we won't pretend otherwise. What we can tell you: our students carry a 95% admission success rate into their target-tier universities, built on years of profile work, not a promise on paper.",
    link: { href: "/stories", label: "See real outcomes →" },
  },
  {
    keywords: ["refund", "money back", "cancel", "cancellation", "reschedule"],
    text:
      "Refund and cancellation terms aren't something I'll guess at over chat — they depend on the program and stage you're in. A member of the team can walk you through the exact terms directly.",
    link: { href: "/contact", label: "Talk to the team →" },
  },
  {
    keywords: ["discount", "sibling", "multiple kids", "second child"],
    text:
      "Any special pricing for siblings or multiple children isn't something published here — best to ask directly during a strategy session so you get an exact answer, not a guess.",
    link: { href: "/contact", label: "Ask during a strategy session →" },
  },
  {
    keywords: ["agency", "different", "consultant", "consultancy", "other services", "compare"],
    text:
      "Agencies process applications. This is a long-term mentorship ecosystem — personality discovery, skill development, and leadership building, and only then, admission strategy.",
    link: { href: "/framework", label: "See how it works →" },
  },
  {
    keywords: ["parent", "parents", "involved", "involvement", "updates", "progress report"],
    text:
      "Deeply, but efficiently: monthly progress reports, a live student dashboard, and scheduled strategy calls. Full visibility, zero guesswork.",
    link: { href: "/about", label: "More about the parent experience →" },
  },
  {
    keywords: ["mentor", "mentors", "counsellor", "counselor", "coach", "who teaches", "one on one", "1:1", "group"],
    text:
      "One dedicated mentor per student, for consistency and trust — supported by specialists for research, essays, and interviews when needed. It's 1:1 mentorship, not a classroom of students.",
    link: { href: "/about", label: "Meet the mentors →" },
  },
  {
    keywords: ["doesn't know", "don't know", "no idea", "undecided", "unsure what", "not sure what they want"],
    text:
      "That's the starting point, not a problem. Stage one of the framework — Discover — exists precisely to answer that question with evidence, not guesswork.",
    link: { href: "/framework", label: "See Stage 1: Discover →" },
  },
  {
    keywords: ["framework", "methodology", "process", "how does it work", "how it works", "stages"],
    text:
      "The Global Success Framework™ has five stages: Discover, Design, Develop, Differentiate, Destination — each one compounds the last, like a production line for globally competitive students.",
    link: { href: "/framework", label: "See the full framework →" },
  },
  {
    keywords: ["university", "universities", "harvard", "oxford", "stanford", "mit", "ivy", "which universities"],
    text:
      "Students are prepared for institutions like Harvard, Oxford, Stanford, MIT, Cambridge, Yale, Imperial, and NUS — and everything in between.",
    link: { href: "/universities", label: "See the universities →" },
  },
  {
    keywords: ["time commitment", "hours per week", "how much time", "how many hours", "workload", "busy schedule"],
    text:
      "It varies by program and stage, since a Grade 8 foundation year looks different from Grade 12 application season — but it's designed to fit around school, not compete with it. A strategy session will map out exactly what your child's week would look like.",
    link: { href: "/contact", label: "Ask about the exact schedule →" },
  },
  {
    keywords: ["test prep", "sat", "act", "ielts", "toefl", "psat", "gre", "ucat", "advanced placement", "standardized test"],
    text:
      "Yes — we run structured prep for SAT, ACT, AP, PSAT, TOEFL, GRE, and UCAT, timed around each student's real schedule rather than a last-minute cram. It sits alongside profile-building, research, essays, and interview prep, not as a stand-alone tutoring service.",
    link: { href: "/test-prep", label: "See all test prep →" },
  },
  {
    keywords: ["average student", "not topper", "not gifted", "only for toppers", "already excellent", "weak student", "struggling student"],
    text:
      "This isn't only for students who are already toppers. Stage one is built to discover a student's real strengths, whatever they are, and design a multi-year plan from that starting point — not to filter for students who don't need help.",
    link: { href: "/framework", label: "See how it starts →" },
  },
  {
    keywords: ["legit", "trust", "trustworthy", "scam", "real", "genuine", "reviews", "credibility"],
    text:
      "Fair question to ask before committing. 8+ years mentoring, 1200+ students guided, families across 50+ countries — and real, named outcomes on the Success Stories page, not stock testimonials.",
    link: { href: "/stories", label: "Read real success stories →" },
  },
  {
    keywords: ["book", "session", "call", "talk to", "contact", "reach", "speak to someone"],
    text:
      "The fastest path is a 45-minute strategy session — your child's current position, potential, and a candid roadmap.",
    link: { href: "/contact", label: "Book your strategy session →" },
  },
  {
    keywords: ["free", "resource", "resources", "guide", "download"],
    text:
      "Six free guides are available — SAT strategy, scholarships, application checklists, essay templates, country guides, and visas.",
    link: { href: "/resources", label: "Browse free resources →" },
  },
  {
    keywords: ["event", "events", "webinar", "workshop", "masterclass"],
    text:
      "There's a recurring Parent Q&A session, seasonal masterclasses, a virtual university fair, and bi-weekly live office hours.",
    link: { href: "/events", label: "See upcoming events →" },
  },
  {
    keywords: ["online", "in person", "location", "where", "city", "remote", "country you are in"],
    text: "Sessions run both online and in person, whichever suits your family.",
    link: { href: "/contact", label: "Book a session →" },
  },
  {
    keywords: ["story", "stories", "result", "results", "success", "testimonial", "admitted", "past students"],
    text:
      "Real students, real admissions — including a full journey from Grade 8 to MIT.",
    link: { href: "/stories", label: "See success stories →" },
  },
  {
    keywords: ["assessment", "readiness", "score", "quiz", "how ready is my child"],
    text:
      "The Future Readiness Assessment is a 2-minute, 6-question quiz that gives your child a personalized Global University Readiness Score.",
    link: { href: "/assessment", label: "Take the free assessment →" },
  },
];

const GREETINGS = ["hi", "hello", "hey", "hola", "namaste", "good morning", "good afternoon", "good evening"];
const THANKS = ["thanks", "thank you", "thankyou", "ty", "appreciate it"];
const FAREWELLS = ["bye", "goodbye", "see you", "talk later"];

function normalize(str) {
  return str.toLowerCase().trim().replace(/[^\w\s:%]/g, "");
}

export function findAnswer(rawInput) {
  const input = normalize(rawInput);
  if (!input) return null;

  if (THANKS.some((g) => input === g || input.startsWith(g + " ") || input.includes(g))) {
    return {
      text: "Anytime! If anything else comes up — pricing, programs, or what to do next — just ask.",
      link: null,
    };
  }

  if (FAREWELLS.some((g) => input === g || input.startsWith(g))) {
    return {
      text: "Take care! When you're ready, a strategy session is the fastest way to turn this into a real plan.",
      link: { href: "/contact", label: "Book a strategy session →" },
    };
  }

  if (GREETINGS.some((g) => input === g || input.startsWith(g + " "))) {
    return {
      text: "Hi! Ask me about programs, the framework, pricing, or how to get started — or tap one of the quick questions below.",
      link: null,
    };
  }

  let best = null;
  let bestScore = 0;
  for (const entry of KB) {
    let score = 0;
    for (const k of entry.keywords) {
      if (input.includes(k)) {
        // Multi-word phrases are more specific than single generic words —
        // weight them higher so, e.g., "too late" doesn't lose to a loose
        // single-word match in an unrelated entry.
        score += k.split(" ").length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }
  return best;
}
