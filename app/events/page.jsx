import EventsClient from "./EventsClient";

export const metadata = {
  title: "Upcoming Events & Webinars — Coach Sandeep Jadav",
  description:
    "Free webinars, masterclasses, and live Q&A sessions for parents and students — Monthly Parent Q&A, seasonal masterclasses, virtual university fairs, and bi-weekly office hours.",
};

export default function EventsPage() {
  return <EventsClient />;
}
