import React from 'react';
import {StyleSheet,View,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Buttonlist from '../../components/Buttonlist';
import Exwithhead from '../../components/Exwithhead';
import Circletext from '../../components/Circletext';
import Textlist from '../../components/Textlist';
import ButtonFinish from '../../components/ButtonFinish';
import ExImage from '../../components/ExImage';
import Imagelist from '../../components/Imagelist';
import ExonlyHead from '../../components/ExonlyHead';
import Numhead from '../../components/Numhead';

/**
 * 이제 의향서를 등록하고자 합니다. 
 * 혹 더 궁금한 사항 있으신가요?
 * 작성된 의향서는 국립연명의료관리기관의 연명의료정보처리시스템에 저장이 됩니다. 
 * 그리고 지금까지 나누었던 상담내용 및 모든 정보는 저장되거나 유출되지 않습니다. 
 */

const edukind3 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="연명의료 시술의 종류"
      />
      <ScrollView style={{flex:2}}>
        <Numhead 
          title="중단할 수 있는 연명의료 시술"
        />
        <ExonlyHead 
          title="체외생명유지술"
        />
        <Textlist 
          text="심각한 호흡부전·순환부전 시 체외순환을 통해 심폐기능 유지를 도와주는 시술. 체외순환장치(체외형 막형 산화기(에크모, ECMO)를 사용하여 인공순환을 유지하며, 정맥혈을 뽑아 체외에서 산소를 보충하고 이산화탄소를 제거한 다음 정맥 또는 동맥 내로 주입하는 방법."
        />
        <Textlist 
          text="출혈(도관 삽입부 출혈, 위궤양출혈, 뇌출혈), 응고장애, 도관을 삽입한 하지의 허혈, 공기색전증, 혈전색전증 등의 부작용이 발생할 수 있다. 심장과 폐의 기능이 나빠져서(작동이 안 되어) 몸 안의 피를 외부 기계와 연결하여 나쁜 것은 제거하고 산소는 보충하여 몸으로 다시 넣는 방법이다."
        />
        <Exwithhead 
          title="주의"
          text="임종에 직면시 체외생명유지술을 하지 않겠다는 것이다."
        />
      </ScrollView> 
      <Buttonlist 
        title="다음"
        routename="edukind4"
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
    marginHorizontal : 20,
    //marginBottom : 20,
    marginVertical : 15,
    fontSize : 20,
    borderWidth : 1,
    borderColor : 'white',
    color : 'white',
    backgroundColor : 'white',
    padding : 10,
    flexDirection : 'row',
    justifyContent:'space-around'
 }
});

export default edukind3;