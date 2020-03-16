/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import YouTube from 'react-native-youtube';
import HEADER from '../../../components/elements/Header';
import styles from './styles';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HEADER title="Video" back />
        <Text style={styles.title}>C. Video</Text>
        <YouTube
          apiKey="AIzaSyDI1wfU3MU-vwG-DBBd2YP2sFTsIPQUBXM"
          videoId="WYCSPPRx-2c" // The YouTube video ID
          play // control playback of video with true/false
          fullscreen // control whether the video should play in fullscreen or inline
          loop // control whether the video should loop when ended
          onReady={e => this.setState({ isReady: true })}
          onChangeState={e => this.setState({ status: e.state })}
          onChangeQuality={e => this.setState({ quality: e.quality })}
          onError={e => this.setState({ error: e.error })}
          style={{ alignSelf: 'stretch', height: 300 }}
        />
        <View style={styles.content}>
          <Text style={styles.SubTeory}>Waktu Terbaik Menyembelih Hewan Qurban</Text>
          <Text style={styles.teory}>
            Udh-hiyah adalah hewan ternak yang disembelih pada hari Iedul Adha dan hari Tasyriq dalam rangka
            mendekatkan diri kepada Allah karena datangnya hari raya tersebut (lihat Al Wajiz, 405 dan Shahih
            Fiqih Sunnah II/366). {'\n'} Banyak ulama menjelaskan bahwa menyembelih hewan qurban pada hari
            idul Adlha lebih utama dari pada sedekah yang senilai atau harga hewan qurban atau bahkan sedekah
            yang lebih banyak dari pada nilai hewan qurban.
          </Text>
        </View>
      </View>
    );
  }
}
