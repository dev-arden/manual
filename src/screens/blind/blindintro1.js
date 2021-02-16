import React from 'react';
import {Text, View, StyleSheet, FlatList, Image,ScrollView} from 'react-native';
import Buttonlist from "../../components/Buttonlist";

import { SafeAreaView } from 'react-native';

import Titleblind2 from '../../components/Titleblind2';

import ExonlyHead from '../../components/ExonlyHead';

import Fontisto from 'react-native-vector-icons/Fontisto';


const blindintro1 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titleblind2 
        title="3단계"
        text="사전연명의료의향서 소개"
      />
      <ScrollView style={{flex:2}}>
          <ExonlyHead 
            title="연명의료결정제도 소개"
          />
        <View style={styles.talkliststyle}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Fontisto name="quote-a-right" size={20}/>
            <Fontisto name="quote-a-left" size={20}/>
          </View>
          <Text style={styles.talktextstyle}>
          먼저 연명의료결정제도와 사전연명의료의향서를 간단히 소개하겠습니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          연명의료결정제도는 더 이상의 치료방법이 없고 죽음에 임박하게 되는 임종과정에 있는 환자에게 임종과정의 기간만을 연장하는 연명의료를 시행하지 않거나 중단할 수 있는 선택의 기회를 제공하여 남은 삶을 존엄하게 마무리할 수 있도록 지원하기 위해 마련된 제도입니다.
          </Text> 
        </View>
      </ScrollView>
      <Buttonlist
        title="다음"
        routename="blindintro2"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  exliststyle:{
    marginHorizontal : 20,
    marginVertical : 15,
    borderWidth : 1,
    borderColor : 'white',
    color : 'white',
    backgroundColor : 'white',
    // paddingVertical: 30,
    // paddingHorizontal : 20,
    padding : 10
  },
  extextstyle: {
    fontSize:20,
    color:'black',
    //paddingHorizontal: 10,
    flex:1,
    margin : 5,
    //alignSelf: 'center'
    textAlign: 'auto',
    lineHeight:30
  },
  plustextstyle: {
    fontSize:20,
    color:'#D97F48',
    //paddingHorizontal: 10,
    flex:1,
    margin : 5,
    //alignSelf: 'center'
    textAlign: 'auto',
    lineHeight:30
  },
  talkliststyle:{
    marginHorizontal : 20,
    marginVertical : 15,
    borderWidth : 1,
    borderColor : 'grey',
    //color : '#DAD9DB',
    backgroundColor : '#ECECEB',
    // paddingVertical: 30,
    // paddingHorizontal : 20,
    padding : 10,
    borderRadius : 15
  },
  talkheadstyle: {
    fontSize:20,
    color:'#D97F48',
    //paddingHorizontal: 10,
    flex:1,
    margin : 5,
    //alignSelf: 'center'
    textAlign: 'auto',
    lineHeight:30,
    fontWeight:'bold'
  },
  talktextstyle: {
    fontSize:22,
    color:'black',
    //paddingHorizontal: 10,
    flex:1,
    margin : 5,
    //alignSelf: 'center'
    textAlign: 'auto',
    lineHeight:30,
    fontWeight:'bold'
  },
});

export default blindintro1;