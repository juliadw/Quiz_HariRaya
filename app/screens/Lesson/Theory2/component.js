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
          uri: 'https://i.ibb.co/kh8bFc0/Rectangle-11.png'
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
            <Text style={styles.titleTeory}>Tata Cara Shalat Dan Khutbah Idul Adha</Text>
            <Text style={styles.SubTeory}>A. Niat Shalat Idul Adha</Text>
            <Text style={styles.teory}>
              Shalat Idul Adha adalah shalat yang diadakan pada Hari Raya Idul Adha yang jatuh pada 10
              Dzulhijjah yang bertepatan dengan ibadah haji di Makkah Al-Mukarramah dan kerena itu disebut
              juga dengan Hari Raya Haji atau Hari Raya Qurban kerena disunnahkan berkurban bagi yang mampu.
            </Text>
            <Text style={styles.teory}> {'\n'} Sebagai imam/makmum: </Text>
            <Text style={styles.arabian}>
              {'\n'}
              أُصَلِّيْ رَكْعَتَيْنِ سُنَّةً لعِيْدِ اْلأَضْحَى (مَأْمُوْمًا\إِمَامًا) للهِ تَعَــــــــالَى
            </Text>
            <Text style={styles.teory}>
              {' '}
              {'\n'}
              Ushallî rak‘ataini sunnata-li ‘îdil adl-hâ (ma’mûman/imâman) lillâhi ta‘âlâ {'\n'}
            </Text>
            <Text style={styles.teory}> Artinya:</Text>
            <Text style={styles.arti}>
              “Aku niat melaksanakan shalat sunnah Idul Adha (sebagai makmum/imam) karena Allah Ta‘âlâ.”{' '}
              {'\n'}
            </Text>
            <Text style={styles.SubTeory}>B. Cara Shalat Idul Adha</Text>
            <Text style={styles.teory}>
              Shalat sunnah idul adha terdiri dari 2 (dua) rokaat. Rokaat pertama diawali dengan takbirotul
              ihrom ditambah 7x takbir. Sedangkan rakaat kedua 5 (lima) kali takbir. Lebih detailnya sbb{' '}
              {'\n'}
            </Text>
            <Text style={styles.bullets}>Bacaan Rakaat pertama: </Text>
            <Text style={styles.teory}>
              (a) Baca takbirotul ihram (takbir permulaan shalat) dengan niat shalat idul adha. {'\n'} (b)
              Membaca doa iftitah {'\n'} (c) Membaca takbir 7 (tujuh) kali (selain takbirotul ihram)
              {'\n'} (d) Membaca Al-Fatihah {'\n'} (d) Membaca surat Al-Quran seperti Al-A'la {'\n'}
            </Text>
            <Text style={styles.bullets}>Bacaan Rakaat kedua: </Text>
            <Text style={styles.teory}>
              (a) Membaca takbir 5 (lima) kali. {'\n'}
              (b) Membaca Al-Fatihah {'\n'}
              (c) Membaca surat Al-Quran seperti Al-Ghasyiyah.
            </Text>
            <Text style={styles.teory}>
              Setelah sujud rakaat kedua, diikuti dengan tahiyat (tasyahud) akhir dan diakhiri dengan salam.
              Prosesi berikutnya adalah khutbah Idul Adha, bagian ini khusus untuk khatib Idul Adha. {'\n'}
            </Text>
            <Text style={styles.SubTeory}>C. Bacaan Tiap Takbir Shalat Idul Adha</Text>
            <Text style={styles.teory}>
              Setiap takbir saat shalat Idul Adha baik rakaat pertama atau kedua disunnahkan membaca tasbih
              yaitu: {'\n'}
            </Text>
            <Text style={styles.arabian}>
              سُبْحَانَ اللهْ وَالْحَمْدُ لِلهْ وَلآ اِلَهَ اِلَّا اللهْ وَاللهُ اَكْبَرْ
            </Text>
            <Text style={styles.teory}>
              SubhanAllah walhamdulillah walailaha illAllah wAllahu Akbar {'\n'}
            </Text>
            <Text style={styles.teory}> Artinya:</Text>
            <Text style={styles.arti}>
              “Mahasuci Allah dan segala puji bagi Allah dan tiada Tuhan selain Allah dan Allah Mahabesar.”{' '}
              {'\n'}
            </Text>
            <Text style={styles.SubTeory}>D. Tata Cara Khutbah Idul Adha</Text>
            <Text style={styles.teory}>
              Khutbah Idul Adha terbagi dua yaitu khutbah pertama dan khutbah kedua. Di antara dua khutbah
              biasanya dipisah dengan duduk sebentar. {'\n'}
            </Text>
            <Text style={styles.bullets}>Tata cara khutbah: </Text>
            <Text style={styles.teory}>
              (a) Membaca takbir 9 (sembilan) kali terus menerus pada khutbah pertama; {'\n'} (b) membaca
              takbir 5 (lima) kali secara terus menerus (tanpa dipisah) di rakaat kedua selain takbir untuk
              berdiri.
            </Text>
            <View style={styles.bottom} />
          </View>
        </ScrollView>
      </View>
    );
  }
}
