import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { projects } from './info';

class Project extends Component {
  render() {
    const { title, image, className, summary,
      background, href, on, off, handleOn, handleOff } = this.props;
    return (
      <div
        style={{ background }}
        className={`project ${on && 'on'} ${off && 'off'}`}
        onClick={() => on ? handleOff() : handleOn()}
      >
        { image && <img src={image} /> }
        { title && <div className={`name ${className}`}>{title}</div> }        
        <div className="summary">
          <div className="text">
            {summary}
            {href ? <a href={href}>Check it out here</a> : null}
          </div>
        </div>
      </div>
    );
  }
}

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: -1
    };
  }
  render() {
    return <div className="portfolio padding">
      <h1>THE PORTFOLIO</h1>
      <div className="projects">
        {
          projects.map((project, index) => <Project
            {...project}
            key={project.summary}
            on={this.state.active > -1 && this.state.active === index}
            off={this.state.active > -1 && this.state.active !== index}
            handleOn={() => this.setState({ active: index })}
            handleOff={() => this.setState({ active: -1 })}
          />)
        }            
      </div>
    </div>;
  }
}

export default hot(module)(Portfolio);
