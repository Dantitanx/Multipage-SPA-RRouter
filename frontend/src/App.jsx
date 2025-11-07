import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/Home';
import EventsPage, { loader as eventsLoader } from './Pages/Events';
import EventDetailPage, {
  loader as eventDetailLoader,
} from './Pages/EventDetail';
import NewEventPage, {action as newEventAction} from './Pages/NewEvent';
import EditEventPage from './Pages/EditEvent';
import RootLayout from './Pages/Root';
import EventsRootLayout from './Pages/EventsRoot';
import ErrorPage from './Pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
              },
              { path: 'edit', element: <EditEventPage /> },
            ],
          },
          { path: 'new', element: <NewEventPage />, action: newEventAction},
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
