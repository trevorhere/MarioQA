import React from 'react';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes, List, ListItem, Divider, Button } from 'react95';
import '../App.css';

import startSong from '../assets/songs/startSong.mp3';
import passSong from '../assets/songs/passSong.mp3';
import failSong from '../assets/songs/failSong.mp3';


import Music from './Music'


const ResetStyles = createGlobalStyle`
  ${reset}
`;

let testPassed = () => {
  return (
  <audio ref={React.createRef()} src={passSong} autoPlay/>
  )
}

let testFailed = () => {
  return (
    <audio ref={React.createRef()} src={failSong} autoPlay/>
    )
}
let testStarted = () => {
  console.log('test')

  return (
    
    <audio ref={React.createRef()} src={startSong} autoPlay/>
    )
}



function App() {
  return (
    <div className="App">
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
      <header className="App-header">
    <Music  name={"Start Test"} url={startSong}/>
    <Music   name={"Test Passed"}   url={passSong}/>
    <Music   name={"Test Failed"}  url={failSong}/>
      </header>
      </ThemeProvider>
    </div>
  );
}

export default App;
