import { Link } from 'react-router-dom';

const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'some event',
  },
  {
    id: 'e2',
    title: 'Another event',
  },
];

function EventsPage() {
  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {DUMMY_EVENTS.map((ev) => (
          <li key={ev.id}>
            <Link to={ev.id}>{ev.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;
