import EventItem from "./event-items";

const EventList = (props) => {
  const { items } = props;
  console.log('🤖💬 ~ EventList ~ items:', items);
  
  return (
    <ul>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          image={event.image}
          date={event.date}
          location={ event.location } 
        />
      ))}
    </ul>
  );
};

export default EventList;
