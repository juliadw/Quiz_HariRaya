/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import {
  COLOR_WHITE,
  COLOR_BLACK,
  COLOR_GREY_TRANSPARENT,
  COLOR_BASE_CARD,
  FONT_SIZE_OVERLINE,
  COLOR_FONT_PRIMARY_MAIN,
  FONT_BUTTON_PRIMARY,
  FONT_TITLE_PRIMARY,
  FONT_OVERLINE_PRIMARY,
  FONT_OVERLINE_SECONDARY
} from '../../styles';
import { scale } from '../../utils/scaling';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_WHITE
  },
  ButtonRight: {
    top: 30,
    left: 24,
    bottom: 20,
    height: scale(40),
    width: scale(40)
  },
  body: {
    paddingBottom: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    left: 26
  },
  title: {
    ...FONT_TITLE_PRIMARY,
    color: COLOR_BLACK,
    bottom: 20
  },
  content: {
    ...FONT_OVERLINE_PRIMARY,
    color: COLOR_GREY_TRANSPARENT,
    paddingRight: 30,
    bottom: 15
  },
  button: {
    top: 5,
    borderRadius: 5,
    width: scale(255),
    backgroundColor: COLOR_BASE_CARD
  },
  scrollView: { top: 20 },
  scrollContainer: { paddingHorizontal: 20 },
  scrollContainerVertical: { paddingVertical: 20 },
  subtitle: {
    ...FONT_OVERLINE_SECONDARY,
    color: COLOR_FONT_PRIMARY_MAIN,
    left: 26
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10
  },
  card: {
    width: scale(130),
    height: scale(180),
    borderRadius: 10,
    backgroundColor: COLOR_BASE_CARD
  },
  left: { paddingHorizontal: 8, justifyContent: 'center' },
  cardItem: {
    backgroundColor: COLOR_BASE_CARD,
    borderRadius: 10
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLOR_BASE_CARD
  },
  titleBook: {
    ...FONT_BUTTON_PRIMARY,
    color: '#2D3A4A',
    bottom: 15
  },
  page: {
    fontSize: FONT_SIZE_OVERLINE,
    top: 15
  },
  more: { textAlign: 'center', justifyContent: 'center' },
  cardmore: {
    width: scale(100),
    height: scale(100),
    borderRadius: 10,
    backgroundColor: COLOR_BASE_CARD,
    justifyContent: 'center',
    paddingVertical: 5
  }
});

export default styles;
