import React from 'react';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes, List, ListItem, Divider, Button, Select } from 'react95';
import '../App.css';

import startSong from '../assets/songs/startSong.mp3';
import passSong from '../assets/songs/passSong.mp3';
import failSong from '../assets/songs/failSong.mp3';

import mario from '../assets/images/Mario.png'
import donkeyKong from '../assets/images/DonkeyKong.png'


import SW from './SW';

const ResetStyles = createGlobalStyle`
  ${reset}
`;



const nodes = [
  {
    title: "Mario",
    image: mario,
    startSong: startSong,
    passSong: passSong,
    failSong: failSong,
    color: "#E60612"
  },
  {
    title: "DonkeyKong",
    image: donkeyKong,
    startSong,
    passSong,
    failSong,
    color: "#009688"
 },
  

]



function App() {
  return (
    <div className="App">
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
      <SW nodes={nodes}/>
      {/* <header className="App-header">
         <Music  name={"Start Test"} url={startSong}/>
         <Music   name={"Test Passed"}   url={passSong}/>
         <Music   name={"Test Failed"}  url={failSong}/>
      </header> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
