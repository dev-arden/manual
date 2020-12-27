import React from 'react';
import {StyleSheet, Image,View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../components/Textlist';
import Buttonlist from '../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../components/TitlewithoutImage';
import Imagelist from "../components/Imagelist";

/**
 지금 발급받지 않아도 이후 원하실 때 언제든 신청이 가능합니다. 
 의향서에 작성하신 주소지로 배송을 원하시나요? 
 만약 다른 주소지로 배송을 원하지면 그 주소를 알려주십시오. 
 단,등록증 발급기간은 2개월 정도 소요됩니다. 
 카드 발급 후 분실하였을 때 국립연명의료관리기관(1855-0075 수신자부담 1422-25)으로 연락주시면 언제든 무료로 재발급이 가능합니다
 */

const counselenter2 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="서명"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../assets/enter.png')}
        />
        <Textlist 
          text="지금 발급받지 않아도 이후 원하실 때 언제든 신청이 가능합니다."
        />
        <Textlist 
          text="의향서에 작성하신 주소지로 배송을 원하시나요?"
        />
        <Textlist 
          text="만약 다른 주소지로 배송을 원하지면 그 주소를 알려주십시오."
        />
        <Textlist 
          text="단,등록증 발급기간은 2개월 정도 소요됩니다."
        />
        <Textlist 
          text="카드 발급 후 분실하였을 때 국립연명의료관리기관(1855-0075/수신자부담 1422-25)으로 연락주시면 언제든 무료로 재발급이 가능합니다."
        />
      </ScrollView> 
      <Buttonlist
        title = "완료"
        routename = "manual1"
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

export default counselenter2;