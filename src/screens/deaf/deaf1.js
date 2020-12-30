import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Buttonlist from '../../components/Buttonlist';
import Exwithhead from '../../components/Exwithhead';
import ExImage from '../../components/ExImage';

/**
 * 이제 의향서를 등록하고자 합니다. 
 * 혹 더 궁금한 사항 있으신가요?
 * 작성된 의향서는 국립연명의료관리기관의 연명의료정보처리시스템에 저장이 됩니다. 
 * 그리고 지금까지 나누었던 상담내용 및 모든 정보는 저장되거나 유출되지 않습니다. 
 */

const deaf1 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="청각장애인"
      />
      <ScrollView style={{flex:2}}>
        <Exwithhead 
          title="유형"
          text="전음성 난청, 감음 신경성 청력 손실, 혼합성 난청, 언어습득 전후 농, 편측성 난청"
        />
        <Exwithhead 
          title="상태"
          text="소리를 들을 수 있는 능력이 상당히 떨어져 있거나 전혀 들리지 않는 상태."
        />
        <ExImage 
          title="장애 정도"
          text="장애인복지법 시행규칙 [별표 1](개정 2019.6.4.)"
          imageSource={require('../../../assets/deaf1.png')}
          imageStyle={{height:150,width:330,resizeMode:'contain'}}
        />
      </ScrollView> 
      <Buttonlist 
        title = "다음"
        routename="deaf2"
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

export default deaf1;