import logo from "./logo.svg";
import "./App.css";
import robots from "./card/robots";
import { CardList } from "./card/card-list";
import { Header } from "./card/header";
import { useState } from "react";

function App() {
  const onSearchChange = (event) => {
    const searchKey = event.target.value;
    const filteredRobots = robots.filter((q) => q.name.includes(searchKey));
    setRobotsState(filteredRobots);
  };

  const [robotsState, setRobotsState] = useState(robots);
  const [searchFiled, setSearchField] = useState("");
  return (
    <>
      <Header seachChange={onSearchChange} />
      <CardList robots={robotsState} />;
    </>
  );
}

export default App;
