/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Card, CardItem, Body } from 'native-base';
import HEADER from '../../components/elements/Header';
import styles from './styles';
import IMAGES from '../../configs/images';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HEADER back />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
          style={styles.body}
        >
          <View style={styles.content}>
            <Text style={styles.SubTeory}>Tentang Aplikasi </Text>
            <Text style={styles.teory}>
              Aplikasi HariRayaku adalah sebuah aplikasi tentang Hari Raya Islam yang berisi kumpulan
              soal-soal seputar Hari Rayya Islam. Dengan aplikasi ini pengguna dapat menambah pemahaman
              mengenai Hari Raya Islam. Aplikasi ini juga dilengkapi dengan materi pembahasan Hari Raya Islam,
              yaitu: {'\n'}
              1. Hari Raya Idul Fitri {'\n'}
              2. Hari Raya Idul Adha {'\n'} {'\n'}
              LATIHAN SOAL {'\n'}
              Di aplikasi ini juga terdapat soal sehingga pengguna dapat mengasah kemampuan sampai mana
              pemahaman tentang hari raya. {'\n'} {'\n'}
              VIDEO {'\n'}
              Selain teks disini juga terdapat video sehingga pengguna tidak lagi bosan hanya dengan melihat
              teks {'\n'}
            </Text>
            <Text style={styles.Teory}>Team </Text>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/raihanathaya_/')}>
              <Card transparent style={styles.card}>
                <CardItem cardBody style={styles.cardImage}>
                  <Image source={IMAGES.athaya} resizeMode="contain" style={styles.gambar} />
                </CardItem>
                <CardItem style={styles.cardItem}>
                  <Body>
                    <Text style={styles.titleBook}>Raihan Athaya Fawwaz</Text>
                    <Text style={styles.page}>Designer</Text>
                  </Body>
                </CardItem>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.left}
              onPress={() => Linking.openURL('https://www.instagram.com/raihanathaya_/')}
            >
              <Card transparent style={styles.card}>
                <CardItem cardBody style={styles.cardImage}>
                  <Image source={IMAGES.sidqi} resizeMode="contain" style={styles.gambar} />
                </CardItem>
                <CardItem style={styles.cardItem}>
                  <Body>
                    <Text style={styles.titleBook}>Muhammad Fikri Sidqi</Text>
                    <Text style={styles.page}>Back End Developer</Text>
                  </Body>
                </CardItem>
              </Card>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/juliaa.dw/')}>
              <Card transparent style={styles.card}>
                <CardItem cardBody style={styles.cardImage}>
                  <Image source={IMAGES.julia} resizeMode="contain" style={styles.gambar} />
                </CardItem>
                <CardItem style={styles.cardItem}>
                  <Body>
                    <Text style={styles.titleBook}>Julia Dwiana</Text>
                    <Text style={styles.page}>Front End Developer</Text>
                  </Body>
                </CardItem>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.left}
              onPress={() => Linking.openURL('https://www.instagram.com/putra.hzrin/')}
            >
              <Card transparent style={styles.card}>
                <CardItem cardBody style={styles.cardImage}>
                  <Image source={IMAGES.yulza} resizeMode="contain" style={styles.gambar} />
                </CardItem>
                <CardItem style={styles.cardItem}>
                  <Body>
                    <Text style={styles.titleBook}>Muhammad Yulza Putra</Text>
                    <Text style={styles.page}>Content Reasercher</Text>
                  </Body>
                </CardItem>
              </Card>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/dudung_awuk/')}>
            <View style={styles.row}>
              <Card transparent style={styles.card}>
                <CardItem cardBody style={styles.cardImage}>
                  <Image source={IMAGES.dudung} resizeMode="contain" style={styles.gambar} />
                </CardItem>
                <CardItem style={styles.cardItem}>
                  <Body>
                    <Text style={styles.titleBook}>Muhammad Fikri Nabil A</Text>
                    <Text style={styles.page}>Content Reasercher</Text>
                  </Body>
                </CardItem>
              </Card>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
