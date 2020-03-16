import { StyleSheet } from 'react-native';
import { COLOR_WHITE } from '../../styles';
import { scale } from '../../utils/scaling';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  logoContainer: {
    width: scale(130),
    height: scale(150),
    marginTop: 150
  },
  logo: { flex: 1, width: undefined, height: undefined, justifyContent: 'center', alignItems: 'center' }
});

export default styles;
