import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { projects } from './info';

const yPositionTrigger = window.innerHeight / 3;

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
  }
  componentDidMount() {
    const handler = () => {
      const hy = this.header.getBoundingClientRect().top;
      if (hy < yPositionTrigger) {
        this.setState({ active: true }); 
        document.removeEventListener('scroll', handler);
      }
    };
    document.addEventListener('scroll', handler);
  }
  render() {
    return <div className="portfolio padding">
      <h1 ref={el => this.header = el}>THE PORTFOLIO</h1>
      <div className="projects">
        {projects.map(({ title, summary }) => {
          return (
            <div key={title} className={`project ${this.state.active && 'active'}`}>
              <div>{title}</div>
              <div className="summary">{summary}</div>
            </div>
          );
        })}            
      </div>
    </div>;
  }
}

export default hot(module)(Portfolio);
