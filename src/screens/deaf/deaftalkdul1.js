import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Buttonlist from "../../components/Buttonlist";
import { SafeAreaView } from 'react-native';
import Titledeaf2 from '../../components/Titledeaf2';
//import Buttonlist from '../components/Buttonlist';
import ExonlyHead from '../../components/ExonlyHead';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Textlist from '../../components/Textlist';

const deaftalkdul1 = ({}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titledeaf2 
        title="6단계"
        text="사전연명의료의향서 작성을 위한 항목 설명"
      />
      <ScrollView style={{flex:2}}>
        <View style={styles.exliststyle}>
          <Text style={{fontSize:21,fontWeight:'bold'}}>
          ② 호스피스의 선택 및 이용에 관한 사항
          </Text>
        </View>
        <ExonlyHead 
          title="호스피스 이용 의향"
        />
        <View style={styles.talkliststyle}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Fontisto name="quote-a-right" size={20}/>
            <Fontisto name="quote-a-left" size={20}/>
          </View>
          <Text style={styles.talktextstyle}>
          사전연명의료의향서 작성 시 호스피스 이용에 관한 의향을 미리 밝혀두는 것입니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          호스피스란, 호스피스 대상 환자와 그 가족에게 통증과 증상의 완화 등을 포함한 신체적·심리사회적·영적 영역에 대한 종합적인 평가와 치료를 목적으로 하는 의료서비스로 입원형·자문형·가정형 호스피스가 있습니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          호스피스 대상 환자는 암, 후천성면역결핍증, 만성 폐쇄성 호흡기질환, 만성 간경화를 앓고 있는 자로서 담당의사 및 해당 분야 전문의 1명이 말기환자로 진단한 경우 또는 임종과정에 있는 환자로 판단을 받은 경우입니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          자세한 내용은 중앙호스피스센터 홈페이지(www.hospice.go.kr)나 국가암정보센터(1577-8899)로 문의하시면 됩니다.
          </Text>
        </View> 
        <Textlist 
          text="• 호스피스의 의미와 이용 대상 환자, 호스피스 서비스 제공 기관 및 신청 방법 등에 관한 사항을 개괄적으로 설명하고, 이용 의향을 표시하도록 안내한다."
        /> 
      </ScrollView>
      <Buttonlist 
        title="다음"
        routename="deaftalkdul2"
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
  
  extitlestyle:{
    alignSelf : 'center',
    //marginLeft : 10,
    fontSize:20,
    fontWeight : 'bold',
    marginLeft : 10,
    // borderColor : 'black',
    // borderWidth : 1
  },
  exviewstyle: {
    flexDirection : 'row',
    marginBottom : 10,
    alignContent : 'center',
    // borderColor : 'black',
    // borderWidth : 1
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
  viewstyle:{
    marginHorizontal : 20,
    //marginBottom : 20,
    marginVertical : 15,
    fontSize : 20,
    borderWidth : 1,
    borderColor : 'white',
    color : 'white',
    backgroundColor : 'white',
    padding : 10,
    //flexDirection : 'row',
    justifyContent:'space-around',
 },
});

export default deaftalkdul1;