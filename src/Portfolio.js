import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { projects } from './info';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }
  render() {
    const { title, image, className, summary,
      background, href } = this.props;
    const { active } = this.state;
    return (
      <div
        style={{ background }}
        className={`project ${active && 'active'}`}
        onClick={() => this.setState({ active: !active })}
      >
        { image && <img src={image} /> }
        { title && <div className={`name ${className}`}>{title}</div> }
        <div className="summary">
          <div>{summary}</div>
          {href ? <a href={href}>Check it out here</a> : null}
        </div>
      </div>
    );
  }
}

function Portfolio () {
  return <div className="portfolio padding">
    <h1>THE PORTFOLIO</h1>
    <div className="projects">
      {
        projects.map(project => <Project
          {...project}
          key={project.summary}
        />)
      }            
    </div>
  </div>;
}

export default hot(module)(Portfolio);
