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

const brain1 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="인지기능저하"
      />
      <ScrollView style={{flex:2}}>
        <ExonlyHead 
          title="용어 설명"
        />
        <Icontext 
          text="인지기능: 상황이나 상태를 인지하고 분별하는 기능"
        />
        <Icontext 
          text="인지기능장애: 기억력, 주의력, 언어능력, 시공간 능력, 판단력 등이 저하된 상태를 의미하며, 인지장애의 정도는 아주 경미한 경우에서 심한 경우까지 다양함."
        />
        <Icontext 
          text="치매: 인지기능 장애가 심하여 일상생활이나 사회생활에 지장을 주는 경우."
        />
        <Icontext 
          text="경도 인지장애: 동일 연령대에 비해 인지기능, 특히 기억력이 떨어지나 일상생활을 수행하는 능력은 남아있어 아직은 치매라고 할 정도로 심하지 않은 상태임. 정상 노화와 치매의 중간 단계라고 할 수 있음."
        />
        <Icontext 
          text="지적장애: 지적인 능력이 평균 이하인 상태."
        />
      </ScrollView> 
      <Buttonlist 
        title = "다음"
        routename="brain2"
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

export default brain1;