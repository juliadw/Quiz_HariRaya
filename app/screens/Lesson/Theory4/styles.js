import { StyleSheet, Dimensions } from 'react-native';
import {
  COLOR_WHITE,
  FONT_SUBTITLE1_PRIMARY,
  FONT_SUBTITLE2_PRIMARY,
  FONT_CAPTION_PRIMARY,
  FONT_CAPTION_PRIMARY_ARAB
} from '../../../styles/';
import { heightByScreen } from '../../../utils/dimensions';
import { scale } from '../../../utils/scaling';

const itemHeight = heightByScreen(32.8);
const { width } = Dimensions.get('window');
const height = width * 0.8;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 50,
    textAlign: 'center'
  },
  slide: {
    height: itemHeight,
    paddingHorizontal: scale(15)
  },
  slideInnerContainer: {
    flex: 1,
    borderRadius: 16,
    backgroundColor: COLOR_WHITE,
    height: itemHeight
  },
  image: {
    // borderRadius: 16,
    // resizeMode: 'cover',
    // width: '100%',
    // height: '100%'
    width,
    height
  },
  scrollContainer: {
    height
  },
  content: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    bottom: 20
  },
  titleTeory: {
    ...FONT_SUBTITLE1_PRIMARY,
    top: 15
  },
  SubTeory: {
    ...FONT_SUBTITLE2_PRIMARY,
    top: 20
  },
  teory: { ...FONT_CAPTION_PRIMARY, top: 20 },
  arabian: { ...FONT_CAPTION_PRIMARY_ARAB, top: 20, textAlign: 'right' },
  arti: { ...FONT_CAPTION_PRIMARY, top: 20 },
  bottom: {
    bottom: 20,
    top: 20
  },
  bullets: { top: 20, fontStyle: 'normal', fontWeight: 'bold' }
});

export default styles;
