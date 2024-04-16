import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div>
        <h1 className="text-red-500 text-xl text-center ">Oops!</h1>
        <p className="text-xl my-5">Sorry, an unexpected error has occurred.</p>
        <p className="text-center text-xl">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
