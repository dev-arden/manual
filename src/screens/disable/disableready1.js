import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Buttonlist from "../../components/Buttonlist";
import { SafeAreaView } from 'react-native';
import Titledisable2 from '../../components/Titledisable2';
import Textlist from '../../components/Textlist';
import ExonlyHead from '../../components/ExonlyHead';

const disableready1 = ({}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      {/* <Titletwo 
        title="1단계"
        text="사전연명의료의향서 상담을 위한 준비"
      /> */}
      <Titledisable2 
        title="1단계"
        text="사전연명의료의향서 신체맞춤상담을 위한 준비"
      />
      <ScrollView style={{flex:2}}>
        <ExonlyHead 
          title="상담실 환경"
        />
        <Textlist 
          text="• 개인상담전용실(2~5평)"
        />
        <Textlist 
          text="• 테이블과 부드러운 등받이 의자(3~5개)"
        />
        <Textlist 
          text="• 냉난방기와 온도점검, 소음점검, 따뜻한 조명과 밝은 계열의 커튼과 벽지"
        />
        <Textlist 
          text="• 정리·정돈과 청결 유지"
        />
        <Textlist 
          text="• 상담실문앞에 <상담 중> 표시"
        />
      </ScrollView>
      <Buttonlist 
        title = "다음"
        routename = "disableready2"
      />
    </SafeAreaView>
  );
};


export default disableready1;