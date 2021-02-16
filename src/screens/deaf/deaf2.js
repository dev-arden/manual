import React from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import Buttonlist from '../../components/Buttonlist';
import Exwithhead from '../../components/Exwithhead';
import ExImage from '../../components/ExImage';
import Titledeaf from '../../components/Titledeaf';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
/**
 * 이제 의향서를 등록하고자 합니다. 
 * 혹 더 궁금한 사항 있으신가요?
 * 작성된 의향서는 국립연명의료관리기관의 연명의료정보처리시스템에 저장이 됩니다. 
 * 그리고 지금까지 나누었던 상담내용 및 모든 정보는 저장되거나 유출되지 않습니다. 
 */

const deaf2 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titledeaf
        title="청력저하 고령자"
      />
      <ScrollView style={{flex:2}}>
        <Exwithhead 
          title="유형"
          text="노화로 인한 청력저하, 노인성 난청"
        />
        <Exwithhead 
          title="상태"
          text="노화로 청력이 말소리가 정확하게 들리지 않아 불편한 상태."
        />
        <View style={styles.exliststyle}>
          <View style = {styles.exviewstyle}>
            <FontAwesome name="square" size={17} color="black" style={{alignSelf:'center'}}/>
            <Text style={styles.extitlestyle}>
              특징
            </Text>
          </View>
          <Text style={styles.extextstyle}>
          - 노화로 인해 청력이 떨어진 상태로, 말소리가 정확하게 들리지 않아 불편하다. 특히 고음영역이 잘 들리지 않고 소리가 나는 쪽 방향을 감지하기 어렵다.
          </Text> 
          <Text style={styles.extextstyle}>
          - 상대방 말이 빠르거나, 익숙하지 않은 단어라면 알아듣기 더욱 어렵다.
          </Text>
          <Text style={styles.extextstyle}>
          - 노인성 난청 시 상대방의 말소리가 중얼거리는 것처럼 들리고, 소리가 이중으로 들리며, 소리 자극이 없는데도 귀에서 소음이 발생하는 것으로 느끼는 이명이 있다.
          </Text>
          <Text style={styles.extextstyle}>
          -  노인성 난청 시 여성과 아이의 말소리 같은 고주파 영역의 소리와 ‘ᄉ,ᄎ,ᄑ,ᄐ,ᄏ’ 발음이 들어간 ‘사탕’같은 단어를 잘 듣지 못한다.
          </Text>
          <Text style={styles.extextstyle}>
          - 보청기를 착용한 경우라도, 말을 알아듣지 못하고 혼란스러워 보일 수 있다. 보청기가 제대로 작동되는지 확인하고, 만약 작동하지 않는다면 건전지를 교체하여 작동시킬 수 있는지 확인한다.
          </Text>  
        </View>
      </ScrollView> 
      <Buttonlist 
        title = "다음"
        routename="deaf3"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textstyle:{
    fontSize:20,
    color:'black',
    paddingHorizontal: 10,
    flex:1,
    margin : 5,
    //alignSelf: 'center'
    textAlign: 'justify'
  },
  viewstyle:{
    //borderWidth:1,
    backgroundColor: 'white',
    marginHorizontal : 20,
    marginVertical : 15,
  },
  textstyle:{
    fontSize:20,
    color:'black',
    paddingHorizontal: 10,
    flex:1,
    margin : 5,
    //alignSelf: 'center'
    textAlign: 'justify'
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
    flexDirection : 'row',
    justifyContent:'space-around'
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
}
});

export default deaf2;