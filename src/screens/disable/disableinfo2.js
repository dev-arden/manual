import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../../components/Textlist';
import Buttonlist from '../../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Exwithhead from '../../components/Exwithhead';
/**
 * 
 *  저는 보건복지부 지정을 받은 사전연명의료의향서 등록기관인 [기관명] 소속 상담사이며, 의향서 작성을 돕고 있습니다. 
   [상담자 신분증과 등록기관 지정서 제시
 */

const disableinfo2 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="추가 설명"
      />
      <ScrollView style={{flex:2}}>
        <Exwithhead 
          title="관련법률"
          text="[호스피스•완화의료 및 임종과정에 있는 환자의 연명의료결정에 관한 법률] 제11조 및 같은 법 시행규칙 제4조"
        />
        <Textlist 
          text="사전연명의료의향서 작성은 반드시 연명의료결정법에 따라 보건복지부의 지정을 받은 등록기관에서만 진행할 수 있고, 상담자는 국립연명의료관리기관의 교육을 이수한 자격을 갖춘 사람임을 알린다."
        />
        <Textlist 
          text="사전연명의료의향서 작성을 위해 등록기관을 방문한 자에게 상담자 신분 증명자료와 등록기관 지정서를 제시한다."
        />
      </ScrollView>
      <Buttonlist 
        title="확인"
        routename="disableinfo"
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

export default disableinfo2;