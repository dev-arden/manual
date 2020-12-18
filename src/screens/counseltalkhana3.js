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
          imageSource={require('../../assets/blood.png')}
        />
        <Textlist 
          text="혈액 속의 노폐물 걸러내 소변으로 배출하는 기능을 하는 신장!"
        />
        <Textlist 
          text="우리 몸에서 콩팥은 노폐물을 걸러내고 전해질과 산-염기 평형 상태를 유지하는 등 생명유지에 중요한 역할을 담당합니다."
        />
        <Textlist 
          text="급성 또는 만성으로 신기능 부전이 발생하면 혈액투석이 필요할 수 있습니다."
        />
        <Textlist 
          text = "그러나 임종단계에 임종단계에 이른 환자에게 혈액투석은 피할 수도 있는 고통을 가중하거나 치료효과 없이 연명의료만 되기도 합니다."
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