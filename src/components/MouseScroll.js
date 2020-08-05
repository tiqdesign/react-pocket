import React from "react";
import styles from "./components.module.css";

class MouseScroll extends React.Component {
  render() {
    return (
      <div className={styles.mouse}>
        <div className={styles.mouseCircle}></div>
      </div>
    );
  }
}

export default MouseScroll;
