import React from 'react';
import {StyleSheet,Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import ButtonFinish from '../../components/ButtonFinish';
import Icontext from '../../components/Icontext';

/**
 * 이제 의향서를 등록하고자 합니다. 
 * 혹 더 궁금한 사항 있으신가요?
 * 작성된 의향서는 국립연명의료관리기관의 연명의료정보처리시스템에 저장이 됩니다. 
 * 그리고 지금까지 나누었던 상담내용 및 모든 정보는 저장되거나 유출되지 않습니다. 
 */

const foreign2 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="외국인 응대 시 상담자세"
      />
      <ScrollView style={{flex:2}}>
        <Icontext 
          text="상담 시 어떤 언어로 설명받기를 원하는지 확인한다."
        />
        <Icontext 
          text="한국어로 진행하지 않을 경우: 자국 언어의 리플렛, 번역기를 활용한다."
        />
        <Icontext 
          text="한국어 능력시험(TOPIK)등급 3-4등급 이상 또는 그에 상응하는 한국어 이해 및 구사능력을 갖춘 경우, 한국어로 진행할 수 있다."
        />
        <Icontext 
          text="국가별 경제력 등의 특성에 따라 국적에 대한 질문은 민감한 사항이므로 주의한다."
        />
        <Icontext 
          text="국가별 의료이용 및 죽음 등에 대한 인식 등이 다양하기에 상담 시 주의가 필요하다."
        />
        <Icontext 
          text="연명의료 관련 내용에 대해 잘 이해하였는지에 대한 확인이 필요하다."
        />
        <Icontext 
          text="다문화가족 상담 시 가족 간 이해도 다르기에 분리 상담이 필요하다."
        />
        <Icontext 
          text="동일 국적의 외국인들이라도 연명의료에 대한 이해 및 인식이 다르기에 개별 상담이 필요하다."
        />
        <Icontext 
          text="통역사 이용 시 작성자의 의사를 정확하게 전달하는지 확인이 필요하다."
        />
      </ScrollView> 
      <ButtonFinish 
        routename="manual7"
        routename2="foreignmanual"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textstyle:{
    fontSize:20,
    color:'black',
    paddingHorizontal: 10,
    flex:1,
    margin : 5,
    //alignSelf: 'center'
    textAlign: 'justify'
  },
  viewstyle:{
    //borderWidth:1,
    backgroundColor: 'white',
    marginHorizontal : 20,
    marginVertical : 15,
  }
});

export default foreign2;