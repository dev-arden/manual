import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../../components/Textlist';
import Buttonlist from '../../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Imagelist from "../../components/Imagelist";
import NavLink from '../../components/NavLink';

const disabletalk2 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="연명의료의 의미"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../../assets/talk2.jpg')}
        />
        <Textlist 
          text="연명의료는 임종과정에 있는 환자에게 하는 심폐소생술, 혈액 투석, 항암제 투여, 인공호흡기 착용과 그 밖에 법으로 정하는 의학적 시술로서 치료효과 없이 임종과정의 기간만을 연장하는 것을 말합니다."
        />
        <NavLink 
          text="추가 설명 확인하기"
          routeName="disableid10"
        />
      </ScrollView> 
      <Buttonlist
        title = "다음"
        routename = "disabletalk3"
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

export default disabletalk2;