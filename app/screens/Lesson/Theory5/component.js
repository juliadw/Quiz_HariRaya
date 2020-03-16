/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable react/sort-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/react-in-jsx-scope */

import React, { Component } from 'react';
import { View, ScrollView, Image, Dimensions, Text } from 'react-native';
import styles from './styles';

const { width } = Dimensions.get('window');
const height = width * 0.8;

class Carousel extends Component {
  render() {
    const { images } = this.props;
    if (images && images.length) {
      return (
        <View style={styles.scrollContainer}>
          <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator>
            {images.map((image, i) => (
              <Image style={styles.image} source={image.source} key={i} />
            ))}
          </ScrollView>
        </View>
      );
    }
    console.log('Please provide images');
    return null;
  }
}

export default class App extends Component {
  render() {
    const images = [
      {
        source: {
          uri: 'https://i.ibb.co/fCZykKv/Rectangle-10.png'
        }
      },
      {
        source: {
          uri: 'https://i.ibb.co/NFRvcZ9/cerita1.png'
        }
      },
      {
        source: {
          uri: 'https://i.ibb.co/gSgcd77/cerita2.png'
        }
      },
      {
        source: {
          uri: 'https://i.ibb.co/ryVS8kt/cerita3.png'
        }
      }
    ];
    return (
      <View style={styles.container}>
        <ScrollView>
          <Carousel images={images} />
          <View style={styles.content}>
            <Text style={styles.titleTeory}> Hukum dan Syarat Ibadah Qurban </Text>
            <Text style={styles.SubTeory}>A. Hukum berkurban </Text>
            <Text style={styles.teory}>
              Berkurban hukumnya Sunnah Mu’akkadah bagi yang mampu melaksanakannya, berdasarkan hadits yang
              diriwayatkan dari Ibnu Abbas, ia berkata, Saya mendengar Rasulullah SAW bersabda, {'\n'} {'\n'}{' '}
              “Ada tiga perkara yang wajib bagiku dan sunnat bagi kamu; shalat Witir, menyembelih Qurban dan
              shalat Dhuhâ”. (HR.Ahmad, al-Hakim dan ad-Daraquthni). {'\n'}
              Dan hadits, “Aku (Rasulullah SAW) diperintahkan untuk berkurban dan tidak wajib (bagi kamu)”.
              (HR. at-Tirmidzi). {'\n'}
              {'\n'} Dalam sebuah riwayat dari Imam al-Baihaqi disebutkan, َImam Syafi’i –rahimahullâh-
              berkata, “Telah sampai (suatu riwayat) kepada kami bahwa Abu Bakar ash-Shiddiq dan Umar RA
              pernah tidak berkurban karena tidak ingin diikuti sehingga orang yang melihatnya menyangka bahwa
              berkurban itu wajib”. {'\n'}
            </Text>

            <Text style={styles.SubTeory}>B. Syarat Bagi Orang yang Berkurban </Text>
            <Text style={styles.teory}>
              1) Islam.{'\n'} 2) Baligh. 3) Berakal.{'\n'} 4) Mampu untuk berkurban. {'\n'}
            </Text>
            <Text style={styles.SubTeory}>C. Orang yang Dianggap Mampu Berkurban </Text>
            <Text style={styles.teory}>
              Orang yang dikategorikan mampu berkurban adalah orang yang mampu memenuhi kebutuhan pokok untuk
              dirinya sendiri dan orang-orang yang wajib ia nafkahi pada hari Idul Adha dan hari-hari Tasyrîq,
              kemudian ia memiliki dana yang cukup untuk menyembelih hewan Qurban. {'\n'}
            </Text>
            <Text style={styles.SubTeory}>D. Waktu Penyembelihan Hewan Qurban </Text>
            <Text style={styles.teory}>
              Penyembelihan hewan Qurban boleh dilaksanakan beberapa saat setelah terbitnya matahari pada hari
              Idul Adha. Waktu beberapa saat tersebut diukur dengan waktu kira-kira selama dua rakaat shalat
              dan dua khutbah yang singkat. Jika hewan Qurban disembelih sebelum waktu tersebut, maka
              sembelihan Qurban tidak sah, berdasarkan hadits yang terdapat dalam Shahîh al-Bukhâri dan
              Muslim, {'\n'}
              {'\n'} “Sesungguhnya yang pertama sekali kami lakukan pada hari ini adalah melaksanakan shalat
              (Idul Adha), kemudian kami kembali untuk menyembelih hewan Qurban. Siapa yang melaksanakan itu,
              maka sungguh ia telah melaksanakan Sunnah dan siapa yang menyembelih Qurban sebelum shalat (Idul
              Adha), maka itu hanyalah menjadi daging yang ia persembahkan untuk keluarganya, tidak termasuk
              ibadah (Qurban) walau sedikitpun”. {'\n'} {'\n'}Waktu penyembelihan Qurban tersebut berlanjut
              hingga hari-hari Tasyrîq (11, 12 dan 13 Dzulhijjah). {'\n'}Berdasarkan hadits Rasulullah SAW,
              “Seluruh hari-hari Tasyrîq itu adalah hari-hari penyembelihan hewan Qurban”. (HR.Ahmad dan
              ad-Dâraquthni).
              {'\n'}
            </Text>
            <View style={styles.bottom} />
          </View>
        </ScrollView>
      </View>
    );
  }
}
