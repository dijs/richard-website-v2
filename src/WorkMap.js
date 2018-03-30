import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { countriesWorkedIn } from './info';
import worldMap from './images/world.svg';

// Palette Color 1
const workedCountryColor = '#7ed6df';

class WorkMap extends Component {
  loaded() {
    countriesWorkedIn.map(id => {
      return this.workMap.contentDocument.querySelector(`[id=${id}]`);
    }).forEach(e => e.style.fill = workedCountryColor);    
  }
  render() {
    return <object ref={el => this.workMap = el} onLoad={this.loaded.bind(this)} className="work-map" type="image/svg+xml" data={worldMap}>
      Work Map
    </object>;
  }
}

export default hot(module)(WorkMap);
