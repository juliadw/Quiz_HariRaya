/* eslint-disable no-console */
import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import axios from 'axios';

import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';
import I18n from '../../i18n';
import Button from '../../components/elements/Button';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      callname: '',
      phone: '',
      email: '',
      password: '',
      hidePassword: true
    };
  }

  setPasswordVisibility = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
  };

  // _signIn = async () => {
  //   const { fullname, username, phoneNumber, email, password, confirmPassword } = this.state;
  //   const params = { fullname, username, phoneNumber, email, password, confirmPassword };
  //   if (
  //     fullname === '' &&
  //     username === '' &&
  //     phoneNumber === '' &&
  //     email === '' &&
  //     password === '' &&
  //     confirmPassword === ''
  //   ) {
  //     Alert.alert('Isi Secara Lengkap!');
  //   } else {
  //     try {
  //       console.log(params);
  //       const result = await ENDPOINT.signUp(params);
  //       console.log(result);

  //       if (result.code === 200) {
  //         console.log('Benar!');
  //         Alert.alert(JSON.stringify(result.code), 'Success');
  //         this.props.navigation.navigate('SignIn');
  //       } else {
  //         ToastAndroid.show('Failed to Register', ToastAndroid.SHORT);
  //         console.log('Salah!');
  //       }
  //     } catch (error) {
  //       ToastAndroid.show('error.networkError', ToastAndroid.SHORT);
  //       console.log(error);
  //     }
  //   }
  // };

  _signUp = async () => {
    const { fullname, callname, email, phone, password } = this.state;
    const accountData = { fullname, callname, email, phone, password };
    try {
      const res = await axios.post(
        'http://ec2-34-201-73-157.compute-1.amazonaws.com:9000/api/v1/users/register',
        accountData
      );
      console.log(res.data);
      this.props.navigation.navigate('SignIn');
    } catch (error) {
      console.error('MASIH ERROR');
      console.log(error);
    }
  };

  // _signUp = async () => {
  //   const { fullname, callname, phone, email, password } = this.state;
  //   const payload = {
  //     fullname,
  //     callname,
  //     phone,
  //     email,
  //     password
  //   };
  //   axios
  //     .post('http://ec2-3-84-19-128.compute-1.amazonaws.com:9000/api/v1/users/register', payload)
  //     .then(async value => {
  //       console.log(value.data);
  //       // await AsyncStorage.setItem('token', value.data.token);
  //       if (value.data.code === 201) {
  //         this.props.navigation.dispatch(SwitchActions.jumpTo({ routeName: 'SignIn' }));
  //         ToastAndroid.show('Success', ToastAndroid.SHORT);
  //       } else {
  //         ToastAndroid.show('email or password wrong', ToastAndroid.SHORT);
  //       }
  //     })
  //     .catch(err => {
  //       ToastAndroid.show('Error', ToastAndroid.SHORT);
  //       console.log(err);
  //     });
  // };

  render() {
    // eslint-disable-next-line no-unused-vars
    const { email, password, fullname, callname, phone, onChangeText } = this.state;
    return (
      <MainScreen style={styles.mainContainer}>
        <Text style={styles.title}>{I18n.t('daftar2')}</Text>
        <TextInput
          label=" "
          underlineColorAndroid="transparent"
          placeholder={I18n.t('name')}
          editable
          style={styles.input}
          value={fullname}
          // eslint-disable-next-line no-shadow
          onChangeText={fullname => this.setState({ fullname })}
        />
        <View style={styles.margin} />
        <TextInput
          label=" "
          underlineColorAndroid="transparent"
          placeholder={I18n.t('username')}
          editable
          style={styles.input}
          value={callname}
          // eslint-disable-next-line no-shadow
          onChangeText={callname => this.setState({ callname })}
        />
        <View style={styles.margin} />
        <TextInput
          label=" "
          underlineColorAndroid="transparent"
          placeholder={I18n.t('phoneNumber')}
          editable
          style={styles.input}
          value={phone}
          // eslint-disable-next-line no-shadow
          onChangeText={phone => this.setState({ phone })}
        />
        <View style={styles.margin} />
        <TextInput
          label=" "
          underlineColorAndroid="transparent"
          placeholder={I18n.t('email')}
          editable
          style={styles.input}
          value={email}
          // eslint-disable-next-line no-shadow
          onChangeText={email => this.setState({ email })}
        />
        <View style={styles.margin} />
        <View style={styles.inputPassword}>
          <TextInput
            label=" "
            underlineColorAndroid="transparent"
            placeholder={I18n.t('password')}
            editable
            style={styles.inputPass}
            value={password}
            Icon={this.state.iconName}
            // eslint-disable-next-line no-shadow
            onChangeText={password => this.setState({ password })}
            secureTextEntry={this.state.hidePassword}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.touachableButton}
            onPress={this.setPasswordVisibility}
          >
            <Image
              source={
                this.state.hidePassword
                  ? // eslint-disable-next-line global-require
                    require('../../../assets/images/hide.png')
                  : // eslint-disable-next-line global-require
                    require('../../../assets/images/view.png')
              }
              style={styles.buttonImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.margin} />
        {/* <View style={styles.inputPassword}>
          <TextInput
            label=" "
            underlineColorAndroid="transparent"
            placeholder={I18n.t('confirmPassword')}
            editable
            style={styles.inputPass}
            value={password}
            Icon={this.state.iconName}
            // eslint-disable-next-line no-shadow
            onChangeText={confirmPassword => this.setState({ confirmPassword })}
            secureTextEntry={this.state.hidePassword}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.touachableButton}
            onPress={this.setPasswordVisibility}
          >
            <Image
              source={
                this.state.hidePassword
                  ? // eslint-disable-next-line global-require
                    require('../../../assets/images/hide.png')
                  : // eslint-disable-next-line global-require
                    require('../../../assets/images/view.png')
              }
              style={styles.buttonImage}
            />
          </TouchableOpacity>
        </View> */}

        <View style={styles.margin} />
        <Button
          type="raised-ripple"
          title={I18n.t('daftar2')}
          onPress={this._signUp}
          customContainer={styles.btn}
          customText={styles.btnText}
        />
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
