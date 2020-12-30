import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Buttonlist from '../../components/Buttonlist';
import Exwithhead from '../../components/Exwithhead';
import ExImage from '../../components/ExImage';
import Textlist from '../../components/Textlist';
import ExonlyHead from '../../components/ExonlyHead';
import Icontext from '../../components/Icontext';

/**
 * 이제 의향서를 등록하고자 합니다. 
 * 혹 더 궁금한 사항 있으신가요?
 * 작성된 의향서는 국립연명의료관리기관의 연명의료정보처리시스템에 저장이 됩니다. 
 * 그리고 지금까지 나누었던 상담내용 및 모든 정보는 저장되거나 유출되지 않습니다. 
 */

const lang1 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="비문해자"
      />
      <ScrollView style={{flex:2}}>
        <Exwithhead 
          title="정의"
          text="비문해자는 글을 읽지 못하거나 이해하지 못하는 사람을 말함."
        />
        <ExImage 
          title="문해 능력 수준"
          text="출처:국가평생교육진흥원(2018). 2017년 성인문해능력조사"
          imageSource={require('../../../assets/lang1.png')}
          imageStyle={{height:150,width:330,resizeMode:'contain'}}
        />
        <ExonlyHead 
          title="특징"
        />
        <Icontext 
          text="2017년 국가평생교육진흥원 조사에 의하면 우리나라 18세 이상 성인 중 기초적인 일상문제 해결이 어려운 수준(수준 1)의 인구는 전체 성인 중 7.2%로 약 311만명으로 추정하며, 그중 대부분은 70세 이상 고령자이나 60대부터 비율이 급격히 증가(60대 14.2%, 70대 28.7%, 80세 이상 76.7%)하고 있다."
        />
        <Icontext 
          text="서명 시 자신의 이름 또는 성을 직접 작성하는 경우가 많으며, 이름을 보여주면 그릴 수 있다."
        />
        <Icontext 
          text="대부분 비문해자임을 드러내지 않기 위해 글을 읽거나 작성해야 하는 경우 자리를 회피하는 경우가 많다."
        />
      </ScrollView> 
      <Buttonlist 
        title = "다음"
        routename="lang2"
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

export default lang1;