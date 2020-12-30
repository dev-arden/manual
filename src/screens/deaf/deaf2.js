import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Buttonlist from '../../components/Buttonlist';
import ExonlyHead from '../../components/ExonlyHead';
import Icontext from '../../components/Icontext';

/**
 * 이제 의향서를 등록하고자 합니다. 
 * 혹 더 궁금한 사항 있으신가요?
 * 작성된 의향서는 국립연명의료관리기관의 연명의료정보처리시스템에 저장이 됩니다. 
 * 그리고 지금까지 나누었던 상담내용 및 모든 정보는 저장되거나 유출되지 않습니다. 
 */

const deaf2 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="청각장애인"
      />
      <ScrollView style={{flex:2}}>
        <ExonlyHead 
          title="특징"
        />
        <Icontext 
          text="개인의 청각 손상에 따라 보청기나 보조기구 등의 도움을 통해 소리를 들을 수 있다."
        />
        <Icontext 
          text="목소리를 낼 수 있으며, 본인의 목소리를 확인할 수 없기 때문에 목소리가 어눌하거나 무언가에 눌린 것처럼 들릴 수 있다."
        />
        <Icontext
          text="대부분 상대방의 입 모양을 보고 말을 어느 정도는 이해하기도 한다."
        />
        <Icontext
          text="90% 이상 수화를 못 하며, 의사전달 시 87.2%가 말을 사용한다.(2005년 장애인실태조사)"
        />
        <Icontext
          text="의사소통이 곤란한 환경에 노출된 경우가 많아 사회적, 정서적 경험의 제한으로 마음의 상처를 쉽게 받는 경우가 있다."
        />
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
  }
});

export default deaf2;