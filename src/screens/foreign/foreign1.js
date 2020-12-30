import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Buttonlist from '../../components/Buttonlist';
import Exwithhead from '../../components/Exwithhead';
import ExImage from '../../components/ExImage';
import Textlist from '../../components/Textlist';

/**
 * 이제 의향서를 등록하고자 합니다. 
 * 혹 더 궁금한 사항 있으신가요?
 * 작성된 의향서는 국립연명의료관리기관의 연명의료정보처리시스템에 저장이 됩니다. 
 * 그리고 지금까지 나누었던 상담내용 및 모든 정보는 저장되거나 유출되지 않습니다. 
 */

const foreign1 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="외국인"
      />
      <ScrollView style={{flex:2}}>
        <Exwithhead 
          title="대상"
          text="규정 신분증을 지참한 19세 이상의 외국인"
        />
        <ExImage 
          title="신분확인(규정신분증"
          text="여권 또는 출입국관리법 제33조 제1항에 따른 외국인 등록증(여권만료일, 외국인등록증 체류기간), 신분증(주민등록증, 운전면허증)"
          imageSource={require('../../../assets/foreign1.png')}
          imageStyle={{height:150,width:330,resizeMode:'contain'}}
        />
        <Exwithhead 
          title="참고 사이트"
          text="2019년 3월 5일 외국인 사용자를 위한 영문포털사이트 오픈되어 있어 영어 사용자의 경우 조회 및 열람이 가능하다."
        />
        <Textlist 
          text="국가별 이중국적이 가능하여 외국인 등록증과 주민등록증을 동시에 지참한 경우도 있다."
        />
      </ScrollView> 
      <Buttonlist 
        title = "다음"
        routename="foreign2"
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

export default foreign1;