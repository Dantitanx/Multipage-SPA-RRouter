import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/Home';
import EventsPage, { loader as eventsLoader } from './Pages/Events';
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from './Pages/EventDetail';
import NewEventPage from './Pages/NewEvent';
import EditEventPage from './Pages/EditEvent';
import RootLayout from './Pages/Root';
import EventsRootLayout from './Pages/EventsRoot';
import ErrorPage from './Pages/ErrorPage';
import { action as manipulateEventAction } from './components/EventForm';

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
                action: deleteEventAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
