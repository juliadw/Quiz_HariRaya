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
        <Text style={styles.title}>D. Video</Text>
        <YouTube
          apiKey="AIzaSyDI1wfU3MU-vwG-DBBd2YP2sFTsIPQUBXM"
          videoId="1IbB_Z9pDYs" // The YouTube video ID
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
          <Text style={styles.SubTeory}>Tata Cara Menyembelih Hewan Qurban</Text>
          <Text style={styles.teory}>
            Kisah singkat mengenai adanya kurban berawal dari persitiwa Nabi Ibrahim AS yang akan menyembelih
            putranya Nabi Ismail AS. Kemudian disyiarkan oleh Nabi terkahir Muhammad SAW yang menganjurkan
            umat Islam untuk menyembelih qurban di hari raya Haji atau Idul Adha. Artikel ini telah tayang di
            sripoku.com dengan judul Kisah Singkat Kurban, Ikhlasnya Nabi Ibrahim Sembelih Anak Sendiri Demi
            Tunaikan Perintah Allah SWT.
          </Text>
        </View>
      </View>
    );
  }
}
