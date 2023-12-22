import { useRouter } from 'next/router'

import { getAllEvents } from "../../dummy-data";
import EventList from '../../components/events/event-list'
import EventsSearch from '../../components/events/events-search'

function AllEventsPage() {
  // remember that all hooks must be called directly inside our component function
  const router = useRouter()
  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}/`
    router.push(fullPath)
  }

  return (
    <>
      <EventsSearch findEventFunction={findEventsHandler}/>
      <EventList items = {events} />
    </>
  );
};

export default AllEventsPage;
