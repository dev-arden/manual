import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../components/Textlist';
import Buttonlist from '../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../components/TitlewithoutImage';
import Imagelist from "../components/Imagelist";

const counseltalk2 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="연명의료의 정의"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../assets/info.png')}
        />
        <Textlist 
          text="연명의료는 임종과정에 있는 환자에게 하는 심폐소생술, 혈액 투석, 항암제 투여, 인공호흡기 착용 및 그 밖에 대통령령으로 정하는 의학적 시술로서 치료효과 없이 임종과정의 기간만을 연장하는 것을 말합니다."
        />
      </ScrollView> 
      <Buttonlist
        title = "다음"
        routename = "counseltalk3"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewstyle:{
    flex:1,
    justifyContent : 'center'
  },
});

export default counseltalk2;