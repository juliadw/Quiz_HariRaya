/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import {
  COLOR_WHITE,
  COLOR_BASE_CARD,
  FONT_BUTTON_PRIMARY,
  FONT_SIZE_TITLE,
  FONT_OVERLINE_SECONDARY,
  COLOR_FONT_PRIMARY_MAIN
} from '../../styles';
import { scale } from '../../utils/scaling';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_WHITE
  },
  ButtonRight: {
    left: 24,
    paddingVertical: 26,
    height: scale(40),
    width: scale(40)
  },
  body: { width: 500 },
  title: {
    fontWeight: '600',
    fontSize: FONT_SIZE_TITLE,
    left: 26
  },
  row: {
    left: 26,
    flexDirection: 'row',
    paddingVertical: 5
  },
  card: {
    width: scale(130),
    height: scale(180),
    borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: COLOR_BASE_CARD
  },
  left: { left: 15 },
  cardItem: {
    backgroundColor: COLOR_BASE_CARD
  },
  gambar: {
    height: scale(96),
    width: scale(130),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  cardImage: {
    width: scale(130),
    height: scale(90),
    bottom: 7,
    backgroundColor: COLOR_BASE_CARD,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  titleBook: {
    ...FONT_BUTTON_PRIMARY,
    color: '#2D3A4A',
    bottom: 15
  },
  subtitle: {
    ...FONT_OVERLINE_SECONDARY,
    color: COLOR_FONT_PRIMARY_MAIN,
    left: 26,
    top: 5,
    paddingVertical: 5
  },
  margin: { marginBottom: 10 }
});

export default styles;
