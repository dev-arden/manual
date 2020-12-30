import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../../components/Textlist';
import Buttonlist from '../../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Imagelist from '../../components/Imagelist';

/**
 * 
 *  저는 보건복지부 지정을 받은 사전연명의료의향서 등록기관인 [기관명] 소속 상담사이며, 의향서 작성을 돕고 있습니다. 
   [상담자 신분증과 등록기관 지정서 제시
 */

const blindintro = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="연명의료결정제도 소개"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../../assets/intro.jpg')}
        />
        <Textlist 
          text="먼저 연명의료결정제도와 사전연명의료의향서를 간단히 소개해드릴께요."
        />
        <Textlist 
          text="연명의료결정제도는 더 이상의 치료방법이 없고 죽음에 임박하게 되는 임종과정에 있는 환자에게 생명만 유지하는 연명의료를 시행하지 않거나 중단할 수 있는 선택의 기회를 제공하여 남은 삶을 존엄하게 마무리할 수 있도록 지원하기 위해 마련된 제도입니다."
        />
      </ScrollView>
      <Buttonlist 
        title="다음"
        routename="blindintro2"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewstyle:{
    flex:1,
    justifyContent : 'center'
  },
  liststyle: {
    marginHorizontal : 20,
    marginVertical : 15,
    fontSize : 20,
    borderWidth : 1,
    borderColor : 'white',
    color : 'white',
    backgroundColor : 'white',
    paddingVertical: 30,
    paddingHorizontal : 20,
    flexDirection : 'row'
  }
});

export default blindintro;