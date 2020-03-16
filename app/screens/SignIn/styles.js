import { StyleSheet } from 'react-native';
import {
  COLOR_WHITE,
  COLOR_BASE_PRIMARY_MAIN,
  COLOR_FONT_PRIMARY_MAIN,
  FONT_SIZE_CAPTION,
  COLOR_GREY_PRIMARY
} from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE
  },
  logoContainer: { width: scale(110), height: scale(130) },
  logo: { flex: 1, width: undefined, height: undefined, marginBottom: 5 },
  inputEmail: {
    height: scale(40),
    width: scale(240),
    borderWidth: scale(1),
    borderRadius: scale(5),
    color: COLOR_GREY_PRIMARY,
    borderColor: COLOR_GREY_PRIMARY,
    padding: METRICS.baseMargin,
    fontSize: FONT_SIZE_CAPTION,
    paddingHorizontal: scale(20),
    top: 40
  },
  inputPassword: {
    flexDirection: 'row',
    borderRadius: scale(4),
    alignItems: 'center',
    justifyContent: 'center',
    top: 50
    // marginRight: METRICS.smallMargin,
    // marginLeft: METRICS.smallMargin
  },
  inputPass: {
    height: scale(40),
    width: scale(240),
    borderWidth: scale(1),
    borderRadius: scale(5),
    color: COLOR_GREY_PRIMARY,
    borderColor: COLOR_GREY_PRIMARY,
    padding: METRICS.baseMargin,
    fontSize: FONT_SIZE_CAPTION,
    paddingHorizontal: scale(20)
  },
  touachableButton: {
    position: 'absolute',
    right: scale(5),
    height: scale(25),
    width: scale(20),
    padding: scale(2)
  },
  buttonImage: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%'
  },
  marginForgetPass: {
    right: 75
  },
  forgetPass: {
    resizeMode: 'contain',
    color: COLOR_FONT_PRIMARY_MAIN,
    fontSize: FONT_SIZE_CAPTION,
    top: 30,
    marginBottom: 30
  },
  btn: { width: scale(240), height: scale(40), backgroundColor: COLOR_FONT_PRIMARY_MAIN, top: 10 },
  btnText: {
    color: COLOR_WHITE,
    fontSize: FONT_SIZE_CAPTION
  },
  accountdaftar: { flexDirection: 'row', right: 45 },
  account: { color: COLOR_GREY_PRIMARY },
  daftar: { color: COLOR_FONT_PRIMARY_MAIN },
  marginOne: { marginBottom: METRICS.fiveMargin },
  margin: { marginBottom: 15 },
  outlined: { backgroundColor: COLOR_WHITE, borderColor: COLOR_BASE_PRIMARY_MAIN, borderWidth: 2 },
  outlinedText: { color: COLOR_BASE_PRIMARY_MAIN }
});

export default styles;
