import PageContent from '../components/PageContent';
import { useRouteError } from 'react-router-dom';
import MainNavigation from "../components/MainNavigation";

export default function ErrorPage() {
  const error = useRouteError();
  let title = 'An error occured';
  let message = 'Internal server error!';

  if(error.status === 500){
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = '404 Not found!'
    message = 'Could not find page!'
  }

  return (
    <>
     <MainNavigation/>
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
    </>
  );
}
