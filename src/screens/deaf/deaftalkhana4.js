import React from 'react';
import {Text, View, StyleSheet, Image,ScrollView} from 'react-native';
import Buttonlist from "../../components/Buttonlist";
import { SafeAreaView } from 'react-native';
import Titlewdeaf2 from '../../components/Titledeaf2';
//import Buttonlist from '../components/Buttonlist';

const deaftalkhana4 = ({}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titlewdeaf2 
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
              6. 수혈
            </Text>
          </View>
          <Image 
            source={require('../../../assets/counseltalkhana4.png')}
            style={{height : 220, width : 300, resizeMode:'contain', alignSelf:'center'}}
          />
          <Image 
            source={require('../../../assets/counseltalkhana42.png')}
            style={{height : 220, width : 300, resizeMode:'contain', alignSelf:'center'}}
          />
          <Text style={styles.extextstyle}>
          중증 환자는 적절한 치료와 회복을 위해 적혈구 혈소판 등 다양한 혈액성분의 수혈이 필요할 수 있습니다.
          </Text> 
          <Text style={styles.extextstyle}>
          하지만 회복가능성이 없는 임종과정의 환자에게 수혈을 하는 것은 가족들의 바람과 달리 환자에게 아무런 도움이 되지 않는 경우가 일반적입니다.
          </Text>  
        </View>    
      </ScrollView>
      <Buttonlist 
        title="다음"
        routename="deaftalkhana5"
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

export default deaftalkhana4;