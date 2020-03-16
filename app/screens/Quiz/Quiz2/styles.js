/* eslint-disable react-native/no-color-literals */
/* eslint-disable no-unused-vars */
import { StyleSheet, Dimensions } from 'react-native';
import {
  COLOR_WHITE,
  COLOR_BLACK,
  FONT_BUTTON_SECONDARY,
  FONT_OVERLINE_SECONDARY,
  COLOR_FONT_PRIMARY_MAIN,
  FONT_BUTTON_PRIMARY,
  FONT_SUBTITLE2_PRIMARY,
  FONT_CAPTION_PRIMARY,
  FONT_CAPTION_SECONDARY_SEMIBOLD
} from '../../../styles';
import { heightByScreen } from '../../../utils/dimensions';
import { scale } from '../../../utils/scaling';
import { transparent, white } from '../../../styles/colors';
import METRICS from '../../../constants/metrics';

const itemHeight = heightByScreen(32.8);
const { width } = Dimensions.get('window');
const height = width * 0.8;
const scoreCircleSize = 300;

const styles = StyleSheet.create({
  gridCol: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    width: '90%'
  },
  gridText: {
    color: COLOR_FONT_PRIMARY_MAIN
  },

  gridTextvalue: {
    // textAlign: 'right',
    color: COLOR_BLACK,
    width: '95%',
    ...FONT_SUBTITLE2_PRIMARY
  },

  gridColAnswer: {
    paddingLeft: 20,
    marginBottom: 20
  },
  buttonStyle: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 20
  },
  buttonNextStyle: {
    marginBottom: 10,
    marginTop: 10,
    width: scale(70),
    padding: 10,
    margin: 10,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: COLOR_FONT_PRIMARY_MAIN,
    backgroundColor: COLOR_FONT_PRIMARY_MAIN,
    marginLeft: 165
  },
  buttonPrevStyle: {
    marginBottom: 10,
    marginTop: 10,
    padding: 10,
    margin: 10,
    width: scale(70),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLOR_FONT_PRIMARY_MAIN
  },
  buttonStyleExit: {
    justifyContent: 'center',
    borderBottomWidth: 0,
    marginBottom: 10,
    marginTop: 10,
    width: '40%',
    borderRadius: 5,
    backgroundColor: COLOR_FONT_PRIMARY_MAIN,
    margin: 20
  },
  fontButtonPrev: {
    ...FONT_BUTTON_SECONDARY,
    color: COLOR_FONT_PRIMARY_MAIN
  },
  fontButtonNext: {
    ...FONT_BUTTON_SECONDARY,
    color: COLOR_WHITE
  },
  textquestion: {
    ...FONT_OVERLINE_SECONDARY,
    paddingLeft: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE
  },
  text: {
    color: COLOR_BLACK,
    fontSize: 24,
    paddingTop: '40%'
  },
  fontAnswer: {
    ...FONT_BUTTON_PRIMARY,
    marginLeft: scale(10),
    color: '#29291E',
    paddingVertical: 10,
    width: '80%'
  },
  viewAnswer: {
    width: scale(260),
    // height: scale(50),
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 5,
    paddingLeft: 10,
    paddingVertical: 10,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewDiscuss: {
    width: scale(155),
    height: scale(50),
    backgroundColor: '#59DBF8',
    borderColor: '#59DBF8',
    borderWidth: 2,
    borderRadius: 5,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  fontCaption: { ...FONT_CAPTION_PRIMARY, color: '#A4AAB3', textAlign: 'center' },
  fontCongrat: { ...FONT_SUBTITLE2_PRIMARY, textAlign: 'center' },
  pembahasan: { ...FONT_CAPTION_SECONDARY_SEMIBOLD, color: COLOR_WHITE },
  modal: {
    flex: 1,
    backgroundColor: transparent,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardModal: {
    width: scale(200),
    height: scale(350),
    padding: METRICS.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9
  }
});
export default styles;
