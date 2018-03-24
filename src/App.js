import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import WorkMap from './WorkMap';
import { projects, bio } from './info';
import './App.css';

function HeadTriangle() {
  return (
    <svg className="head-triangle" width="100%" height="150px" viewBox="0 0 100 100" preserveAspectRatio="none"> 
      <path d="M0,0 L 100,0 100,10, 0,100 Z" vectorEffect="non-scaling-stroke"/> 
    </svg>
  );
}

function BottomTriangle() {
  return (
    <svg className="bottom-triangle" width="100%" height="150px" viewBox="0 0 100 100" preserveAspectRatio="none"> 
      <path d="M0,0 L 100,0 100,50 Z" vectorEffect="non-scaling-stroke"/> 
    </svg>
  );
}

const Name = () => <div className="name">Richard van der Dys</div>;
const Title = () => <div className="title">Software Developer</div>;

function Bio() {
  return <div className="bio">
    <h1>THE BIO</h1>
    <p>{bio}</p>
  </div>;
}

const Avatar = () => <img className="avatar" src="https://placehold.it/300" />;

function Portfolio() {
  return <div className="portfolio padding">
    <h1>THE PORTFOLIO</h1>
    <div className="projects">
      {projects.map(({ title, summary }) => {
        return (
          <div key={title} className="project">
            <div className="">{title}</div>
            <div className="summary">{summary}</div>
          </div>
        );
      })}            
    </div>
  </div>;
}

class App extends Component {
  render() {
    return (
      <div className="app">
        <HeadTriangle />
        <header className="row">
          <div className="col-lg-offset-8 col-lg-4 center">
            <Name />
            <Title />
          </div>
        </header>
        <div className="row">
          <div className="padding col-lg-5">
            <Bio />
          </div>
          <div className="padding col-lg-offset-3 col-lg-4 center">
            <Avatar />
          </div>
        </div>
        <Portfolio />
        <BottomTriangle />
        <WorkMap />
      </div>
    );
  }
}

export default hot(module)(App);
