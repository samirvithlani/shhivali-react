import React from "react";
import { Link } from "react-router-dom";

export const Netflix = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/netflix/shows">Shows</Link>
        </li>
        <li>
          <Link to="movies">Movies</Link>
        </li>
      </ul>
    </div>
  );
};
