import React from "react";
import { Link } from "react-router-dom";

const Announcement = () => {
  return (
    <div>
      <div className="bg-pink1 px-4 py-3 text-white">
        <p className="text-center text-sm font-medium">
          Heavy discounts only for today.
          <Link to="#" className="inline-block underline">
            Check out the offers
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Announcement;
