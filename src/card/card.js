import React from "react";

export const Card = ({ id, name, email }) => {
  return (
    <div className="card">
      <img src={`https://robohash.org/${name}`} alt="" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
