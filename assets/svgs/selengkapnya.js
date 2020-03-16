import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const Svgmore = props => (
  <Svg width="70" height="60" viewBox="0 0 70 60" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Rect width="70" height="60" rx="5" fill="#59DBF8" />
    <Path
      d="M23.0496 36.775H28.4246L33.4996 31.25L28.4246 25.725H23.0496L28.1496 31.25L23.0496 36.775ZM36.575 36.775H41.95L47.025 31.25L41.95 25.725H36.575L41.675 31.25L36.575 36.775Z"
      fill="white"
    />
  </Svg>
);

export default Svgmore;
