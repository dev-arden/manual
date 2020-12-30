import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../../components/Textlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Imagelist from '../../components/Imagelist';
import NavLink from '../../components/NavLink';
import ButtonFinish from '../../components/ButtonFinish';

/**
 * 
 *  저는 보건복지부 지정을 받은 사전연명의료의향서 등록기관인 [기관명] 소속 상담사이며, 의향서 작성을 돕고 있습니다. 
   [상담자 신분증과 등록기관 지정서 제시
 */

const foreignintro2 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="사전연명의료의향서 소개"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../../assets/intro2.jpg')}
        />
        <Textlist 
          text="사전연명의료의향서는 19세 이상의 성인이 미래에 연명의료의 대상이 될 경우를 대비하여 자신의 연명의료에 대한 중단과 호스피스에 관한 의사를 미리 직접 문서로 밝혀두는 것입니다."
        />
        <Textlist 
          text="적법한 절차에 따라 작성된 의향서는 연명의료정보처리시스템에 등록되어 법적 효력을 발생하게 됩니다."
        />
        <Textlist 
          text="의향서는 건강할 때는 효력이 없지만 나중에 임종과정에 있는 환자로 판단되었을 때, 담당의사가 미리 작성된 의향서를 통해 환자의 뜻에 변함이 없는지 확인해서 환자의 연명의료결정을 실제로 이행할 수 있게 됩니다."
        />
        <NavLink 
          routeName="foreignintro3"
          text="추가 설명 확인하기"
        />
      </ScrollView>
      <ButtonFinish 
        routename="foreignmanual"
        routename2="foreigncheck1"
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

export default foreignintro2;