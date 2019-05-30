

import React, { Component } from "react";
import Swipe from "react-easy-swipe";

import Music from './Music'
import Nav from './Nav';

import { Window, WindowHeader, WindowContent, Button } from 'react95';




class SW extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      start: false,
      pass: false,
      fail: false

    };
  }
  onSwipeStart(event) {
    console.log("Start swiping...", event);
  }

  onSwipeMove(position, event) {
    console.log(`Moved ${position.x} pixels horizontally`, event);
    console.log(`Moved ${position.y} pixels vertically`, event);
  }

  onSwipeEnd(event) {
    console.log("End swiping...", event);
  }

  setPosition = adjust => {
    const { position } = this.state;
    const { nodes } = this.props;
    let adjustment = position;
    console.log("init pos", adjustment);
    console.log("swipe d", adjust);

    switch (adjust) {
      case "right": {
        adjustment -= 1;
        break;
      }
      case "left":
        adjustment++;
        break;
      default:
        adjustment++;
    }

    if (adjustment >= nodes.length) {
      console.log("adjustment hit");
      adjustment = 0;
    } else if (adjustment < 0) {
      adjustment = nodes.length - 1;
    }

    console.log(" pos: ", adjustment);

    this.setState({
      position: adjustment
    });
  };



  render() {
    const { position } = this.state;
    const { nodes } = this.props;
    console.log("nodes", nodes);

    let togglePlay = (song, type) => {
      this.setState({ type: !this.state.type }, () => {
        this.state.type ? song.play() : song.pause();
      });
    }


    return (
      <div>
        <Nav />

        <Swipe
          onSwipeLeft={() => this.setPosition("left")}
          onSwipeRight={() => this.setPosition("right")}
        >

          <div className="SW" style={{ backgroundColor: nodes[position].color }}>
            <div className="card" style={{ marginTop: "10%" }}>
              <img alt="icon" className="card-img" style={{ height: "100px" }} src={nodes[position].image} />
              <Window shadow={true} className="window">
                <WindowHeader className="window-header" >{nodes[position].title}</WindowHeader>
                <WindowContent>
                  {/* {[...nodes[position].songs]} */}
                  <Button onClick={() => { togglePlay(nodes[position].startSong, "start") }}> Start Test</Button>
                  <br />
                  <Button onClick={() => { togglePlay(nodes[position].passSong, "pass") }}> Test Passed</Button>
                  <br />

                  <Button onClick={() => { togglePlay(nodes[position].failSong, "fail") }}> Test Failed</Button>


                  {/* <Music name={"Start Test"} url={nodes[position].startSong} />
                  <Music name={"Test Passed"} url={nodes[position].passSong} />
                  <Music name={"Test Failed"} url={nodes[position].failSong} /> */}
                </WindowContent>
              </Window>
            </div>
          </div>

        </Swipe>
      </div>
    );
  }
}
export default SW;

