import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../components/Textlist';
import Buttonlist from '../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../components/TitlewithoutImage';
import Imagelist from "../components/Imagelist";

const counseltalkhana = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="연명의료 시술의 종류"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../assets/info.png')}
        />
        <Textlist 
          text="임종과정에 있는 환자가 되었을  때 받을 수 있는 임종기간을 연장하는 연명의료에 대해서 그림카드로 설명을 드리겠습니다."
        />
      </ScrollView> 
      <Buttonlist
        title = "다음"
        routename = "counseltalkhana2"
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

export default counseltalkhana;