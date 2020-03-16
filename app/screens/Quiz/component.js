import React from 'react';
import { Image, View, TouchableOpacity, ScrollView } from 'react-native';
import { Container, Content, Card, CardItem, Text, Body } from 'native-base';
import PropTypes from 'prop-types';
import styles from './styles';
import IMAGES from '../../configs/images';
import SvgRightList from '../../../assets/svgs/RightLIst';

export default class Component extends React.Component {
  _onPress = () => {
    this.props.navigation.navigate('DrawerOpen');
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
  render() {
    return (
      <Container style={styles.container}>
        <TouchableOpacity style={styles.ButtonRight} onPress={this._onPress}>
          <SvgRightList />
        </TouchableOpacity>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
          style={styles.body}
        >
          <Content>
            <Text style={styles.title}>Quiz</Text>

            <Text style={styles.subtitle}>Latihan Soal</Text>
            <View style={styles.row}>
              <TouchableOpacity onPress={this._Quiz1}>
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
              <TouchableOpacity style={styles.left} onPress={this._Quiz2}>
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
            </View>

            <Text style={styles.subtitle}>Ulangan</Text>
            <View style={styles.row}>
              <TouchableOpacity onPress={this._Quiz3}>
                <Card transparent style={styles.card}>
                  <CardItem cardBody style={styles.cardImage}>
                    <Image source={IMAGES.materiImage} resizeMode="contain" style={styles.gambar} />
                  </CardItem>
                  <CardItem style={styles.cardItem}>
                    <Body>
                      <Text style={styles.titleBook}>Latihan Ulangan </Text>
                      <Text style={styles.page}>25 Soal</Text>
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
