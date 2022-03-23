import "./utils.scss";
import React from "react";

class Label extends React.Component {
  render() {
    return <p className="Label">{this.props.labelName}</p>;
  }
}

export default Label;
