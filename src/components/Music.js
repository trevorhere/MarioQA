import React from 'react';
import { Button } from 'react95';



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

    console.log('url', this.props.url)
    return (
      <div>
        <Button className={"button"} onClick={this.togglePlay}>{this.state.play ? 'Pause' : `${this.props.name}`}</Button>
      </div>
    );
  }
}

export default Music;