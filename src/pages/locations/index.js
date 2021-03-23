import React, { Component } from "react";
import { FullHero } from "../../components";
import heroImg from "./../../assets/images/heroes/banner.png";
import logoImg from "./../../assets/images/bbt-logo.png";

class Locations extends Component {
  componentDidMount() {
    document.title = "Brian Black Tea - Locations";
  }
  render() {
    return (
      <div>
        <FullHero heroImg={heroImg} logoImg={logoImg} />
        <div className={"container"} style={{ paddingBottom: 1000 }}>
          Hello World!
        </div>
      </div>
    );
  }
}

export default Locations;
