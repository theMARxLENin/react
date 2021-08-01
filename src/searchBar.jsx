import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";

// eslint-disable-next-line react/prefer-stateless-function
class SearchBar extends React.Component {
  render() {
    return <input className="search-bar" placeholder="Search" />;
  }
}

export default hot(module)(SearchBar);
