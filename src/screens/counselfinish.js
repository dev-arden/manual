import React from 'react';
import {StyleSheet, Image,View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../components/Textlist';
import Buttonlist from '../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../components/TitlewithoutImage';
import Imagelist from "../components/Imagelist";

/**
 등록증 발급을 신청하신 경우, 사전연명의료의향서 등록증이 작성자님께서 요청하신 주소지로 배송될 예정입니다. 
 배송기간은 2개월 정도 소요될 예정입니다. 
 귀가하신 후 궁금한 점이 있으시면 저희 등록기관이나 국립연명의료관리기관(1855-0075/수신자부담 1422-25)로 연락해주시기 바랍니다.
 */

const counselfinish = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="사전연명의료의향서 작성 완료"
      />
      <ScrollView style={{flex:2}}>
      <Imagelist 
          imageSource={require('../../assets/info.png')}
        />
        <Textlist 
          text="등록증 발급을 신청하신 경우, 사전연명의료의향서 등록증이 작성자님께서 요청하신 주소지로 배송될 예정입니다."
        />
        <Textlist 
          text="배송기간은 2개월 정도 소요될 예정입니다."
        />
        <Textlist 
          text="귀가하신 후 궁금한 점이 있으시면 저희 등록기관이나 국립연명의료관리기관(1855-0075/수신자부담 1422-25)로 연락해주시기 바랍니다."
        />
      </ScrollView> 
      <Buttonlist
        title = "완료"
        routename = "Home"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewstyle : {
    flex:1,
    justifyContent : 'center'
  },
  newliststyle: {
    //marginHorizontal : 20,
    marginBottom : 20,
    //marginVertical : 15,
    fontSize : 20,
    borderWidth : 1,
    borderColor : 'white',
    color : 'white',
    backgroundColor : 'white',
    // paddingVertical: 10,
    // paddingHorizontal : 10,
    flexDirection : 'row',
    justifyContent:'space-around'
  },
});

export default counselfinish;