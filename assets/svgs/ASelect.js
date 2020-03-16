import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const ASelect = props => (
  <Svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Rect width="40" height="40" rx="5" fill="#A4AAB3" />
    <Path
      d="M22.82 27H26.44L21.36 12.96H17.4L12.32 27H15.9L16.74 24.52H21.98L22.82 27ZM21.1 21.88H17.64L19.36 16.74L21.1 21.88Z"
      fill="white"
    />
  </Svg>
);

export default ASelect;
