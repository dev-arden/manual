import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../../components/Textlist';
import Buttonlist from '../../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Imagelist from "../../components/Imagelist";

const blindtalkhana7 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="6.수혈"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../../assets/talkhana7.jpg')}
        />
        <Textlist 
          text="중증 환자는 적절한 치료와 회복을 위해 적혈구 혈소판 등 다양한 혈액성분의 수혈이 필요할 수 있습니다."
        />
        <Textlist 
          text="하지만 회복하지 못하는 임종과정의 환자에게 수혈을 하는 것은 가족들의 바람과 달리 환자에게 아무런 도움이 되지 않는 경우가 일반적입니다."
        />
      </ScrollView> 
      <Buttonlist
        title = "다음"
        routename = "blindtalkhana8"
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

export default blindtalkhana7;