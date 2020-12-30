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

const blind2 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="시각장애인"
      />
      <ScrollView style={{flex:2}}>
      <ExonlyHead 
          title="특징"
        />
        <Icontext 
          text="흰 지팡이를 사용하고, 의사소통은 가능하나 직접 확인이 어려워 답답해한다."
        />
        <Icontext 
          text="사고나 질병으로 후천적으로 장애가 생긴 중도장애인은 점자를 모를 수 있다."
        />
        <Icontext
          text="육안으로 시각장애인을 구별하기 어려울 수 있으며, 사물에 초점을 맞출 수도 있다."
        />
        <Icontext
          text="내방상담 시 대부분 생활보호대상자와 동행하는 경우가 많으며, 출장상담을 요청하는 경우도 있다."
        />
        <Icontext
          text="시각장애인은 혼자서도 서명이 가능한 경우가 많다."
        />
      </ScrollView> 
      <Buttonlist 
        title = "다음"
        routename="blind3"
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

export default blind2;