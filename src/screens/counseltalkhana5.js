import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../components/Textlist';
import Buttonlist from '../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../components/TitlewithoutImage';
import Imagelist from "../components/Imagelist";

const counseltalkhana5 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="4.인공호흡기 착용"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../assets/blood.png')}
        />
        <Textlist 
          text="질환으로 인하여 환자의 호흡이 불안정하고 폐가 산소-이산화탄소 교환 기능을 상실할 때, 인공호흡기를 기관내튜브에 연결하여 생명을 구하는 방법입니다."
        />
        <Textlist 
          text="하지만 임종과정의 환자에게 인공호흡기로 호흡을 유지시키는 것은 치료효과 없이 환자의 임종과정만을 연장하는 연명의료가 됩니다."
        />
        <Textlist 
          text="기도 확보를 위한 기도 삽관이나 기관 절개술 시행 과정에서 치아나 기도의 손상, 식도 천공, 피하조직으로 공기가 새는 상태 및 출혈 등이 발생할 수 있습니다."
        />
      </ScrollView> 
      <Buttonlist
        title = "다음"
        routename = "counseltalkhana6"
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

export default counseltalkhana5;