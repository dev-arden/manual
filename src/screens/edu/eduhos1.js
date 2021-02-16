import React from 'react';
import {StyleSheet,View,Image,Text} from 'react-native';
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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Numhead from '../../components/Numhead';
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
        title="7.호스피스・완화의료"
      />
      <ScrollView style={{flex:2}}>
        <Exwithhead 
          title="호스피스・완화의료"
          text="암, 후천성면역결핍증, 만성 폐쇄성 호흡기질환, 만성 간경화 등의 질환으로 말기환자로 진단을 받은 환자 또는 임종과정에 있는 환자와 그 가족에게 통증과 증상의 완화 등을 포함한 신체적, 심리사회적, 영적 영역에 대한 종합적인 평가와 치료를 목적으로 하는 의료임."
        />
        <Exwithhead 
          title="대상"
          text="암, 후천성면역결핍증, 만성 폐쇄성 호흡기질환, 만성 간경화 질환의 환자와 가족"
        />
        <Exwithhead 
          title="호스피스・완화의료 전문가팀"
          text="의사, 간호사, 사회복지사, 영적돌봄제공자, 자원봉사자"
        />
        {/* <Exwithhead 
          title="서비스 내용"
          text="① 평가: 신체적, 심리사회적, 영적 평가 및지지, ② 치료: 통증, 구토, 호흡곤란, 복수 등 증상 적극적 치료, ③ 임종돌봄: 환자 및 사별가족 돌봄 포함"
        /> */}
        <View style={styles.exliststyle}>
          <View style = {styles.exviewstyle}>
            <FontAwesome name="square" size={17} color="black" style={{alignSelf:'center'}}/>
            <Text style={styles.extitlestyle}>
              서비스 내용
            </Text>
          </View>
          <Text style={styles.extextstyle}>
          - 통증 및 기타 신체적 증상 완화
          </Text> 
          <Text style={styles.extextstyle}>
          - 환자 및 가족의 심리/사회/영적 문제 상담
          </Text>
          <Text style={styles.extextstyle}>
          - 환자와 가족 교육(환자를 돌보는 방법, 증상 조절 등)
          </Text>
          <Text style={styles.extextstyle}>
          - 환자와 희망하는 치료에 대한 사전계획
          </Text>
          <Text style={styles.extextstyle}>
          - 호스피스 자원봉사자의 돌봄 봉사
          </Text>  
          <Text style={styles.extextstyle}>
          - 사별가족 돌봄 서비스
          </Text>  
        </View>
        {/* <Exwithhead 
          title="호스피스 서비스 유형"
          text="입원형, 자문형, 가정형"
        /> */}
        <ExonlyHead 
          title="호스피스 서비스 유형"
        />
        <Numhead 
          text2 = 'numeric-1-circle-outline'
          title="입원형 호스피스"
          text="- 보건복지부 지정 호스피스전문기관 병동에 입원한 말기암 환자와 가족들에게 호스피스·완화의료 서비스 제공."
        />
        <Numhead 
          text2 = 'numeric-2-circle-outline'
          title="가정형 호스피스"
          text="- 가정에서 지내기를 원하는 말기 환자와 가족에게 보건복지부 지정 전문 기관의 호스피스 팀이 가정으로 방문하여 호스피스·완화의료 서비스 제공."
        />
        <Numhead 
          text2 = 'numeric-3-circle-outline'
          title="자문형 호스피스"
          text="- 일반 병동과 외래에서 진료를 받는 말기 환자와 가족에게 호스피스 팀이 담당 의사와 함께 호스피스·완화의료 서비스 제공."
        />
        
        <View style={styles.exliststyle}>
          <View style = {styles.exviewstyle}>
          <MaterialCommunityIcons name='numeric-4-circle-outline' size={20} color="black" style={{alignSelf:'center'}}/>
            <Text style={styles.extitlestyle}>
              소아청소년 완화의료
            </Text>
          </View>
          <Text style={styles.extextstyle}>
          - 생명을 위협하는 질환으로 치료받는 소아청소년 환자와 가족이 치료 과정에서 겪는 여러 가지 증상, 불편, 스트레스 등 신체적, 심리적, 사회적 어려움을 완화시키고 삶의 질 향상에 기여하는 통합적 의료 서비스.
          </Text> 
          <Text style={styles.extextstyle}>
          - 생명을 위협하는 질환에 걸린 소아청소년 환자와 그 가족 중에서 완화의료가 필요하다고 판단되는 경우로 성인 호스피스와 달리 진단 병명이나 질병 단계에 제한이 없음(현재는 만 24세 이하인 환자에 한해 시범 운영 중).
          </Text> 
        </View>
        {/* <Exwithhead 
          title="호스피스 의료비"
          text="암환자는 중증질환으로 본인부담 5%가 적용되며, 병원급 이상 1인실 상급병실 차액만 비급여로 납부."
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
        /> */}
      </ScrollView> 
      <Buttonlist 
        title="다음"
        routename="eduhos2"
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
 },
 exliststyle:{
  marginHorizontal : 20,
  marginVertical : 15,
  borderWidth : 1,
  borderColor : 'white',
  color : 'white',
  backgroundColor : 'white',
  // paddingVertical: 30,
  // paddingHorizontal : 20,
  padding : 10
},
extextstyle: {
  fontSize:20,
  color:'black',
  //paddingHorizontal: 10,
  flex:1,
  margin : 5,
  //alignSelf: 'center'
  textAlign: 'auto',
  lineHeight:30
},

extitlestyle:{
  alignSelf : 'center',
  //marginLeft : 10,
  fontSize:20,
  fontWeight : 'bold',
  marginLeft : 10,
  // borderColor : 'black',
  // borderWidth : 1
},
exviewstyle: {
  flexDirection : 'row',
  marginBottom : 10,
  alignContent : 'center',
  // borderColor : 'black',
  // borderWidth : 1
}
});

export default eduhos1;