import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Buttonlist from "../../components/Buttonlist";
import { SafeAreaView } from 'react-native';
import Titledeaf2 from '../../components/Titledeaf2';
import Textlist from '../../components/Textlist';
import ExonlyHead from '../../components/ExonlyHead';

const deafready2 = ({}) => {

  return (
    <SafeAreaView style={{flex:1}}>
      <Titledeaf2 
        title="1단계"
        text="사전연명의료의향서 청각맞춤상담을 위한 준비"
      />
      <ScrollView style={{flex:2}}>
        <ExonlyHead 
          title="준비사항"
        />
        <Textlist 
          text="• 사전연명의료의향서 법정서식, 컴퓨터 또는 태블릿 PC"
        />
        <Textlist 
          text="• 의향서 설명 시 참고자료: 상담그림카드, 상담일지, 리플렛, 동영상(자막,수화)"
        />
        <Textlist 
          text="• 등록기관 지정서 비치 및 상담자 신원 확인이 가능한 상담자 신분증"        
        />
      </ScrollView>
      <Buttonlist 
        title = "다음"
        routename = "deafready3"
      />
    </SafeAreaView>
  );
};


export default deafready2;