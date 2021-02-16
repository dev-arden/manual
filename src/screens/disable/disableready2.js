import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Buttonlist from "../../components/Buttonlist";
import { SafeAreaView } from 'react-native';
import Titledisable2 from '../../components/Titledisable2';
import Textlist from '../../components/Textlist';
import ExonlyHead from '../../components/ExonlyHead';

const disableready2 = ({}) => {

  return (
    <SafeAreaView style={{flex:1}}>
      <Titledisable2 
        title="1단계"
        text="사전연명의료의향서 신체맞춤상담을 위한 준비"
      />
      <ScrollView style={{flex:2}}>
        <ExonlyHead 
          title="준비사항"
        />
        <Textlist 
          text="• 거동이 불편하여 출장방문을 요청할 수 있으며 2인 1조로 방문"
        />
        <Textlist 
          text="• 사전연명의료의향서 법정서식, 컴퓨터 또는 태블릿 PC"
        />
        <Textlist 
          text="• 의향서 설명 시 참고자료: 상담그림카드, 상담일지, 동영상 또는 녹음기"
        />
        <Textlist 
          text="• 등록기관 지정서 비치 및 상담자 신원 확인이 가능한 상담자 신분증"        
        />
      </ScrollView>
      <Buttonlist 
        title = "다음"
        routename = "disableready3"
      />
    </SafeAreaView>
  );
};


export default disableready2;