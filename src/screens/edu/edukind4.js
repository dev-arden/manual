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

const edukind4 = () => {
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
          title="혈액투석"
        />
        <Textlist 
          text="신장(콩팥)은 혈액 속의 노폐물을 걸러내 소변으로 배출시키는 기능을 수행하는데, 이 기능에 이상이 생긴 말기 신부전 환자에게 의료기기를 사용하여 혈액 속 노폐물이 배출되게 하는 의학적 시술. 일반적으로 인공적인 혈관 통로를 통해서 몸속 피를 일부 뽑아 그 속의 찌꺼기를 거른 다음 깨끗해진 피를 다시 넣어주는 과정을 일정 시간 지속하는 방법."
        />
        <Textlist 
          text="혈액투석을 위해서는 가슴, 목, 사타구니 등에 카테터 삽입술이 시행되는데, 카테터 삽입의 과정에서 혈관 외상, 출혈, 감염이 발생할 수 있다. 혈액 투석시 혈액응고제의 사용이 빈번하여 출혈의 위험이 높게 나타난다."
        />
        <Exwithhead 
          title="주의"
          text="임종에 직면시 혈액투석을 하지 않겠다는 것이다."
        />
      </ScrollView> 
      <Buttonlist 
        title="다음"
        routename="edukind5"
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

export default edukind4;