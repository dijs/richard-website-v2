import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

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

export default hot(module)(Wave);