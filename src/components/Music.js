import React from 'react';
import { reset, themes, List, ListItem, Divider, Button } from 'react95';



class Music extends React.Component {
    state = {
      play: false
    }
    audio = new Audio(this.props.url)
  
    togglePlay = () => {
      this.setState({ play: !this.state.play }, () => {
        this.state.play ? this.audio.play() : this.audio.pause();
      });
    }
  
    render() {
      return (
        <div>
          <Button className={"button"} onClick={this.togglePlay}>{this.state.play ? 'Pause' : `${this.props.name}`}</Button>
        </div>
      );
    }
  }
  
  export default Music;