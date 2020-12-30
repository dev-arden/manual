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

const langid4 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="추가 설명"
      />
      <ScrollView style={{flex:2}}>
        <Textlist 
          text="사전연명의료의향서는 19세 이상 본인이 직접 작성해야 하므로 신분증(주민등록증, 운전면허증, 장애인 등록증, 여권, 외국인 등록증)을 확인한다."
        />
        <Textlist 
          text="장애인 등록증은 주민등록번호 기재여부, 여권과 외국인 등록증은 유효기간을 확인한다."
        />
      </ScrollView>
      <Buttonlist 
        title="확인"
        routename="langid"
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

export default langid4;