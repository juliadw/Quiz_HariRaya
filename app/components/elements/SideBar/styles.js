/* eslint-disable no-unused-vars */
import { StyleSheet } from 'react-native';

import {
  COLOR_WHITE,
  COLOR_FONT_PRIMARY_MAIN,
  FONT_CAPTION_PRIMARY_NAME,
  FONT_CAPTION_PRIMARY,
  COLOR_BLACK,
  FONT_CAPTION_PRIMARY_APP
} from '../../../styles';
import { scale } from '../../../utils/scaling';
import METRICS from '../../../constants/metrics';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    ...FONT_CAPTION_PRIMARY_NAME,
    color: COLOR_BLACK
  },
  label: {
    ...FONT_CAPTION_PRIMARY,
    color: '#ABB0B7'
  },
  card: {
    backgroundColor: COLOR_WHITE,
    height: scale(150),
    paddingLeft: 20,
    alignItems: 'flex-start'
  },
  logo: { flex: 1, width: scale(60), height: scale(75) },
  _renderBody: { paddingTop: 20 },
  App: { marginLeft: 20, color: '#ABB0B7', ...FONT_CAPTION_PRIMARY_APP }
});
