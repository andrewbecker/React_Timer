'use strict';
import React from 'react';
import Nav from 'Nav';

const Main = (props) => {
  return (
    <div>
      <Nav/>
      <p>Main.jsx rendered</p>
      {props.children}
    </div>
  );
}

export default Main;