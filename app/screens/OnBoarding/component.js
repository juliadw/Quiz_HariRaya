/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import storage from '../../utils/storage';
import STORAGE_KEY from '../../constants/storageKey';
import Swiper from '../../components/elements/Swipper';
import styles from './styles';
import IMAGES from '../../configs/images';
import I18n from '../../i18n';

export default class Component extends React.Component {
  _onPress = async () => {
    await storage.set(STORAGE_KEY.HAS_VISITED_ONBOARDING, true);
    this.props.navigation.navigate('SignIn');
  };

  render() {
    return (
      <Swiper onPress={this._onPress}>
        <View style={[styles.slide]}>
          <Image source={IMAGES.oB_Materi} resizeMode="contain" style={styles.images} />
          <Text style={styles.header}>{I18n.t('materi')}</Text>
          <Text style={styles.text}>{I18n.t('descMateri')}</Text>
        </View>

        <View style={[styles.slide]}>
          <Image source={IMAGES.oB_Video} resizeMode="contain" style={styles.images} />
          <Text style={styles.header}>{I18n.t('video')}</Text>
          <Text style={styles.text}>{I18n.t('descVideo')}</Text>
        </View>

        <View style={[styles.slide]}>
          <Image source={IMAGES.oB_Quiz} resizeMode="contain" style={styles.images} />
          <Text style={styles.header}>{I18n.t('quiz')}</Text>
          <Text style={styles.text}>{I18n.t('descQuiz')}</Text>
        </View>
      </Swiper>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
