import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { projects } from './info';

const yPositionTrigger = window.innerHeight / 3;

function Project({title, image, summary, background, href, active}) {
  return (
    <a
      href={href}
      style={{ background }}
      className={`project ${active && 'active'}`}
    >
      { image && <img src={image} /> }
      { title && <div className="name">{title}</div> }
      <div className="summary">{summary}</div>
    </a>
  );
}

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
        {
          projects.map(project => <Project
            {...project}
            key={project.summary}
            active={this.state.active}
          />)
        }            
      </div>
    </div>;
  }
}

export default hot(module)(Portfolio);
