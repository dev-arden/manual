import React from 'react';
import {Text, View, StyleSheet, Image,ScrollView} from 'react-native';
import Buttonlist from "../../components/Buttonlist";
import { SafeAreaView } from 'react-native';
import Titleblind2 from '../../components/Titleblind2';
//import Buttonlist from '../components/Buttonlist';

const blindtalkhana3 = ({}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titleblind2 
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
              5. 체외생명유지술
            </Text>
          </View>
          <Image 
            source={require('../../../assets/counseltalkhana3.png')}
            style={{height : 220, width : 300, resizeMode:'contain', alignSelf:'center'}}
          />
          <Text style={styles.extextstyle}>
          체외생명유지술은 정맥의 피를 뽑아 기계를 통해 산소를 보충하고 이산화탄소를 제거한 다음 다시 혈관으로 계속해서 주입하는 방법입니다.
          </Text> 
          <Text style={styles.extextstyle}>
          부작용으로 다리가 창백해지거나 파래지고, 극심한 통증이 생기거나, 혈관 내 공기방울이 발생하거나, 피떡이 만들어져 몸이 붓고 통증이 발생할 수 있습니다.
          </Text>  
        </View>    
      </ScrollView>
      <Buttonlist 
        title="다음"
        routename="blindtalkhana4"
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

export default blindtalkhana3;