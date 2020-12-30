import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../../components/Textlist';
import Buttonlist from '../../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Imagelist from "../../components/Imagelist";

const braintalk5 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="사전연명의료의향서의 적용"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../../assets/talk5.jpg')}
        />
        <Textlist 
          text="사전연명의료의향서를 작성한 후, 추후 의료기관에서 의사 2인으로부터 임종과정에 있는 환자로 판단되면, 본인 의사를 확인 후 연명의료에 대한 중단 등 결정이 가능합니다."
        />
        <Textlist 
          text="단, 교통사고 등 갑작스러운 사고로 인한 응급상황이라면 응급의료에 관한 법률 등에 따라 의료진이 치료를 진행합니다."
        />
      </ScrollView> 
      <Buttonlist
        title = "다음"
        routename = "braintalk6"
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

export default braintalk5;