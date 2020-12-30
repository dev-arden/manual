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

const deaf4 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="청각장애인과 청력저하 고령자 응대 시 상담자세"
      />
      <ScrollView style={{flex:2}}>
        <Icontext 
          text="조용하고 밝은 장소에서 입술이나 몸짓을 파악할 수 있도록 한다."
        />
        <Icontext 
          text="연명의료 상담 시 안내서 글을 짚으면서 진행하고 중간중간 이해했는지 확인한다."
        />
        <Icontext 
          text="약간 느린 속도로 말하고, 발음을 명확하게 한다."
        />
        <Icontext 
          text="대화 시 한 구절이 끝나면 잠시 말을 멈춰 이해할 시간을 제공한다."
        />
        <Icontext 
          text="보통 말소리보다 약간 크게 말하되, 같은 말의 반복보다 쉬운 단어로 바꾸어 대화한다."
        />
        <Icontext 
          text="대화 시 입 모양을 크게 해 천천히 말하기, 글로 쓰기, 혹은 수화를 이용하여 의사소통할 수 있다."
        />
        <Icontext 
          text="대화 시 ‘눈’을 보며 말하되 상황에 맞는 표정이나 몸짓을 동반하면 더 쉽게 의미 전달이 된다."
        />
        <Icontext 
          text="동반자가 수화통역으로 대화할 때 작성자와 눈을 맞춘다."
        />
        <Icontext 
          text="중증청각장애 시 대화 시 어깨를 가볍게 두드리거나 손을 흔들어 시선을 확보한다."
        />
      </ScrollView> 
      <ButtonFinish 
        routename="manual3"
        routename2="deafmanual"
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

export default deaf4;