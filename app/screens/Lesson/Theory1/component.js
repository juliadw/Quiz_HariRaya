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
            <Text style={styles.titleTeory}>Dasar untuk Idul Adha</Text>
            <Text style={styles.SubTeory}>A. Definisi Sholat Idul Adha</Text>
            <Text style={styles.teory}>
              Shalat Idul Adha adalah shalat yang diadakan pada Hari Raya Idul Adha yang jatuh pada 10
              Dzulhijjah yang bertepatan dengan ibadah haji di Makkah Al-Mukarramah dan kerena itu disebut
              juga dengan Hari Raya Haji atau Hari Raya Qurban kerena disunnahkan berkurban bagi yang mampu.{' '}
              {'\n'}
            </Text>
            <Text style={styles.SubTeory}>B. Dalil Idul Adha</Text>
            <Text style={styles.teory}> QS Al-Kautsar :2 </Text>
            <Text style={styles.arabian}> فَصَلِّ لِرَبِّكَ وَانْحَر </Text>
            <Text style={styles.teory}>
              Menurut sebagian ulama tafsir, shalat yang dimaksud adalah shalat hari raya.
            </Text>
            <Text style={styles.teory}>Hadits Bukhari dan Muslim: {'\n'} </Text>
            <Text style={styles.arabian}>
              أُمِّ عَطِيَّةَ رَضِيَ اللَّهُ عَنْها قَالَتْ : أَمَرَنَا رَسُولُ اللَّهِ صَلَّى اللَّهُ
              عَلَيْهِ وَسَلَّمَ أَنْ نُخْرِجَهُنَّ فِي الْفِطْرِ وَالأَضْحَى الْعَوَاتِقَ وَالْحُيَّضَ
              وَذَوَاتِ الْخُدُورِ ، فَأَمَّا الْحُيَّضُ فَيَعْتَزِلْنَ الصَّلاةَ وَيَشْهَدْنَ الْخَيْرَ
              وَدَعْوَةَ الْمُسْلِمِينَ . قُلْتُ : يَا رَسُولَ اللَّهِ ، إِحْدَانَا لا يَكُونُ لَهَا جِلْبَابٌ
              {'\n'} . قَالَ : لِتُلْبِسْهَا أُخْتُهَا مِنْ جِلْبَابِهَا .
            </Text>
            <Text style={styles.teory}> Artinya:</Text>
            <Text style={styles.arti}>
              Ummu Atiyyah berkata: Rasulullah menyuruh kami perempuan untuk keluar di Idul Fitri dan Idul
              Adha. Baik wanita yang baru balig, wanit` sedang haid dan wanita perawan. Sementara orang yang
              haid dipisahkan dari (tempat) shalat. Agar mereka dapat menyaksikan kebaikan dan doa umat
              Islam." Saya berkata, ‘Wahai Rasulullah, ada di antara kami yang tidak mempunyai jilbab." Beliau
              mengatakan, "Sebaiknya saudara perempuannya memberinya jilbab." {'\n'}
            </Text>
            <Text style={styles.SubTeory}>C. Hukum Shalat Idul Adha</Text>
            <Text style={styles.teory}>
              Shalat Idul Adha hukumnya sunnah. Ia merupakan bagian penting dari perayaan hari raya Idul Adha.
            </Text>
            <View style={styles.bottom} />
          </View>
        </ScrollView>
      </View>
    );
  }
}
