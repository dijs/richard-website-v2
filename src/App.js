import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';

class Wave extends Component {
  constructor(props) {
    super(props);
    this.state = {
      w: window.innerWidth,
      a: Math.random() * 0.5 + 0.2,
      b: Math.random() * 0.5 + 0.2,
      c: Math.random() * 0.5 + 0.2,
    };
    this.time = 0;
  }
  updateDimensions = () => {
    this.setState({
      w: window.innerWidth,
    });
  }
  componentWillMount() {
    this.updateDimensions();
  }
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    // setInterval(() => {
    //   this.time += 0.03;
    //   const r1 = Math.sin(this.time) * 0.001;
    //   const r2 = Math.cos(this.time) * 0.001;
    //   const r3 = Math.sin(this.time) * 0.0005;
    //   this.setState({
    //     a: this.state.a + r1,
    //     b: this.state.b + r2,
    //     c: this.state.c + r3,
    //   });
    // }, 1000 / 15);
  }
  render() {
    const { w, a, b, c } = this.state;
    const h = 100;
    const k = w / 6;
    const path = `
      M${k * 0},${h * a}
      S${k * 1},${h * a} ${k * 2},${h * b}
      S${k * 3},${h} ${k * 4},${h * b}
      S${k * 5},${h * c} ${k * 6},${h * 0.1}
      L${w},${h}
      L${0},${h}
      L${0},${h * a}
    `;
    return (
      <svg
        ref={el => this.el = el}
        className="wave"
        style={{
          backgroundColor: this.props.bgColor,
        }}
        width={w}
        height={h}
      >
        <path d={path} fill={this.props.color}/>
      </svg>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="app">
        <header />
        <Wave color="white" bgColor="#fad390" />
        <div className="content">
          <h1>Richard van der Dys</h1>
          <div className="portfolio">
            <Wave color="#6a89cc" bgColor="white" />
            <h2>Portfolio</h2>
            <div className="projects">
              <div className="project">
                <div className="title">Project A</div>
                <div className="summary">This is a project. It is really cool. You should go check it out.</div>
              </div>
              <div className="project">
                <div className="title">Project B</div>
                <div className="summary">This is a project. It is really cool. You should go check it out.</div>
              </div>
              <div className="project">
                <div className="title">Project C</div>
                <div className="summary">This is a project. It is really cool. You should go check it out.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
