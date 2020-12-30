import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Buttonlist from '../../components/Buttonlist';
import ExonlyHead from '../../components/ExonlyHead';
import Icontext from '../../components/Icontext';

/**
 * 이제 의향서를 등록하고자 합니다. 
 * 혹 더 궁금한 사항 있으신가요?
 * 작성된 의향서는 국립연명의료관리기관의 연명의료정보처리시스템에 저장이 됩니다. 
 * 그리고 지금까지 나누었던 상담내용 및 모든 정보는 저장되거나 유출되지 않습니다. 
 */

const brain2 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="인지기능저하"
      />
      <ScrollView style={{flex:2}}>
        <ExonlyHead 
          title="특징"
        />
        <Icontext 
          text="노화 및 장애의 정도에 따라 개인마다 인지기능은 다르다."
        />
        <Icontext 
          text="노인의 인지기능은 노화에 따라 인지기능이 점차 감퇴하며 이는 정상적인 변화이다. 따라서 치매와 같은 병적인 상태와 구별해야 한다."
        />
        <Icontext 
          text="지적장애는 일반적으로 학령전기부터 발견되어 생애 전반적으로 유지된다."
        />
      </ScrollView> 
      <Buttonlist 
        title = "다음"
        routename="brain3"
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

export default brain2;