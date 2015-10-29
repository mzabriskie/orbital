import React from 'react';
import Navigation from './Navigation';

export default () => {
  return (
    <div>
      <Navigation/>
      <div>&copy; 2015 Matt Zabriskie</div>
      <div style={{marginTop: 25}}>
        <a href="https://twitter.com/mzabriskie" target="_blank">
          <i className="icon-twitter"/>
        </a>
        <a href="https://github.com/mzabriskie" target="_blank">
          <i className="icon-github"/>
        </a>
      </div>
    </div>
  );
}
