import { Link } from 'react-router-dom';

const ErrorPage = ({ error }) => {
  return (
    <div className="flex flex-col w-full flex-1 items-center justify-center">
      <h1>Ooops something went wrong </h1>
      <p>{error.message}</p>
      <p>{error.statusCode}</p>
      <Link to={'/'}>Go back to home page</Link>
    </div>
  );
};

export default ErrorPage;
