import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Banner = () => {
  return (
    <div>
      <h1>Banner</h1>
      <AwesomeSlider>
        <div data-src="/path/to/image.jpg">
          <p>I want to see what you got.</p>
        </div>
        <div data-src="/path/to/image.jpg">
          <p>The answer is -- Don't think about it.</p>
        </div>
        <div data-src="/path/to/image.jpg">
          <p>Sometimes science is more art than science.</p>
        </div>
        <div data-src="/path/to/image.jpg">
          <p>Love, connection, experience.</p>
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Banner;
