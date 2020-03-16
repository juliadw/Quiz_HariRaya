/* eslint-disable no-console */
/* eslint-disable react-native/no-raw-text */
import React from 'react';
import { Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Title, Body, View, Card, CardItem, Container } from 'native-base';
import PropTypes from 'prop-types';
import axios from 'axios';
import storage from '../../utils/storage';
import SvgRightList from '../../../assets/svgs/RightLIst';
import styles from './styles';
import IMAGES from '../../configs/images';
import { STORAGE_KEY } from '../../constants';
import Svgmore from '../../../assets/svgs/selengkapnya';

export default class Component extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      callname: ''
    };
  }
  componentDidMount() {
    this._getParams();
  }
  _getParams = async () => {
    try {
      const token = await storage.get(STORAGE_KEY.TOKEN_LOGIN);
      const getData = await axios.get('http://ec2-34-201-73-157.compute-1.amazonaws.com:9000/api/v1/users', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (getData.data.code === 200) {
        this.setState({
          callname: getData.data.data.callname
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  _onPress = () => {
    this.props.navigation.navigate('DrawerOpen');
  };
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
  _theory8 = async () => {
    this.props.navigation.navigate('Theory8');
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
  _Quiz1 = () => {
    this.props.navigation.navigate('Quiz1');
  };
  _Quiz2 = () => {
    this.props.navigation.navigate('Quiz2');
  };
  _Quiz3 = () => {
    this.props.navigation.navigate('Quiz3');
  };
  lesson = async () => {
    this.props.navigation.navigate('Lesson');
  };
  quiz = async () => {
    this.props.navigation.navigate('Quiz');
  };

  render() {
    return (
      <Container style={styles.container}>
        <TouchableOpacity style={styles.ButtonRight} onPress={this._onPress}>
          <SvgRightList />
        </TouchableOpacity>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainerVertical}
          style={styles.scrollView}
        >
          <View style={styles.body}>
            <Title style={styles.title}>Hai, {this.state.callname}</Title>
            <Text style={styles.content}>Mau belajar tentang apa Hari ini?</Text>
          </View>

          <Text style={styles.subtitle}>Video</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
            style={styles.History}
          >
            <View style={styles.row}>
              <TouchableOpacity onPress={this._video1} style={styles.left}>
                <Card transparent style={styles.card}>
                  <CardItem cardBody style={styles.cardImage}>
                    <Image source={IMAGES.thumbnail4} resizeMode="contain" style={styles.gambar} />
                  </CardItem>
                  <CardItem style={styles.cardItem}>
                    <Body>
                      <Text style={styles.titleBook}>Kisah Nabi Ibrahim dan Nabi Ismail</Text>
                    </Body>
                  </CardItem>
                </Card>
              </TouchableOpacity>
              <TouchableOpacity onPress={this._video2} style={styles.left}>
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
              <TouchableOpacity style={styles.left} onPress={this._video3}>
                <Card transparent style={styles.card}>
                  <CardItem cardBody style={styles.cardImage}>
                    <Image source={IMAGES.thumbnail5} resizeMode="contain" style={styles.gambar} />
                  </CardItem>
                  <CardItem style={styles.cardItem}>
                    <Body>
                      <Text style={styles.titleBook}>Waktu Terbaik Menyembelih Hewan Qurban</Text>
                    </Body>
                  </CardItem>
                </Card>
              </TouchableOpacity>
              <TouchableOpacity onPress={this._video4} style={styles.left}>
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
              <TouchableOpacity style={styles.left} onPress={this.lesson}>
                <Svgmore />
              </TouchableOpacity>
            </View>
          </ScrollView>

          <Text style={styles.subtitle}>Materi</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
            style={styles.History}
          >
            <View style={styles.row}>
              <TouchableOpacity onPress={this._theory1} style={styles.left}>
                <Card transparent style={styles.card}>
                  <CardItem cardBody style={styles.cardImage}>
                    <Image source={IMAGES.thumbnail1} resizeMode="contain" style={styles.gambar} />
                  </CardItem>
                  <CardItem style={styles.cardItem}>
                    <Body>
                      <Text style={styles.titleBook}>Dasar Hari Raya Idul Adha</Text>
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
                      <Text style={styles.titleBook}>Tata Cara Shalat Idul Adha</Text>
                    </Body>
                  </CardItem>
                </Card>
              </TouchableOpacity>
              <TouchableOpacity style={styles.left} onPress={this._theory3}>
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
              <TouchableOpacity style={styles.left}>
                <Card transparent style={styles.card}>
                  <CardItem cardBody style={styles.cardImage}>
                    <Image source={IMAGES.thumbnail5} resizeMode="contain" style={styles.gambar} />
                  </CardItem>
                  <CardItem style={styles.cardItem}>
                    <Body>
                      <Text style={styles.titleBook}>Hewan Untuk Qurban</Text>
                    </Body>
                  </CardItem>
                </Card>
              </TouchableOpacity>
              <TouchableOpacity style={styles.left} onPress={this.lesson}>
                <Svgmore />
              </TouchableOpacity>
            </View>
          </ScrollView>

          <Text style={styles.subtitle}>Quiz</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
            style={styles.ScrollMateri}
          >
            <View style={styles.row}>
              <TouchableOpacity onPress={this._Quiz1} style={styles.left}>
                <Card transparent style={styles.card}>
                  <CardItem cardBody style={styles.cardImage}>
                    <Image source={IMAGES.materiImage} resizeMode="contain" style={styles.gambar} />
                  </CardItem>
                  <CardItem style={styles.cardItem}>
                    <Body>
                      <Text style={styles.titleBook}>Latihan Soal Idul Fitri</Text>
                      <Text style={styles.page}>15 Soal</Text>
                    </Body>
                  </CardItem>
                </Card>
              </TouchableOpacity>
              <TouchableOpacity style={styles.left} onPress={this._Quiz2}>
                <Card transparent style={styles.card}>
                  <CardItem cardBody style={styles.cardImage}>
                    <Image source={IMAGES.materiImage} resizeMode="contain" style={styles.gambar} />
                  </CardItem>
                  <CardItem style={styles.cardItem}>
                    <Body>
                      <Text style={styles.titleBook}>Latihan Soal Idul Adha</Text>
                      <Text style={styles.page}>10 Soal</Text>
                    </Body>
                  </CardItem>
                </Card>
              </TouchableOpacity>
              <TouchableOpacity style={styles.left} onPress={this._Quiz3}>
                <Card transparent style={styles.card}>
                  <CardItem cardBody style={styles.cardImage}>
                    <Image source={IMAGES.materiImage} resizeMode="contain" style={styles.gambar} />
                  </CardItem>
                  <CardItem style={styles.cardItem}>
                    <Body>
                      <Text style={styles.titleBook}>Latihan Ulangan</Text>
                      <Text style={styles.page}>25 Soal</Text>
                    </Body>
                  </CardItem>
                </Card>
              </TouchableOpacity>
              <TouchableOpacity style={styles.left} onPress={this.quiz}>
                <Svgmore />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ScrollView>
      </Container>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
