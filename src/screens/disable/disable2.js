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

const disable2 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="신체장애인 응대 시 상담자세"
      />
      <ScrollView style={{flex:2}}>
        <Icontext 
          text="대부분 의사소통이 가능하고 정신은 명료하기에 직접 서명에 대한 의지를 확인하고 진행할 수 있다."
        />
        <Icontext 
          text="팔과 손의 강직이 심한 경우 손이 제멋대로 움직여서 작성시간이 오래 걸릴 수 있으나, 최대한 작성자의 마음과 자세를 편하게 유도함과 동시에 충분한 시간을 제공한다."
        />
        <Icontext 
          text="상담 시 작성자가 아닌 보호자를 보면서 대화하는 것을 피한다."
        />
      </ScrollView> 
      <ButtonFinish 
        routename="manual4"
        routename2="disablemanual"
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

export default disable2;