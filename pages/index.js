import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

function Homepage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <EventList items={featuredEvents} />
    </>
  );
}

export default Homepage;
