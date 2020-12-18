import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../components/Textlist';
import Buttonlist from '../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../components/TitlewithoutImage';
import Imagelist from "../components/Imagelist";

const counseltalkdul2 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="호스피스 이용 결정(1)"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../assets/maintain.png')}
        />
        <Textlist 
          text="호스피스 대상 환자는 암, 후천성면역결핍증, 만성 폐쐐성 호흡기질환, 만성 간경화를 앓고 있는 자로서 담당의사 및 해당 분야 전문의 1명이 말기환자로 진단한 경우 또는 임종과정에 있는 환자로 판단을 받은 경우 입니다."
        />
        <Textlist 
          text="자세한 문의는 중앙호스피스센터 홈페이지(http//www.hospice.go.kr)나 국가암정보센터(1577-8899)로 문의하시면 됩니다."
        />
      </ScrollView> 
      <Buttonlist
        title = "다음"
        routename = "counseltalkdul3"
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

export default counseltalkdul2;