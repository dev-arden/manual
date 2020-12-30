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

const foreigntalknet2 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="추가 설명"
      />
      <ScrollView style={{flex:2}}>
        <Textlist 
          text="작성된 의향서는 등록기관에 등록되어 등록기관 폐업·휴업 또는 지정 취소 전까지 보관되고, 연명의료 정보처리시스템(intra.lst.go.kr)에 통보되어 영구적으로 관리됨을 설명한다."
        />
        <Textlist 
          text="작성된 의향서는 환자 본인 또는 작성자가 말기 또는 임종과정에 있을 경우 담당의사에 의해 조회될 수 있음을 설명한다."
        />
        <Textlist 
          text="작성자가 사망 전에 가족이 자신의 사전연명의료의향서를 열람하는 것을 원치 않을 경우 그 뜻을 미리 밝혀 놓을 수 있음을 안내한다."
        />
      </ScrollView>
      <Buttonlist 
        title="확인"
        routename="foreigntalknet"
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

export default foreigntalknet2;