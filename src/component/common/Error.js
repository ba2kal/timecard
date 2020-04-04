import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div>
    <div>
      <h1 class="title is-1">400</h1>
      <h3 class="title is-3">Bad Request</h3>
    </div>
    <div class="buttons">
    <Link to="/main">
      <button class="button is-primary">Home</button>
    </Link>
  </div>
  </div>
  );
}

