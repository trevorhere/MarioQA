import React, { Component } from 'react'
import { AppBar, Toolbar, Avatar, Button } from 'react95';


class Nav extends Component {
  render() {
    return (
      <AppBar style={{ height: '40px' }}>
        <Toolbar style={{ justifyContent: 'space-between', paddingRight: '1rem' }}>
          NintenQA
        </Toolbar>
      </AppBar>
    );
  }
}

export default Nav;