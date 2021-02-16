import React from 'react';
import {Text, View, StyleSheet, Image,ScrollView} from 'react-native';
import Buttonlist from "../../components/Buttonlist";
import { SafeAreaView } from 'react-native';
import Titlebrain2 from '../../components/Titlebrain2';
//import Buttonlist from '../components/Buttonlist';

const braintalkhana2 = ({}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titlebrain2 
        title="6단계"
        text="사전연명의료의향서 작성을 위한 항목 설명"
      />
      <ScrollView style={{flex:2}}>
        <View style={styles.exliststyle}>
          <Text style={{fontSize:21,fontWeight:'bold'}}>
          ① 연명의료의 시행 방법 및 연명의료중단 등 결정에 관한 사항
          </Text>
        </View>
        <View style={styles.picliststyle}>
          <View style = {styles.exviewstyle}>
            <Text style={styles.extitlestyle}>
              4. 인공호흡기
            </Text>
          </View>
          <Image 
            source={require('../../../assets/counseltalkhana2.png')}
            style={{height : 220, width : 300, resizeMode:'contain', alignSelf:'center'}}
          />
          <Text style={styles.extextstyle}>
          인공호흡기는 질환으로 인하여 환자의 호흡이 불안정하고 폐 기능이 상실될 때, 입으로 넣은 기관 내 튜브에 연결하여 호흡을 도와주는 장치입니다.
          </Text> 
          <Text style={styles.extextstyle}>
          하지만 임종과정의 환자에게 인공호흡기로 호흡을 유지시키는 것은 치료효과 없이 환자의 임종과정만을 연장하는 연명의료가 됩니다.
          </Text>
          <Text style={styles.extextstyle}>
          튜브를 입으로 넣거나 목 부위를 절개해서 넣는 과정에서 치아나 기도의 손상 등이 발생할 수 있습니다.
          </Text>   
        </View>    
      </ScrollView>
      <Buttonlist 
        title="다음"
        routename="braintalkhana3"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  picliststyle:{
    marginHorizontal : 20,
    marginVertical : 15,
    borderWidth : 5,
    borderColor : '#FAE7D3',
    color : 'white',
    backgroundColor : 'white',
    // paddingVertical: 30,
    // paddingHorizontal : 20,
    padding : 10,
    borderRadius: 15,
  },
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

export default braintalkhana2;