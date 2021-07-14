import React from "react";
import { Link } from "react-router-dom";

import Home from "pages/Home";

export default function PageNotFoundMessage() {
  return (
    <section>
      <p>
        We couldn&apos;t find the page you were looking for. This is either
        because:
      </p>
      <ul>
        <li>
          There is an error in the URL entered into your web browser. Please
          check the URL and try again.
        </li>
        <li>The page you are looking for has been moved or deleted.</li>
      </ul>
      <p>
        You can return to the Home page by clicking{" "}
        <Link to={Home.navPath}>here</Link>.
      </p>
    </section>
  );
}
