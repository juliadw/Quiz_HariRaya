import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_FONT_PRIMARY_MAIN } from '../../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 60
  },
  active: {
    borderBottomWidth: 2,
    borderBottomColor: COLOR_FONT_PRIMARY_MAIN
  },
  inactive: {},
  icon: {},
  IconBadgeStandard: {
    position: 'absolute',
    top: 2,
    right: 2,
    width: 14,
    height: 14,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR_FONT_PRIMARY_MAIN
  },
  IconBadgeNumber: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR_FONT_PRIMARY_MAIN
  },
  mainView: {
    height: 40,
    width: 40,
    backgroundColor: COLOR_WHITE,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: COLOR_FONT_PRIMARY_MAIN,
    fontSize: 10,
    alignSelf: 'center'
  },
  activeText: {
    color: COLOR_FONT_PRIMARY_MAIN,
    fontSize: 10,
    alignSelf: 'center'
  }
});
