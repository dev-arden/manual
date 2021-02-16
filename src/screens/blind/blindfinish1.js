import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Buttonlist from "../../components/Buttonlist";
import { SafeAreaView } from 'react-native';
import Titleblind2 from '../../components/Titleblind2';
//import Buttonlist from '../components/Buttonlist';
import Fontisto from 'react-native-vector-icons/Fontisto';

const counselfinish1 = ({}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titleblind2 
        title="10단계"
        text="사전연명의료의향서 작성 완료 안내"
      />
      <ScrollView style={{flex:2}}>
        <View style={styles.talkliststyle}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Fontisto name="quote-a-right" size={20}/>
            <Fontisto name="quote-a-left" size={20}/>
          </View>
          <Text style={styles.talktextstyle}>
          이제 사전연명의료의향서 작성과 등록의 모든 과정이 완료되었습니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          등록카드 발급을 신청하신 경우, 작성자님께서 요청하신 주소지로 2개월 이내 사전연명의료의향서 등록카드가 우편 배송됩니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          귀가하신 후 궁금한 점이 있으시면 저희 등록기관이나
          </Text> 
          <Text style={styles.talktextstyle}>
          국립연명의료관리기관(1855-0075 수신자부담 1422-25)로 연락해주시기 바랍니다.
          </Text>
        </View>         
      </ScrollView>
      <Buttonlist 
        routename="counseltype"
        title="완료"
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

export default counselfinish1;