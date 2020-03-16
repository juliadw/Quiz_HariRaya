/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Container } from 'native-base';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './styles';
import IMAGES from '../../../configs/images';
import SvgExit from '../../../../assets/svgs/Exit';
import SvgttgApp from '../../../../assets/svgs/TtgApp';
import storage from '.././../../utils/storage';
import { STORAGE_KEY } from '../../../constants/index';

export default class Component extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: '',
      email: ''
    };
  }
  componentDidMount() {
    this._getParams();
  }
  _getParams = async () => {
    try {
      const token = await storage.get(STORAGE_KEY.TOKEN_LOGIN);
      const getData = await axios.get('http://ec2-34-201-73-157.compute-1.amazonaws.com:9000/api/v1/users', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (getData.data.code === 200) {
        this.setState({
          fullname: getData.data.data.fullname,
          email: getData.data.data.email
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  home = () => {
    this.props.navigation.navigate('App');
  };
  about = () => {
    this.props.navigation.navigate('AboutApp');
  };

  exitApp = async () => {
    storage.remove(STORAGE_KEY.TOKEN_LOGIN);
    this.props.navigation.navigate('SignIn');
  };

  _renderCard = () => (
    <View style={styles.card}>
      <Image source={IMAGES.icon} resizeMode="contain" style={styles.logo} />
      <Text style={styles.title}>{this.state.fullname}</Text>
      <Text style={styles.label}>{this.state.email}</Text>
    </View>
  );

  _renderBody = () => (
    <View style={styles.body}>
      <TouchableOpacity onPress={this.about}>
        <View style={{ flexDirection: 'row', padding: 10 }}>
          <SvgttgApp style={{ marginLeft: 10 }} />
          <Text style={styles.App}>Tentang Aplikasi</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.exit} onPress={this.exitApp}>
        <View style={{ flexDirection: 'row', padding: 10 }}>
          <SvgExit style={{ marginLeft: 10 }} />
          <Text style={styles.App}>Keluar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <Container style={styles.container}>
        <View>{this._renderCard()}</View>
        <View style={styles._renderBody}>{this._renderBody()}</View>
      </Container>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
