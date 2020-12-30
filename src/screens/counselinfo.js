import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Titlelist from '../components/Titlelist';
import Textlist from '../components/Textlist';
import Buttonlist from '../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../components/TitlewithoutImage';
import Imagelist from '../components/Imagelist';
import NavLink from '../components/NavLink';
import ButtonFinish from '../components/ButtonFinish';

/**
 * 
 *  저는 보건복지부 지정을 받은 사전연명의료의향서 등록기관인 [기관명] 소속 상담사이며, 의향서 작성을 돕고 있습니다. 
   [상담자 신분증과 등록기관 지정서 제시
 */

const counselinfo = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="[소개]"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../assets/info.jpg')}
        />
        <Textlist 
          text="안녕하세요."
        />
        <Textlist 
          text="저는 연명의료결정법에 따라 보건복지부 지정을 받은 사전연명의료의향서 등록기관 (기관명) 소속 상담자 ○○○입니다."
        />
        <Textlist 
          text="저는 사전연명의료의향서 작성을 지원하는 업무를 담당하고 있습니다."
        />
        <Textlist 
          text="[상담자 신분증과 등록기관 지정서 제시]"
        />
        <NavLink 
          routeName="counselinfo2"
          text="추가 설명 확인하기"
        />
      </ScrollView>
      <ButtonFinish 
        routename="manual1"
        routename2="counselintro1"
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

export default counselinfo;