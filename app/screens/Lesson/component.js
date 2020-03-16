import React from 'react';
import { Image, View, TouchableOpacity, ScrollView } from 'react-native';
import { Container, Content, Card, CardItem, Text, Body } from 'native-base';
import PropTypes from 'prop-types';

import styles from './styles';
import IMAGES from '../../configs/images';
import SvgRightList from '../../../assets/svgs/RightLIst';

export default class Component extends React.Component {
  _theory1 = async () => {
    this.props.navigation.navigate('Theory1');
  };
  _theory2 = async () => {
    this.props.navigation.navigate('Theory2');
  };
  _theory3 = async () => {
    this.props.navigation.navigate('Theory3');
  };
  _theory4 = async () => {
    this.props.navigation.navigate('Theory4');
  };
  _theory5 = async () => {
    this.props.navigation.navigate('Theory5');
  };
  _theory6 = async () => {
    this.props.navigation.navigate('Theory6');
  };
  _theory7 = async () => {
    this.props.navigation.navigate('Theory7');
  };
  _video1 = async () => {
    this.props.navigation.navigate('Video1');
  };
  _video2 = async () => {
    this.props.navigation.navigate('Video2');
  };
  _video3 = async () => {
    this.props.navigation.navigate('Video3');
  };
  _video4 = async () => {
    this.props.navigation.navigate('Video4');
  };
  _onPress = () => {
    this.props.navigation.navigate('DrawerOpen');
  };

  render() {
    return (
      <Container style={styles.container}>
        <TouchableOpacity style={styles.ButtonRight} onPress={this._onPress}>
          <SvgRightList />
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>
          <Content>
            <Text style={styles.title}>Materi</Text>
            <Text style={styles.subtitle}>Idul Adha</Text>
            <View style={styles.row}>
              <TouchableOpacity onPress={this._theory1}>
                <Card transparent style={styles.card}>
                  <CardItem cardBody style={styles.cardImage}>
                    <Image source={IMAGES.thumbnail1} resizeMode="contain" style={styles.gambar} />
                  </CardItem>
                  <CardItem style={styles.cardItem}>
                    <Body>
                      <Text style={styles.titleBook}>Dasar untuk Idul Adha</Text>
                    </Body>
                  </CardItem>
                </Card>
              </TouchableOpacity>
              <TouchableOpacity style={styles.left} onPress={this._theory2}>
                <Card transparent style={styles.card}>
                  <CardItem cardBody style={styles.cardImage}>
                    <Image source={IMAGES.thumbnail2} resizeMode="contain" style={styles.gambar} />
                  </CardItem>
                  <CardItem style={styles.cardItem}>
                    <Body>
                      <Text style={styles.titleBook}>Tata Cara Sholat Idul Adha </Text>
                    </Body>
                  </CardItem>
                </Card>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity onPress={this._theory3}>
                <Card transparent style={styles.card}>
                  <CardItem cardBody style={styles.cardImage}>
                    <Image source={IMAGES.thumbnail3} resizeMode="contain" style={styles.gambar} />
                  </CardItem>
                  <CardItem style={styles.cardItem}>
                    <Body>
                      <Text style={styles.titleBook}>Takbir Lebaran Idul Adha</Text>
                    </Body>
                  </CardItem>
                </Card>
              </TouchableOpacity>
              <TouchableOpacity style={styles.left} onPress={this._theory4}>
                <Card transparent style={styles.card}>
                  <CardItem cardBody style={styles.cardImage}>
                    <Image source={IMAGES.thumbnail4} resizeMode="contain" style={styles.gambar} />
                  </CardItem>
                  <CardItem style={styles.cardItem}>
                    <Body>
                      <Text style={styles.titleBook}>Makna Ibadah Qurban</Text>
                    </Body>
                  </CardItem>
                </Card>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity onPress={this._theory5}>
                <Card transparent style={styles.card}>
                  <CardItem cardBody style={styles.cardImage}>
                    <Image source={IMAGES.thumbnail5} resizeMode="contain" style={styles.gambar} />
                  </CardItem>
                  <CardItem style={styles.cardItem}>
                    <Body>
                      <Text style={styles.titleBook}>Hukum dan Syarat Ibadah Qurban</Text>
                    </Body>
                  </CardItem>
                </Card>
              </TouchableOpacity>
              <TouchableOpacity style={styles.left} onPress={this._theory6}>
                <Card transparent style={styles.card}>
                  <CardItem cardBody style={styles.cardImage}>
                    <Image source={IMAGES.thumbnail6} resizeMode="contain" style={styles.gambar} />
                  </CardItem>
                  <CardItem style={styles.cardItem}>
                    <Body>
                      <Text style={styles.titleBook}>Jenis Hewan Sebagai hewan Qurban</Text>
                    </Body>
                  </CardItem>
                </Card>
              </TouchableOpacity>
            </View>

            <Text style={styles.subtitle}>Idul Fitri</Text>
            <View style={styles.row}>
              <TouchableOpacity onPress={this._theory7}>
                <Card transparent style={styles.card}>
                  <CardItem cardBody style={styles.cardImage}>
                    <Image source={IMAGES.idulfitri1} resizeMode="contain" style={styles.gambar} />
                  </CardItem>
                  <CardItem style={styles.cardItem}>
                    <Body>
                      <Text style={styles.titleBook}>Hari Raya Idul Fitri</Text>
                    </Body>
                  </CardItem>
                </Card>
              </TouchableOpacity>
            </View>

            <Text style={styles.subtitle}>Video</Text>
            <View style={styles.row}>
              <TouchableOpacity onPress={this._video1}>
                <Card transparent style={styles.card}>
                  <CardItem cardBody style={styles.cardImage}>
                    <Image source={IMAGES.thumbnail4} resizeMode="contain" style={styles.gambar} />
                  </CardItem>
                  <CardItem style={styles.cardItem}>
                    <Body>
                      <Text style={styles.titleBook}>Kisah Nabi Ibrahim dan Nabi Ismail </Text>
                    </Body>
                  </CardItem>
                </Card>
              </TouchableOpacity>
              <TouchableOpacity style={styles.left} onPress={this._video2}>
                <Card transparent style={styles.card}>
                  <CardItem cardBody style={styles.cardImage}>
                    <Image source={IMAGES.thumbnail1} resizeMode="contain" style={styles.gambar} />
                  </CardItem>
                  <CardItem style={styles.cardItem}>
                    <Body>
                      <Text style={styles.titleBook}>Adab Orang yang Berqurban </Text>
                    </Body>
                  </CardItem>
                </Card>
              </TouchableOpacity>
            </View>
            <View style={[styles.row, styles.margin]}>
              <TouchableOpacity onPress={this._video3}>
                <Card transparent style={styles.card}>
                  <CardItem cardBody style={styles.cardImage}>
                    <Image source={IMAGES.thumbnail5} resizeMode="contain" style={styles.gambar} />
                  </CardItem>
                  <CardItem style={styles.cardItem}>
                    <Body>
                      <Text style={styles.titleBook}>Waktu Terbaik Menyembelih Hewan Qurban </Text>
                    </Body>
                  </CardItem>
                </Card>
              </TouchableOpacity>
              <TouchableOpacity style={styles.left} onPress={this._video4}>
                <Card transparent style={styles.card}>
                  <CardItem cardBody style={styles.cardImage}>
                    <Image source={IMAGES.thumbnail6} resizeMode="contain" style={styles.gambar} />
                  </CardItem>
                  <CardItem style={styles.cardItem}>
                    <Body>
                      <Text style={styles.titleBook}>Tata Cara Menyembelih Hewan Qurban</Text>
                    </Body>
                  </CardItem>
                </Card>
              </TouchableOpacity>
            </View>
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
