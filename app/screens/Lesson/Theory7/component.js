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
            <Text style={styles.titleTeory}> Hari Raya Idul Fitri </Text>
            <Text style={styles.teory}>
              IDUL Fitri adalah hari raya umat Islam. Muslim Indonesia menyebutnya dengan Lebaran dan momentum
              saling bermaafan, setelah puasa Ramadhan yang menyucikan jiwa, membersihkan dosa.
              {'\n'}
            </Text>
            <Text style={styles.SubTeory}>A. Pengertian Idul Fitri </Text>
            <Text style={styles.teory}>
              Secara bahasa (harfiyah), Idul Fitri artinya kembali ke fitrah. Kata fitrah dari kata futhur
              yang artinya kembali makan pagi (sarapan). Jadi, Idul Fitri sejatinya bermakna kembali sarapan,
              tidak seperti bulan Ramadhan yang harus berpuasa. Ada juga yang memaknai Idul Fitri sebagai
              kembali ke fitrah, yakni asal kejadian manusia yang suci-bersih dari dosa, layaknya bayi baru
              lahir.
              {'\n'}
              {'\n'}
              Pengertian demikian dikaitakan dengan hadits Nabi Saw dari sahabat Abu Hurairah. Ia berkata:
              {'\n'}
              “Barang siapa berpuasa Ramadhan atas dasar iman dan mengharap pahala dari Allah, maka dosanya
              telah lalu akan diampuni.”(HR. Bukhari dan Muslim).
              {'\n'}
            </Text>

            <Text style={styles.SubTeory}>B. Sejarah Hari Raya Idul Fitri</Text>
            <Text style={styles.teory}>
              Sebelum ajaran Islam diturunkan kepada Nabi Muhammad Saw di Makkah, masyarakat Jahiliyah Arab
              sudah memiliki dua hari raya, yakni Nairuz dan Mahrajan.
              {'\n'}
              Kaum Arab Jahiliyah menggelar kedua hari raya itu dengan menggelar pesta-pora. Selain
              menari-nari, baik tarian perang maupun ketangkasan, mereka juga merayakan hari raya dengan
              bernyanyi dan menyantap hidangan lezat serta minuman memabukkan.
              {'\n'}
              ‘’Nairuz dan Mahrajan merupakan tradisi hari raya yang berasal dari zaman Persia Kuno,’’ tulis
              Ensiklopedi Islam.
              {'\n'}
              {'\n'}
              Setelah turunnya kewajiban menunaikan ibadah puasa Ramadhan pada 2 Hijriyah, sesuai dengan hadis
              yang diriwayatkan Abu Dawud dan An-Nasa’i, Rasulullah SAW bersabda:
              {'\n'}
              "Sesungguhnya Allah mengganti kedua hari raya itu dengan hari raya yang lebih baik, yakni Idul
              Fitri dan Idul Adha." (HR Daud dan Nasai)
              {'\n'}
              {'\n'}
              Setiap kaum memang memiliki hari raya masing-masing. Ibnu Katsir dalam Kisah Para Nabi dan Rasul
              mengutip sebuah hadits dari Abdullah bin Amar:
              {'\n'}
              "Saya mendengar Rasulullah SAW bersabda: ’’Puasanya Nuh adalah satu tahun penuh, kecuali hari
              Idul Fitri dan Idul Adha’.’’ (HR Ibnu Majah).
              {'\n'}
              {'\n'}
              Jika merujuk pada hadis di atas, maka umat Nabi Nuh AS pun memiliki hari raya. Sayangnya, kata
              Ibnu Katsir, hadits yang diriwayatkan Ibnu Majah itu sanadnya dhaif (lemah). Rasulullah Saw
              membenarkan bahwa setiap kaum memiliki hari raya.{'\n'}
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
