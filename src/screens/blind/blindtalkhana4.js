import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../../components/Textlist';
import Buttonlist from '../../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Imagelist from "../../components/Imagelist";

const blindtalkhana4 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="3.항암제 투여"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../../assets/talkhana4.jpg')}
        />
        <Textlist 
          text="일반 암환자에게는 암을 축소, 억제, 제거하기 위해 항암제를 투여합니다."
        />
        <Textlist 
          text="그러나 임종과정에 있는 환자에게 항암제 투여는 담당의사와 함께 신중하게 결정해야 합니다."
        />
        <Textlist 
          text="환자에게 득이 되기는커녕 항암치료를 견디지 못하고 생이 더 단축될 수도 있습니다."
        />
      </ScrollView> 
      <Buttonlist
        title = "다음"
        routename = "blindtalkhana5"
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

export default blindtalkhana4;