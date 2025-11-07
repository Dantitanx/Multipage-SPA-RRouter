import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import EditEventPage from './Pages/EditEvent.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from './Pages/EventDetail.jsx';
import EventsPage, { loader as eventsLoader } from './Pages/Events.jsx';
import EventsRootLayout from './Pages/EventsRoot.jsx';
import HomePage from './Pages/Home.jsx';
import NewEventPage from './Pages/NewEvent.jsx';
import RootLayout from './Pages/Root.jsx';
import { action as manipulateEventAction } from './components/EventForm.jsx';
import NewsletterPage, { action as newsletterAction } from './Pages/Newsletter.jsx';

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
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;