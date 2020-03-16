/* eslint-disable no-console */
import React from 'react';
import { View, Image, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import storage from '../../utils/storage';
import { STORAGE_KEY } from '../../constants';
import IMAGES from '../../configs/images';

console.disableYellowBox = true;

export default class Component extends React.Component {
  async componentDidMount() {
    const data = await this.performTimeConsumingTask();
    const auth = await storage.get(STORAGE_KEY.TOKEN_LOGIN);
    StatusBar.setHidden(true);

    if (data !== null && JSON.stringify(auth) === JSON.stringify({})) {
      this.props.navigation.navigate('OnBoarding');
    } else {
      this.props.navigation.navigate('App');
    }
  }

  performTimeConsumingTask = async () =>
    new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 1000)
    );
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image source={IMAGES.icon} resizeMode="contain" style={styles.logo} />
        </View>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: 100 }}
        >
          <Text style={{ fontSize: 14 }}>Supported By</Text>
          <Image source={IMAGES.telkom} style={{ width: 38, height: 38 }} />
        </View>
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
