import React, { Component } from 'react';

class SlowScroll extends Component {
  componentDidMount() {
    this.handleWheel = this.handleWheel.bind(this);
    window.addEventListener('wheel', this.handleWheel);
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleWheel);
  }

  handleWheel(event) {
    const scrollMultiplier = 0.5; // Adjust this value to control the scroll speed
    if (event.deltaY !== 0) {
      event.preventDefault();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      window.scrollTo({
        top: scrollTop + event.deltaY * scrollMultiplier,
        behavior: 'smooth',
      });
    }
  }

  render() {
    return null;
  }
}

export default SlowScroll;
