import { StyleSheet } from 'react-native';
import { COLOR_WHITE, FONT_SUBTITLE2_PRIMARY, FONT_CAPTION_PRIMARY } from '../../../styles/';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_WHITE
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    bottom: 20
  },
  SubTeory: {
    ...FONT_SUBTITLE2_PRIMARY,
    fontSize: 16,
    top: 20
  },
  teory: { ...FONT_CAPTION_PRIMARY, top: 20 },
  title: {
    ...FONT_SUBTITLE2_PRIMARY,
    left: 20,
    marginBottom: 10
  }
});

export default styles;
