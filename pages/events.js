import { useState } from "react";
import { useRouter } from "next/router";
export default function EventList({ eventList }) {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();
  const fetchSportsEvents = async () => {
    const resposne = await fetch(
      "http://localhost:4000/events?category=sports"
    );
    const data = await resposne.json();
    setEvents(data);
    router.push("/events?category=sports", undefined, { shallow: true });
  };

  return (
    <>
      <button onClick={fetchSportsEvents}>Sports Events</button>
      <h1>List of events</h1>
      {events.map((event) => (
        <div key={event.id}>
          <h2>
            {event.id} {event.title} {event.date} | {event.category}
          </h2>
          <p>{event.description}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps(context) {
  console.log("hello");
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=sports" : "";
  const resposne = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await resposne.json();

  return {
    props: {
      eventList: data,
    },
  };
}
