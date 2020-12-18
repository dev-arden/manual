import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../components/Textlist';
import Buttonlist from '../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../components/TitlewithoutImage';
import Imagelist from "../components/Imagelist";

const counseltalk3 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="사전연명의료의향서의 정의"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../assets/info.png')}
        />
        <Textlist 
          text="사전연명의료의향서는 19세 이상의 사람이 향후 자신의  연명의료중단 등 결정과 호스피스 이용에  관한 의사를 직접 문서로 작성한  것을 말합니다."
        />
      </ScrollView> 
      <Buttonlist
        title = "다음"
        routename = "counseltalk4"
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

export default counseltalk3;