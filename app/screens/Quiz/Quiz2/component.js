/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable import/default */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable react-native/no-raw-text */
/* eslint-disable react/sort-comp */
/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react';
import { View, BackHandler, Alert, TouchableOpacity, Modal, ImageBackground, ActivityIndicator } from 'react-native';
import { Text, Container, Content, Left, Right } from 'native-base';
import PropTypes from 'prop-types';
import styles from './styles';
import { ENDPOINT } from '../../../configs';
import { scale } from '../../../utils/scaling';
import IMAGES from '../../../configs/images';
import ASelect from '../../../../assets/svgs/ASelect';
import BSelect from '../../../../assets/svgs/BSelect';
import CSelect from '../../../../assets/svgs/CSelect';
import DSelect from '../../../../assets/svgs/DSelect';
import ACorrect from '../../../../assets/svgs/ACorrect';
import BCorrect from '../../../../assets/svgs/BCorrect';
import CCorrect from '../../../../assets/svgs/CCorrect';
import DCorrect from '../../../../assets/svgs/DCorrect';
import Back from '../../../../assets/svgs/Back';
import { COLOR_WHITE } from '../../../styles/';

export default class QuestionAnswer extends Component {
  constructor(props) {
        super(props);
        this.state = {
          data: [],
          count: 0,
          isFinish: false,
          modalVisible: false,
          myAnswer: '',
          jawaban: [],
          right: [],
          wrong: [],
          score : 0
        };
        this.setState({ modalVisible: !this.state.modalVisible });
      }

    componentDidMount() {
      this._getparams();  
    }

  setAnswer(data){
    const newValue = this.state.jawaban
    newValue[this.state.count] = data
    this.setState({
      myAnswer: data,
      jawaban: newValue
    })
  }

  _getparams = async () => {
    const result = await ENDPOINT.getSoalById("fitri");
    console.log(result)
      this.setState({
        data: result.data
    }); 
  };

  _onPress = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  }; 

  renderQuestion() {
      console.log (this.state.data)
      if(this.state.data.length ===0){
       return <ActivityIndicator/>
      }
      return (
        <View>
        <View>
          <View style={styles.gridCol}>
            <Text style={styles.gridTextvalue}>{this.state.data[this.state.count].soal}</Text>
          </View>
            <View style={styles.gridColAnswer}>
                <TouchableOpacity  onPress={() => this.setAnswer(this.state.data[this.state.count].pilihan[0])}>
                <View style={styles.viewAnswer}>
                    {this.state.myAnswer===this.state.data[this.state.count].pilihan[0]?( <ACorrect />):( <ASelect/>)}
                    <Text style={styles.fontAnswer}>
                     {this.state.data[this.state.count].pilihan[0]} 
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => this.setAnswer(this.state.data[this.state.count].pilihan[1])}>
                <View style={styles.viewAnswer}>
                    {this.state.myAnswer===this.state.data[this.state.count].pilihan[1]?( <BCorrect />):( <BSelect/>)}
                    <Text style={styles.fontAnswer}>
                     {this.state.data[this.state.count].pilihan[1]} 
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => this.setAnswer(this.state.data[this.state.count].pilihan[2])}>
                  <View style={styles.viewAnswer}>
                    {this.state.myAnswer===this.state.data[this.state.count].pilihan[2]?( <CCorrect />):( <CSelect/>)}
                    <Text style={styles.fontAnswer}>
                     {this.state.data[this.state.count].pilihan[2]} 
                    </Text>
                  </View>
                </TouchableOpacity>
             
                <TouchableOpacity  onPress={() => this.setAnswer(this.state.data[this.state.count].pilihan[3])}>
                  <View style={styles.viewAnswer}>
                    {this.state.myAnswer===this.state.data[this.state.count].pilihan[3]?( <DCorrect />):( <DSelect/>)}
                    <Text style={styles.fontAnswer}>
                      {this.state.data[this.state.count].pilihan[3]} 
                    </Text>
                  </View>
                </TouchableOpacity>
            </View>
            </View>

            {this.state.score > 60 ?(
              <Modal
              transparent
              visible={this.state.isFinish}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
              }}>
              <View style={styles.modal}>
                <ImageBackground source={IMAGES.modalImage} style={styles.cardModal}>
                  <View style={{ alignItems: 'center', paddingTop: 55}}>
                    <Text style={{ fontSize: 50, fontWeight: 'bold', color: '#14D98C' }}>{this.state.score}</Text>
                  </View>
                  <View style={{ paddingTop: 30 }}>
                    <Text style={styles.fontCongrat}>Selamat</Text>
                    <Text style={styles.fontCaption}>Anda mendapatkan Nilai Yang Cukup Bagus</Text>
                  </View>
                  <TouchableOpacity style={{alignItems: 'flex-end', justifyContent:'flex-end', paddingTop: 55  }} onPress={this.discus}>
                    <View  style={styles.viewDiscuss}>
                      <Text style={styles.pembahasan}>Pembahasan</Text>
                    </View>
                  </TouchableOpacity>
                </ImageBackground>
              </View>
            </Modal>
             ):(
            <Modal
              transparent
              visible={this.state.isFinish}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
              }}>
              <View style={styles.modal}>
                <ImageBackground source={IMAGES.modalImage2} style={styles.cardModal}>
                  <View style={{ alignItems: 'center', paddingTop: 55}}>
                    <Text style={{ fontSize: 50, fontWeight: 'bold', color: '#FA7272' }}>{this.state.score}</Text>
                  </View>
                  <View style={{ paddingTop: 30 }}>
                    <Text style={styles.fontCongrat}>Upsss</Text>
                    <Text  style={styles.fontCaption}>Anda mendapatkan Nilai Yang Kurang, dan Perlu belajar lagi!</Text>
                  </View>
                  <TouchableOpacity style={{alignItems: 'flex-end', justifyContent:'flex-end', paddingTop: 55  }} onPress={this.discus}>
                    <View  style={{
                        width: scale(155),
                        height: scale(50),
                        backgroundColor: '#59DBF8',
                        borderColor: '#59DBF8',
                        borderWidth: 2,
                        borderRadius: 5,
                        padding: 4,
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                      <Text style={styles.pembahasan}>Pembahasan</Text>
                    </View>
                  </TouchableOpacity>
                </ImageBackground>
              </View>
            </Modal>
            )}
          </View>
      );
  }

  discus = async () => {
    this.setState({
      isFinish: !this.state.isFinish
    })
    this.props.navigation.navigate('DisscusFitri');
  };

  _onPressBack = async () =>   {
    const { goBack } = this.props.navigation;
    goBack();
  }

  exitApp() {
    BackHandler.exitApp();
  }

  next() {
    if (this.state.count + 1 !== this.state.data.length) {
      if (this.state.data[this.state.count].pilihan[0] === this.state.myAnswer) {
        if(this.state.data[this.state.count].jawaban == 0){
          this.state.right.push(1)
        }else {
          this.state.wrong.push(0)
        }
      } else if (this.state.data[this.state.count].pilihan[1] === this.state.myAnswer) {
          if(this.state.data[this.state.count].jawaban == 1){
            this.state.right.push(1)
          }else {
            this.state.wrong.push(0)
          }
        } else if (this.state.data[this.state.count].pilihan[2] === this.state.myAnswer) {
          if(this.state.data[this.state.count].jawaban == 2){
            this.state.right.push(1)
          }else {
            this.state.wrong.push(0)
          }
        } else if (this.state.data[this.state.count].pilihan[3] === this.state.myAnswer) {
          if(this.state.data[this.state.count].jawaban == 3){
            this.state.right.push(1)
          }else {
            this.state.wrong.push(0)
          }
        }
      this.setState({ count: this.state.count + 1, isFinish: false });
    } else {
      if (this.state.data[this.state.count].pilihan[0] === this.state.myAnswer) {
        if(this.state.data[this.state.count].jawaban == 0){
          this.state.right.push(1)
        }else {
          this.state.wrong.push(0)
        }
      } else if (this.state.data[this.state.count].pilihan[1] === this.state.myAnswer) {
          if(this.state.data[this.state.count].jawaban ==1){
            this.state.right.push(1)
          }else {
            this.state.wrong.push(0)
          }
        } else if (this.state.data[this.state.count].pilihan[2] === this.state.myAnswer) {
          if(this.state.data[this.state.count].jawaban ==2){
            this.state.right.push(1)
          }else {
            this.state.wrong.push(0)
          }
        } else if (this.state.data[this.state.count].pilihan[3] === this.state.myAnswer) {
          if(this.state.data[this.state.count].jawaban ==3){
            this.state.right.push(1)
          }else {
            this.state.wrong.push(0)
          }
        }
        const satuan = 100 / (5 + this.state.data.length );
        const score = this.state.right.length * satuan
      this.setState({ isFinish: true, score  });
    }
    if(this.state.jawaban[this.state.count + 1] === undefined){
      this.setState({ myAnswer: ''})
    } else {
      this.setState({ 
        myAnswer: this.state.jawaban[this.state.count + 1]
      })
    }
    const newValue = this.state.jawaban
    newValue[this.state.count] = this.state.myAnswer
    this.setState({ jawaban: newValue})
    console.log('jawaban = ',this.state.jawaban);
    console.log('index = ',this.state.count);
    console.log('answer = ',this.state.myAnswer);
  }

  prev() {
    if (this.state.count ) {
      this.setState({ 
        count: this.state.count - 1,
        myAnswer: this.state.jawaban[this.state.count - 1]
      });
    } else {
      this._threeOptionAlertHandler({ alert : true})
    }
  }

  _threeOptionAlertHandler=()=>{
    Alert.alert(
      'Hello',
      'Semangat Belajarnyaaa',
      [
        {text: 'Oke', onPress: () => console.log('Yes Pressed')}
      ],
      { cancelable: false }
    );
  }

  renderButton() {
    return (
      <View style={styles.buttonStyle}>
        <TouchableOpacity  onPress={this.prev.bind(this)} style={styles.buttonPrevStyle}>
          <Left>
            <Text style={styles.fontButtonPrev}>Prev</Text>
          </Left>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.next.bind(this)} style={styles.buttonNextStyle}>
          <Right>
            {this.state.count + 1 === this.state.data.length ? (<Text style={{color:COLOR_WHITE}}>Done</Text>) : (<Text style={{color: COLOR_WHITE}}>Next</Text>) }
          </Right>
        </TouchableOpacity>
      </View>
    );
  }
  render() {
    return (
      <Container  style={{backgroundColor: '#F3F5F9'}}>
      <View style={{flexDirection: 'row', padding: 20 }}>
        <TouchableOpacity onPress={this._onPressBack}>
          <Back />
        </TouchableOpacity>
          <Text style = {styles.textquestion}>
            Pertanyaan {this.state.count + 1} / 15
          </Text>
        </View>
        <Content>
          {this.renderQuestion()}
          {this.state.isFinish === false ? this.renderButton() : null}
        </Content>
      </Container>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
