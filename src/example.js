import React, { Component } from 'react';
import VerticalCarousel from './VerticalCaraousel';
import uuidv4 from 'uuid';
import { config } from 'react-spring';
import { Navbar } from 'react-bootstrap';
import BodyHome from './Body/BodyHome';
import BodyHome2 from './Body/BodyHome2';
import BodyHome5 from './Body/BodyHome5';
import BodyHome4 from './Body/BodyHome4';
import BodyHome3 from './Body/BodyHome3';

let slides = [
  {
    key: 1,
    content: <BodyHome></BodyHome>,
  },
  {
    key: 2,
    content: <BodyHome2></BodyHome2>,
  },
  {
    key: 3,
    content: <BodyHome3></BodyHome3>,
  },
  {
    key: 4,
    content: <BodyHome4></BodyHome4>,
  },
  {
    key: 5,
    content: <BodyHome5></BodyHome5>,
  },
];

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
  };

  // onChangeInput = e => {
  //   this.setState({
  //     [e.target.name]: parseInt(e.target.value, 10) || 0
  //   });
  // };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
          height: '100%',

          background: 'white',
        }}
      >
        <VerticalCarousel
          slides={slides}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
      </div>
    );
  }
}
