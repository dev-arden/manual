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

const lang2 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="비문해자 응대 시 상담자세"
      />
      <ScrollView style={{flex:2}}>
        <Icontext 
          text="작성자가 한글을 모르는 경우: 녹화나 녹취 등으로 작성자 본인의 뜻임을 확인할 수 있는 경우에 한하여 대필을 통한 작성이 가능하다."
        />
        <Icontext 
          text="의사소통이 어려운 경우: 커뮤니케이션 보드 및 언어카드 등을 활용한다."
        />
        <Icontext 
          text="사전연명의료의향서 작성 전에 작성자 본인의 자발적 의사 여부를 반드시 확인해야 하며, 동석자는 작성자가 동의한 경우에만 작성 과정에 참여할 수 있다."
        />
      </ScrollView> 
      <ButtonFinish 
        routename="manual6"
        routename2="langmanual"
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

export default lang2;