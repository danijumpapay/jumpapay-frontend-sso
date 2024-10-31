import React from "react";
import { Link } from "react-router-dom";

const Error: React.FC = () => (
  <div>
    <h1>
      404
    </h1>
    <Link to="/">Back to Home</Link>
  </div>
);

export default Error;