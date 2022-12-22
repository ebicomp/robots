import React from "react";

export const Header = ({ seachChange }) => {
  return (
    <div className="header">
      <h1>Robots</h1>
      <input type="text" onChange={seachChange} />
    </div>
  );
};
