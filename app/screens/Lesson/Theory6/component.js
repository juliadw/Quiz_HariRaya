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
          uri: 'https://i.ibb.co/TW0hmVL/Rectangle-12.png'
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
            <Text style={styles.titleTeory}> Jenis Hewan Sebagai hewan Qurban</Text>
            <Text style={styles.SubTeory}>A. Definisi Qurban </Text>
            <Text style={styles.teory}>
              Para ulama telah sepakat bahwa hewan yang boleh disembelih sebagai Qurban hanyalah hewan jenis
              Na’am/An’âm (binatang ternak) seperti Unta, Lembu, Kerbau dan Kambing dengan berbagai jenisnya.
              Berdasarkan firman Allah SWT dalam Qs. al-Hajj [22]: 34,
              {'\n'}
            </Text>
            <Text style={styles.arabian}>
              وَلِكُلِّ أُمَّةٍ جَعَلْنَا مَنْسَكًا لِيَذْكُرُوا اسْمَ اللَّهِ عَلَىٰ مَا رَزَقَهُمْ مِنْ
              بَهِيمَةِ الْأَنْعَامِ ۗ فَإِلَٰهُكُمْ إِلَٰهٌ وَاحِدٌ فَلَهُ أَسْلِمُوا ۗ وَبَشِّرِ
              الْمُخْبِتِينَ
            </Text>
            <Text style={styles.teory}>{'\n'} Artinya:</Text>
            <Text style={styles.arti}>
              “Dan bagi tiap-tiap umat telah Kami syariatkan penyembelihan (kurban), supaya mereka menyebut
              nama Allah terhadap binatang ternak yang telah direzekikan Allah kepada mereka, maka Tuhanmu
              ialah Tuhan Yang Maha Esa, karena itu berserah dirilah kamu kepada-Nya. Dan berilah kabar
              gembira kepada orang-orang yang tunduk patuh (kepada Allah)”
              {'\n'}
            </Text>

            <Text style={styles.SubTeory}>B. Hewan yang paling afdhal sebagai Qurban</Text>
            <Text style={styles.teory}>
              Unta, kemudian Lembu, kemudian Domba, kemudian Kambing. Dilihat dari hewan yang paling banyak
              dagingnya dan karena tujuannya agar fakir miskin yang memperoleh daging Qurban lebih banyak.
              Juga berdasarkan hadits Rasulullah SAW yang menyebutkan, {'\n'} “Siapa yang mandi pada hari
              seperti mandi junub, kemudian ia pergi ke masjid, maka seakan-akan ia berkurban seekor unta.
              Siapa yang pergi pada waktu kedua, maka seakan-akan ia berkurban seekor lembu. Dan siapa yang
              pergi pada waktu ketiga, maka seakan-akan ia berkurban seekor kambing yang telah bertanduk”.
              (HR.al-Bukhâri dan Muslim).
              {'\n'} Menyembelih hewan jantan lebih afdhal daripada hewan betina1. Karena daging hewan jantan
              lebih banyak dan lebih segar. Tujuh orang yang menyembelih tujuh ekor kambing lebih afdhal
              daripada tujuh orang yang berkongsi menyembelih satu ekor lembu. Karena daging kambing lebih
              baik2, bila dilihat dari jumlah banyaknya hewan yang dikurbankan.
              {'\n'}
            </Text>

            <Text style={styles.SubTeory}>C. Batasan Usia Bagi Hewan Qurban</Text>
            <Text style={styles.teory}>
              Untuk unta, telah genap lima tahun dan memasuki tahun ke-enam. Untuk lembu dan kambing, telah
              genap dua tahun dan memasuki tahun ke-tiga. Dan untuk domba, memasuki tahun ke-dua.
              {'\n'}
            </Text>
            <View style={styles.bottom} />
          </View>
        </ScrollView>
      </View>
    );
  }
}
