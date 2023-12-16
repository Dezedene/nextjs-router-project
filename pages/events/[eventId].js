import { useRouter } from 'next/router' 
import { getEventById } from '../../dummy-data';

const EventDetailPage = () => {
  const router = useRouter()

  const eventId = router.query.eventId
  const event = getEventById(eventId)

  return (
    <div>
      <h1>Event Detail Page</h1>
    </div>
  );
};

export default EventDetailPage;
