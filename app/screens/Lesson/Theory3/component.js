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
          uri: 'https://i.ibb.co/cLBz0hv/gb-Idul-Adha.png'
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
            <Text style={styles.titleTeory}> Takbir Lebaran Idul Adha</Text>
            <Text style={styles.SubTeory}>A. Bacaan Takbir Lebaran Idul Adha</Text>
            <Text style={styles.arabian}>
              الله أكبر الله أكبر الله أكبر لا إله إلا الله والله أكبر الله أكبر ولله الحمد الله أكبر كبيراً
              والحمد لله كثيراً وسبحان الله بكرة وأصيلاً، لا إله إلا الله وحده صدق وعده ونصر عبده وأعز جنده
              وهزم الأحزاب وحده
            </Text>

            <Text style={styles.SubTeory}>B. Hukum & dan Waktu Sunnah</Text>
            <Text style={styles.teory}>
              Tabir yang dibaca saat hari raya Idul Adha dan hari tasyriq ada 2 (dua) macam yaitu takbir
              mutlak/mursal dan takbir muqoyyad. Takbir mutlak/mursal disunnahkan dibaca baik pada hari raya
              Idul Adha maupun Idul Adha. Sedangkan takbir muqayyad khusus dibaca pada Idul Adha saja. {'\n'}{' '}
              {'\n'}
              mursal/mutlak adalah takbir yang membacanya tidak terika oleh waktu atau tempat. Ia boleh dibaca
              di rumah, masjid, jalan, siang dan malam, dll. Sedangkan tabir muqoyyad adalah takbir yang
              dibaca sebelum atau sesudah shalat. Waktu sunnah membaca takbir muqayyad adalah sejak hari
              Arafah tanggal 9 Dzulhijjah sampai waktu Ashar dari hari tasyriq pada tanggal 13 Dzulhijjah
            </Text>
            <Text style={styles.teory}>
              {'\n'}
              1) Sebelum shalat idul adha {'\n'} 2) Sebelum shalat wajib 5 waktu baik yang tepat waktu (ada')
              atau qadha. {'\n'} 3) Sebelum shalat sunnah rawatib, {'\n'} 4) Sebelum shalat sunnah mutlak, e)
              Sebelum shalat jenazah.
            </Text>
            <Text style={styles.SubTeory}>{'\n'}C. Sunnah Tidak Makan Sebelum Shalat Idul Adha</Text>
            <Text style={styles.teory}>
              Pada hari raya Idul Adha, hukumnya sunnah bagi setiap muslim untuk tidak makan sampai selesai
              shalat Idul Adha. Ini merupakan kebalikan dari Idul Fitri yang disunnahkan makan sebelum
              berangkat ke masjid untuk shalat. Berdasarkan pada hadits riwayat Ahmad no. 22984 :
            </Text>
            <Text style={styles.arabian}>
              {' '}
              {'\n'}
              عن عبد الله بن بريدة، عن أبيه قال: كَانَ رَسُولُ اللَّهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ لَا
              يَغْدُو يَوْمَ الْفِطْرِ حَتَّى يَأْكُلَ، وَلَا يَأْكُلُ يَوْمَ الْأَضْحَى حَتَّى يَرْجِعَ
              فَيَأْكُلَ مِنْ أُضْحِيَّتِهِ
            </Text>
            <Text style={styles.teory}> {'\n'} Artinya:</Text>
            <Text style={styles.arti}>
              Dari Abdullah bin Buraidah dari ayahnya ia berkata: “Rasulullah shallallahu alaihi wasallam
              tidak keluar pagi pada hari Idul Fitri sehingga beliau makan, dan beliau tidak makan pada hari
              Idul Adha sehingga beliau pulang (dari shalatnya) kemudian memakan daging kurbannya”
            </Text>
            <View style={styles.bottom} />
          </View>
        </ScrollView>
      </View>
    );
  }
}
