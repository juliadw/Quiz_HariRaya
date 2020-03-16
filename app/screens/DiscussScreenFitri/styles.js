/* eslint-disable react-native/no-color-literals */
/* eslint-disable no-unused-vars */
import { StyleSheet, Dimensions } from 'react-native';
import {
  COLOR_WHITE,
  COLOR_BLACK,
  FONT_BUTTON_PRIMARY,
  COLOR_FONT_PRIMARY_MAIN,
  FONT_SUBTITLE2_PRIMARY
} from '../../styles';
import { heightByScreen } from '../../utils/dimensions';
import { scale } from '../../utils/scaling';
import { transparent, white } from '../../styles/colors';
import METRICS from '../../constants/metrics';

const itemHeight = heightByScreen(32.8);
const { width } = Dimensions.get('window');
// eslint-disable-next-line no-unused-vars
const height = width * 0.8;
const scoreCircleSize = 300;

const styles = StyleSheet.create({
  gridCol: {
    flexDirection: 'row',
    // paddingBottom: 10,
    marginLeft: 20,
    marginTop: 10,
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
    marginBottom: 20,
    marginTop: 10
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
    borderWidth: 0.5,
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
  textAnswer: {
    ...FONT_BUTTON_PRIMARY,
    marginLeft: scale(10),
    color: '#29291E',
    paddingVertical: 10,
    width: '80%'
  },
  textAnswerCorrect: {
    ...FONT_BUTTON_PRIMARY,
    marginLeft: scale(10),
    paddingVertical: 10,
    width: '80%',
    color: '#14D98C'
  },
  pembahasan: { ...FONT_BUTTON_PRIMARY }
});
export default styles;
