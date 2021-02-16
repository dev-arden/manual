import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Buttonlist from '../../components/Buttonlist';
import Exwithhead from '../../components/Exwithhead';
import Circletext from '../../components/Circletext';
import Textlist from '../../components/Textlist';
import ButtonFinish from '../../components/ButtonFinish';

/**
 * 이제 의향서를 등록하고자 합니다. 
 * 혹 더 궁금한 사항 있으신가요?
 * 작성된 의향서는 국립연명의료관리기관의 연명의료정보처리시스템에 저장이 됩니다. 
 * 그리고 지금까지 나누었던 상담내용 및 모든 정보는 저장되거나 유출되지 않습니다. 
 */

const eduword1 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="3.주요 용어"
      />
      <ScrollView style={{flex:2}}>
        <Exwithhead 
          title="임종과정"
          text="회생의 가능성이 없고, 치료에도 불구하고 회복되지 아니하며, 급속도로 증상이 악화되어 사망에 임박한 상태."
        />
        <Exwithhead 
          title="임종과정에 있는 환자"
          text="회생의 가능성이 없고, 치료에도 불구하고 회복되지 아니하며, 급속도로 증상이 악화되어 담당의사와 해당 분야의 전문의 1명이 사망에 임박한 상태에 있다고 판단을 받은 사람."
        />
        <Exwithhead 
          title="연명의료"
          text="임종과정에 있는 환자에게 하는 심폐소생술, 혈액 투석, 항암제 투여, 인공호흡기 착용, 체외생명유지술, 수혈, 혈압상승제 투여 그 밖의 의학적 시술로서 치료효과 없이 임종과정의 기간만을 연장하는 것."
        />
        <Exwithhead 
          title="연명의료유보"
          text="임종과정에 있는 환자에게 연명의료를 처음부터 시행하지 않는 것."
        />
        <Exwithhead 
          title="연명의료중단"
          text="임종과정에 있는 환자에게 이미 시행중인 연명의료를 중지하는 것."
        />
        <Exwithhead 
          title="연명의료계획서"
          text="말기환자 등의 의사에 따라 담당의사가 환자에 대한 연명의료중단 등 결정 및 호스피스에 관한 사항을 계획하여 문서로 작성한 것."
        />
        <Exwithhead 
          title="사전연명의료의향서"
          text="19세 이상 성인이 자신의 연명의료중단 등 결정 및 호스피스에 관한 의사를 직접 문서(전자)로 작성한 것."
        />
      </ScrollView> 
      <ButtonFinish 
        routename="eduinfo"
        routename2="edurule1"
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

export default eduword1;