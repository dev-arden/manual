import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../components/Textlist';
import Buttonlist from '../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../components/TitlewithoutImage';
import Imagelist from "../components/Imagelist";

const counseltalkhana3 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="2.혈액투석"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../assets/talkhana3.png')}
        />
        <Textlist 
          text="우리 몸에서 콩팥은 노폐물을 걸러내고 소변을 만들어 배출하는 중요한 역할을 담당합니다."
        />
        <Textlist 
          text="콩팥이 망가지면 혈액을 투석기에 통과시켜 노폐물을 걸러내고 다시 몸속으로 집어넣는 혈액투석을 합니다."
        />
        <Textlist 
          text="그러나 임종단계에 이른 환자에게 혈액투석은 피할 수도 있는 고통을 가중하거나 치료효과 없은 연명의료가 되기도 합니다."
        />
      </ScrollView> 
      <Buttonlist
        title = "다음"
        routename = "counseltalkhana4"
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

export default counseltalkhana3;