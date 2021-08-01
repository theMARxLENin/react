import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";

// eslint-disable-next-line react/prefer-stateless-function
class Card extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { title, imgSrc } = this.props;
    return (
      <div className="card">
        <img alt="" src={imgSrc} />
        <h3>{title}</h3>
      </div>
    );
  }
}

export default hot(module)(Card);
