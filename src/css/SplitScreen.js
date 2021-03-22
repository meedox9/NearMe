import React, { Component } from "react";
import PropTypes from "prop-types";

import "./splitScreen.css";

class SplitScreen extends Component {
  render() {
    const {leftPane, rightPane} = this.props;

    return (
      <div className="splitScreen">
        <div className="leftPane">
          {leftPane}
        </div>
        <div className="rightPane">
          {rightPane}
        </div>
      </div>
    );
  }
}

SplitScreen.propTypes = {
  topPane: PropTypes.node.isRequired,
  bottomPane: PropTypes.node.isRequired
};

export default SplitScreen;