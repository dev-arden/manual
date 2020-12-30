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

const foreignintro3 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="추가 설명"
      />
      <ScrollView style={{flex:2}}>
        <Textlist 
          text="향후 담당의사 1인 및 전문의 1인에 의해 임종과정에 있는 환자라는 판단을 받는 경우, 미리 작성해 둔 사전연명의료의향서가 있다면 의사의 확인을 거쳐 연명의료에 관한 작성자 본인의 의사로 인정될 수 있음을 설명한다."
        />
      </ScrollView>
      <Buttonlist 
        title="확인"
        routename="foreignintro2"
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

export default foreignintro3;