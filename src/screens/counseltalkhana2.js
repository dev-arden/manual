import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../components/Textlist';
import Buttonlist from '../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../components/TitlewithoutImage';
import Imagelist from "../components/Imagelist";

const counseltalkhana2 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="1.심폐소생술"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../assets/heart.png')}
        />
        <Textlist 
          text="심폐소생술은 가슴압박과 인공호흡을 시행하여 정지된 심장을 대신해 심장과 뇌에 산소가 포함된 혈액을 공급해주는 응급처치인데요."
        />
        <Textlist 
          text="하지만 임종과정에 들어선 환자에게 심폐소생술을 시행하여도 소생할 가능성이 매우 낮고, 짧은 시일 내 다시 심정지에 이를 겁니다. 흉부 압박으로 인한 갈비뼈 골절, 기흉, 혈흉 등 기도 삽관으로 인한 치아 손실, 목소리 손상 등의 부작용을 동반하는 시술입니다."
        />
      </ScrollView> 
      <Buttonlist
        title = "다음"
        routename = "counseltalkhana3"
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

export default counseltalkhana2;