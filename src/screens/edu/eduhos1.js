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

/**
 * 이제 의향서를 등록하고자 합니다. 
 * 혹 더 궁금한 사항 있으신가요?
 * 작성된 의향서는 국립연명의료관리기관의 연명의료정보처리시스템에 저장이 됩니다. 
 * 그리고 지금까지 나누었던 상담내용 및 모든 정보는 저장되거나 유출되지 않습니다. 
 */

const eduhos1 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="호스피스,완화의료"
      />
      <ScrollView style={{flex:2}}>
        <Exwithhead 
          title="호스피스,완화의료"
          text="암, 후천성면역결핍증, 만성 폐쇄성 호흡기질환, 만성 간경화 등의 질환으로 말기환자로 진단을 받은 환자 또는 임종과정에 있는 환자와 그 가족에게 통증과 증상의 완화 등을 포함한 신체적, 심리사회적, 영적 영역에 대한 종합적인 평가와 치료를 목적으로 하는 의료다."
        />
        <Exwithhead 
          title="대상"
          text="암, 후천성면역결핍증, 만성 폐쇄성 호흡기질환, 만성 간경화 질환의 환자와 가족"
        />
        <Exwithhead 
          title="호스피스,완화의료 전문가팀"
          text="의사, 간호사, 사회복지사, 영적돌봄제공자, 자원봉사자"
        />
        <Exwithhead 
          title="서비스 내용"
          text="① 평가: 신체적, 심리사회적, 영적 평가 및지지, ② 치료: 통증, 구토, 호흡곤란, 복수 등 증상 적극적 치료, ③ 임종돌봄: 환자 및 사별가족 돌봄 포함"
        />
        <Exwithhead 
          title="호스피스 서비스 유형"
          text="입원형, 자문형, 가정형"
        />
        <Exwithhead 
          title="호스피스 의료비"
          text="의료기관의 종류, 서비스 형태 및 환자의 상태에 따라 달리 책정된다. 모든 암환자는 요양급여의 5%만 본인부담금으로 납부하면 된다."
        />
        <Textlist 
          text="요양병원 4인실 기준 1개월 입원시 급여의 본인부담금 약 50만 원 내외, 단 간병비 및 비급여 별도"
        />
        <Textlist 
          text="사전연명의료의향서 작성 시 호스피스이용 의향 선택 가능, 단 향후 이용 시 별도의 신청 절차를 거쳐야 한다."
        />
        <Exwithhead 
          title="신청 방법"
          text="호스피스를 이용하려는 경우에는 호스피스 이용동의서와 의사가 발급하는 호스피스 대상 환자임을 나타내는 의사소견서를 첨부하여 호스피스전문기관에 신청한다."
        />
        <Exwithhead 
          title="문의"
          text="중앙호스피스센터 홈페이지(www.hospice.go.kr)나 국가암정보센터(1577-8899)로 문의."
        />
      </ScrollView> 
      <Buttonlist 
        title="완료"
        routename="eduhome"
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

export default eduhos1;