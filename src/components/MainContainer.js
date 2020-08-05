import React, { Component } from "react";
import styles from "./components.module.css";

export default class MainContainer extends Component {
  render() {
    return (
        <div>
          <div className={styles.mainContent}>
              {this.props.children}
          </div>
        </div>
    );
  }
}
