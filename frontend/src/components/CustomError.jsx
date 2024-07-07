import { useRouteError, Link } from 'react-router-dom';

const CustomError = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <h1>Ooops!!!</h1>
      <p>{error.statusText || error.status}</p>
      <p>{error.status}</p>
      <Link to={'/'}>Go back to home page</Link>
    </div>
  );
};

export default CustomError;
