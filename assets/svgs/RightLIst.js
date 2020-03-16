import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgRightList = props => (
  <Svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M2 2H14M2 7H9.5M2 12H12"
      stroke="#2D3A4A"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default SvgRightList;
