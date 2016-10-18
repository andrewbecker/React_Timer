'use strict';

import React from 'react';
import Clock from 'Clock';

const Countdown = React.createClass({
  render: function () {
    return (
      <div>
        <Clock totalSeconds={129}/>
      </div>
    );
  }
});

export default Countdown;