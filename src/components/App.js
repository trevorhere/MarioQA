import React, { Component } from 'react';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes } from 'react95';
import '../App.css';

import mario_start from '../assets/songs/mario/startSong.mp3';
import mario_pass from '../assets/songs/mario/passSong.mp3';
import mario_fail from '../assets/songs/mario/failSong.mp3';

import dk_start from '../assets/songs/dk/startSong.mp3';
import dk_pass from '../assets/songs/dk/passSong.mp3';
import dk_fail from '../assets/songs/dk/failSong.mp3';

import mario from '../assets/images/Mario.png'
import donkeyKong from '../assets/images/DonkeyKong.png'

import SW from './SW';
import Music from './Music'


const ResetStyles = createGlobalStyle`
  ${reset}
`;

let nodes = [

  {
    title: "DonkeyKong",
    image: donkeyKong,
    startSong: new Audio(dk_start),
    passSong: new Audio(dk_pass),
    failSong: new Audio(dk_fail),
    color: "#009688"
  },
  {
    title: "Mario",
    image: mario,
    startSong: new Audio(mario_start),
    passSong: new Audio(mario_pass),
    failSong: new Audio(mario_fail),
    color: "#E60612"
  },
]


class App extends Component {
  render() {



    return (
      <div className="App">
        <ResetStyles />
        <ThemeProvider theme={themes.default}>
          <SW nodes={nodes} />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
