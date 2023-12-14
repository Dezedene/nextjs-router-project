import Link from "next/link"

import classes from  './event-items.module.css'

const EventItem = (props) => {
    const { title, image, date, location, id } = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
      day: 'numeric',
      month:'long',
      year: 'numeric'
    })

    const formattedAddress = location.replace(', ', '\n')
    const exploreLink = `/events/${id}`

  return (
    <li>
      <img src={ '/' + image } alt={ title } />

      <div>
        <div>
          <h2>Title</h2>
        </div>

        <div>
          <time>{ humanReadableDate }</time>
        </div>

        <div>
          <address>{ formattedAddress }</address>
        </div>
        <Link  href={ exploreLink }>Explore Event</Link>
      </div>
    </li>
  );
};

export default EventItem;
