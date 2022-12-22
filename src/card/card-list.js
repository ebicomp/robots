import React from "react";
import { Card } from "./card";

export const CardList = ({ robots }) => {
  return (
    <div className="robotContainer">
      {robots.map((robot) => (
        <Card key={robot.id} email={robot.email} name={robot.name} />
      ))}
    </div>
  );
};
