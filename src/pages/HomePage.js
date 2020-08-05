import React, { Component } from "react";
import styles from "./home-page.module.css";
import MouseScroll from "../components/MouseScroll";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import DiscoverContainer from "./DiscoverContainer";

class HomePage extends Component {
  render() {
    return (
      <div className={styles.homeContainer}>
        <Navbar/>
        <MainContainer>
          <Header text={"Welcome to Pocket!"} />
          <MouseScroll />
        </MainContainer>
        <DiscoverContainer/>
      </div>
    );
  }
}
export default HomePage;


