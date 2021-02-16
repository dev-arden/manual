import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Buttonlist from "../../components/Buttonlist";
import { SafeAreaView } from 'react-native';
import Titledeaf2 from '../../components/Titledeaf2';
//import Buttonlist from '../components/Buttonlist';
import ExonlyHead from '../../components/ExonlyHead';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Textlist from '../../components/Textlist';

const deafwrite2 = ({}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titledeaf2 
        title="7단계"
        text="사전연명의료의향서 작성"
      />
      <ScrollView style={{flex:2}}>
        <ExonlyHead 
          title="작성 후 확인과 완료"
        />
        <View style={styles.talkliststyle}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Fontisto name="quote-a-right" size={20}/>
            <Fontisto name="quote-a-left" size={20}/>
          </View>
          <Text style={styles.talktextstyle}>
          내용을 잘 작성하셨는지 저와 함께 확인하겠습니다.
          </Text> 
          <Text style={styles.plustextstyle}>
          (작성자 성명부터 작성일, 작성자 서명까지 꼼꼼하게 함께 확인함)
          </Text>
          <Text style={styles.talktextstyle}>
          사전연명의료의향서 작성이 완료되었습니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          이후 궁금한 점이 있으시면 저희 등록기관이나 국립연명의료관리기관으로 연락주시면 친절하게 안내받으실 수 있습니다.
          </Text> 
        </View> 
        <Textlist 
          text="• 상담자는 작성된 서식에 누락사항, 오기재, 확인 불가 내용이 없는지 다시 한번 확인한다."
        />
      </ScrollView>
      <Buttonlist 
        title="다음"
        routename="deafwrite3"
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
  extextstyle2: {
    fontSize:20,
    color:'black',
    //paddingHorizontal: 10,
    flex:1,
    margin : 5,
    //alignSelf: 'center'
    textAlign: 'auto',
    lineHeight:30,
    fontWeight:'bold'
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
    color:'#2D68A0',
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
    color:'#2D68A0',
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

export default deafwrite2;