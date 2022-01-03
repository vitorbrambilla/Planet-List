import React from "react";

import { Link } from "react-router-dom";

const NotFoundScreen = () => {
  return (
    <div>
      <h3>Page not found!</h3>
      <p>
        <Link to='/'>Back to listing</Link>
      </p>
    </div>
  )
}

export default NotFoundScreen;