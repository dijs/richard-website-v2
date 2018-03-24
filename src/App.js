import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
// import Wave from './Wave';
import { projects, bio } from './info';
// import worldMap from './images/world.svg';
import './App.css';

// function Portfolio() {
//   return <div>
//     <h2>Portfolio</h2>
//     <div className="projects">
//     </div>
//   </div>;
// }

// function WorkMap() {
//   return <object className="work-map" type="image/svg+xml" data={worldMap}>
//     Work Map
//   </object>;
// }

function HeadTriangle() {
  return (
    <svg className="head-triangle" width="100%" height="150px" viewBox="0 0 100 100" preserveAspectRatio="none"> 
      <path d="M0,0 L 100,0 100,10, 0,100 Z" vector-effect="non-scaling-stroke"/> 
    </svg>
  );
}

function BottomTriangle() {
  return (
    <svg className="bottom-triangle" width="100%" height="150px" viewBox="0 0 100 100" preserveAspectRatio="none"> 
      <path d="M0,0 L 100,0 100,50 Z" vector-effect="non-scaling-stroke"/> 
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

class App extends Component {
  // <header />
  // <Wave color="white" bgColor="#fad390" />
  // <Wave color="#6a89cc" bgColor="white" />
  
  // <div className="content">
  //   <h1>Richard van der Dys</h1>
  //   <div className="with-slide-in-bg portfolio">
  //     <Portfolio />
  //   </div>
  // </div>
  // <WorkMap />
  
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
        <div className="portfolio padding">
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
        </div>
        <BottomTriangle />
      </div>
    );
  }
}

export default hot(module)(App);
