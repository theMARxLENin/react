import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import SearchBar from "./searchBar";
import Card from "./card";

const greeting = "Hello there, this is React Components lesson cards";

function App() {
  const cards = greeting
    .split(" ")
    .map((word, i) => <Card title={word} imgSrc={`${i + 1}.jpg`} />);
  return (
    <div className="App">
      <h1>React. Components</h1>
      <SearchBar />
      <div className="cards-wrapper">{cards}</div>
    </div>
  );
}

export default hot(module)(App);
