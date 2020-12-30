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

const blind1 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="시각장애인"
      />
      <ScrollView style={{flex:2}}>
        <Exwithhead 
          title="유형"
          text="전맹, 저시력(약시), 단안 실명, 시야각 결손"
        />
        <Exwithhead 
          title="상태"
          text="다수는 명암이나 색깔을 희미하게 구분하거나 남아있는 시각기능을 일상생활에 활용"
        />
        <ExImage 
          title="장애 정도"
          text="장애인복지법 시행규칙 [별표 1]"
          imageSource={require('../../../assets/blind1.png')}
          imageStyle={{height:130,width:330,resizeMode:'contain'}}
        />
      </ScrollView> 
      <Buttonlist 
        title = "다음"
        routename="blind2"
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

export default blind1;