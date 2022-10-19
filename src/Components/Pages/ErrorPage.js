import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Try refreshing the browser but if this error persists please email me at leila.alhemali@gmail.com</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}