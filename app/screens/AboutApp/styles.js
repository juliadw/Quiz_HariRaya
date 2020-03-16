import { StyleSheet } from 'react-native';
import {
  COLOR_WHITE,
  COLOR_BASE_CARD,
  FONT_SIZE_CAPTION,
  FONT_SIZE_TITLE,
  FONT_SIZE_BODY2,
  COLOR_FONT_PRIMARY_MAIN,
  FONT_SIZE_OVERLINE
} from '../../styles';
import { scale } from '../../utils/scaling';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    backgroundColor: COLOR_WHITE
  },
  ButtonRight: {
    left: 24,
    paddingVertical: 26,
    height: scale(40),
    width: scale(40)
  },
  scrollContainer: {
    paddingVertical: 20
  },
  title: {
    fontWeight: '600',
    fontSize: FONT_SIZE_TITLE,
    left: 26,
    paddingVertical: 10
    // bottom: 20,
    // top: 10
  },
  row: {
    left: 26,
    paddingVertical: 5,
    flexDirection: 'row'
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
    bottom: 8,
    backgroundColor: COLOR_BASE_CARD,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  subtitle: {
    fontSize: FONT_SIZE_BODY2,
    fontWeight: 'bold',
    color: COLOR_FONT_PRIMARY_MAIN,
    left: 26,
    paddingTop: 5
    // top: 25
  },
  titleBook: {
    fontSize: FONT_SIZE_CAPTION,
    bottom: 15,
    fontWeight: '600'
  },
  page: {
    fontSize: FONT_SIZE_OVERLINE,
    top: 15
  },
  content: {
    paddingHorizontal: 15,
    bottom: 20
  },
  SubTeory: {
    fontWeight: '600',
    fontSize: 20
  },
  Teory: {
    fontWeight: '600',
    fontSize: 20,
    marginTop: 10
  }
});

export default styles;
