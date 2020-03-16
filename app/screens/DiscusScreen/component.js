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
import { View, Alert, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Text, Container, Content, Left, Right } from 'native-base';
import PropTypes from 'prop-types';
import styles from './styles';
import { ENDPOINT } from '../../configs';
import ASelect from '../../../assets/svgs/ASelect';
import BSelect from '../../../assets/svgs/BSelect';
import CSelect from '../../../assets/svgs/CSelect';
import DSelect from '../../../assets/svgs/DSelect';
import ADiscuss from '../../../assets/svgs/ADiscuss';
import BDiscuss from '../../../assets/svgs/BDiscuss';
import CDiscuss from '../../../assets/svgs/CDiscuss';
import DDiscuss from '../../../assets/svgs/DDiscuss';
import Back from '../../../assets/svgs/Back';
import { COLOR_FONT_PRIMARY_MAIN, COLOR_WHITE } from '../../styles/';

export default class QuestionAnswer extends Component {
  constructor(props) {
        super(props);
        this.state = {
          data: [],
          count: 0,
          isFinish: false,
          modalVisible: false,
          myAnswer: '',
          right: [],
          wrong: []
        };
        this.setState({ modalVisible: !this.state.modalVisible });
      }

    componentDidMount() {
      this._getparams();  
    }

  _back = async () => {
  this.props.navigation.navigate('Quiz');
  };

  setAnswer(data){
    this.setState({
      myAnswer: data
    })
  }

  _getparams = async () => {
    const result = await ENDPOINT.getSoalById("adha");
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
            {this.state.data[this.state.count].jawaban==0?(
                <TouchableOpacity >
                  <View style ={styles.viewAnswer}>
                    <ADiscuss />
                    <Text style={styles.textAnswerCorrect}>
                     {this.state.data[this.state.count].pilihan[0]}
                    </Text>
                  </View>
                </TouchableOpacity>
                ):(
                  <TouchableOpacity >
                  <View style ={styles.viewAnswer}>
                    <ASelect />
                      <Text style = {styles.textAnswer}>
                      {this.state.data[this.state.count].pilihan[0]}
                      </Text>
                    </View>
                </TouchableOpacity>)}

                {this.state.data[this.state.count].jawaban==1?(
                <TouchableOpacity >
                  <View style = { styles.viewAnswer}>
                  <BDiscuss />
                    <Text
                      style={styles.textAnswerCorrect}>
                     {this.state.data[this.state.count].pilihan[1]}
                    </Text>
                  </View>
                </TouchableOpacity>
                ):(
                  <TouchableOpacity >
                   <View style = { styles.viewAnswer}>
                  <BSelect />
                    <Text style = {styles.textAnswer}>
                     {this.state.data[this.state.count].pilihan[1]}
                    </Text>
                  </View>
                </TouchableOpacity>)}

                {this.state.data[this.state.count].jawaban==2?(
                <TouchableOpacity >
                  <View style = { styles.viewAnswer}>
                  <CDiscuss />
                    <Text style = {styles.textAnswerCorrect}>
                     {this.state.data[this.state.count].pilihan[2]}
                    </Text>
                  </View>
                </TouchableOpacity>
                ):(
                  <TouchableOpacity >
                   <View style = { styles.viewAnswer}>
                  <CSelect />
                    <Text style = { styles.textAnswer}>
                     {this.state.data[this.state.count].pilihan[2]}
                    </Text>
                  </View>
                </TouchableOpacity>)}

                {this.state.data[this.state.count].jawaban==3?(
                <TouchableOpacity >
                   <View style = { styles.viewAnswer}>
                  <DDiscuss />
                    <Text style = { styles .textAnswerCorrect}>
                     {this.state.data[this.state.count].pilihan[3]}
                    </Text>
                  </View>
                </TouchableOpacity>
                ):(
                  <TouchableOpacity >
                  <View style = { styles.viewAnswer}>
                  <DSelect />
                    <Text style = {styles.textAnswer}>
                     {this.state.data[this.state.count].pilihan[3]}
                    </Text>
                  </View>
                </TouchableOpacity>)}

                <View style={{marginTop: 20}}>
                    <Text style={styles.pembahasan}>Pembahasan</Text>
                </View>
                <View>
                    <Text style={styles.pembahasan}>{this.state.data[this.state.count].pembahasan}</Text>
                </View>
            </View>
            </View>
          </View>
      );
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
    } else if (this.state.data[this.state.count].pilihan[0] === this.state.myAnswer) {
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
  }

  prev() {
    if (this.state.count ) {
      this.setState({ count: this.state.count - 1 });
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
            <Text style={{color:COLOR_FONT_PRIMARY_MAIN}}>Prev</Text>
          </Left>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.next.bind(this)} style={styles.buttonNextStyle}>
          <Right>
            {this.state.count + 1 === this.state.data.length ? (<Text style={{color: COLOR_WHITE}}>Done</Text>) : (<Text style={{color: COLOR_WHITE}}>Next</Text>) }
          </Right>
        </TouchableOpacity>
      </View>
    );
  }
  render() {
    return (
      <Container  style={{backgroundColor: '#F3F5F9'}}>
        <View style={{flexDirection: 'row', padding: 20 }}>
        <TouchableOpacity onPress={this._back}>
          <Back />
        </TouchableOpacity>
          <Text style = {{paddingLeft: 20}}>
            Pertanyaan {this.state.count + 1} / 10
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
