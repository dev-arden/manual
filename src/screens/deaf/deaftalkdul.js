import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../../components/Textlist';
import Buttonlist from '../../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Imagelist from "../../components/Imagelist";
import NavLink from '../../components/NavLink';

const deaftalkdul = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="호스피스 이용 의향"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../../assets/talkdul.jpg')}
        />
        <Textlist 
          text="사전연명의료의향서 작성 시 호스피스 이용 의향을 선택할 수 있습니다."
        />
        <Textlist 
          text="호스피스란, 호스피스 대상 환자와 그 가족에게 통증과 증상의 완화 등을 포함한 신체적·심리사회적·영적 영역에 대한 종합적인 평가와 치료를 목적으로 하는 의료서비스로 입원형·자문형·가정형 호스피스가 있습니다."
        />
        <Textlist 
          text="호스피스 대상 환자는 암, 후천성면역결핍증, 만성 폐쇄성 호흡기질환, 만성 간경화를 앓고 있는 자로서 담당의사 및 해당 분야 전문의 1명이 말기환자로 진단한 경우 또는 임종과정에 있는 환자로 판단을 받은 경우입니다."
        />
        <Textlist 
          text="자세한 내용은 중앙호스피스센터 홈페이지(www.hospice.go.kr)나 국가암정보센터(1577-8899)로 문의하시면 됩니다."
        />
        <NavLink 
          text="추가 설명 확인하기"
          routeName="deaftalkhana11"
        />
      </ScrollView> 
      <Buttonlist
        title = "다음"
        routename = "deaftalkdul2"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewstyle : {
    flex:1,
    justifyContent : 'center'
  }
});

export default deaftalkdul;