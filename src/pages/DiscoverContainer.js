import React, { Component, Children } from "react";
import styles from "./discover-page.module.css";
import DiscoverContent from "../components/DiscoverContent";

export default class DiscoverContainer extends Component {
  render() {
    return (
      <div className={styles.discoverContainer}>
        <div className={styles.discoverContainerContent}>
          <DiscoverContent />
          <DiscoverContent />
          <DiscoverContent />
          <DiscoverContent />
          <DiscoverContent />
          <DiscoverContent />
        </div>
      </div>
    );
  }
}
