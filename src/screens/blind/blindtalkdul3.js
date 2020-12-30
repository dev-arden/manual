import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../../components/Textlist';
import Buttonlist from '../../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';


/**
 * 
 *  저는 보건복지부 지정을 받은 사전연명의료의향서 등록기관인 [기관명] 소속 상담사이며, 의향서 작성을 돕고 있습니다. 
   [상담자 신분증과 등록기관 지정서 제시
 */

const blindtalkdul3 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="추가 설명"
      />
      <ScrollView style={{flex:2}}>
        <Textlist 
        text="호스피스 서비스를 이용할 의향이 있다 하더라도 반드시 이용할 수 있는 것은 아니며 연명의료결정법 제28조에 따른 별도의 호스피스 서비스 신청 절차를 거쳐야 함을 설명한다."
       />
       <Textlist 
        text="단, 지금 결정하는 것이 아니며 이용 의향이 있다면 향후 의사가 한 번 더 확인할 때 결정하면 된다."
       />
       <Textlist 
        text="호스피스를 이용하려는 경우에는 호스피스 이용동의서와 의사가 발급하는 호스피스 대상 환자임을 나타내는 의사소견서를 첨부하여 호스피스전문기관에 신청"
       />
       <Textlist 
        text="호스피스 이용 시 경제적 부담에 대해 간단히 설명한다.(본인부담금 5%, 이용기간, 대략적 본인부담금)"
       />
      </ScrollView>
      <Buttonlist 
        title="확인"
        routename="blindtalkdul2"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewstyle:{
    flex:1,
    justifyContent : 'center'
  }
});

export default blindtalkdul3;