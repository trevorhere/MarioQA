
    
import React, { Component } from "react";
import Swipe from "react-easy-swipe";

import Music from './Music'


class SW extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,

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

    if (adjustment >= nodes.length ) {
      console.log("adjustment hit");
      adjustment = 0;
    } else if(adjustment < 0){
      adjustment = nodes.length - 1;
    }

    console.log(" pos: ", adjustment);

    this.setState({
      position: adjustment
    });
  };

  render() {


    const { position} = this.state;
    const {nodes} = this.props;
    console.log("nodes", nodes);
    return (
      <Swipe
        onSwipeLeft={() => this.setPosition("left")}
        onSwipeRight={() => this.setPosition("right")}
      >
        <div className= {"SW"}  style={{backgroundColor: nodes[position].color}}>
          <div className="card" style={{marginTop:"20%"}}>
             <h2><img alt="icon" src={nodes[position].image}/>{nodes[position].title}</h2>
            <Music  name={"Start Test"}     url={nodes[position].startSong}/>
            <Music   name={"Test Passed"}   url={nodes[position].passSong}/>
            <Music   name={"Test Failed"}   url={nodes[position].failSong}/>
            </div>
        </div>
      </Swipe>
    );
  }
}
export default SW;

