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

const disablewrite12 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="추가 설명"
      />
      <ScrollView style={{flex:2}}>
      <Textlist 
          text="사전연명의료의향서 작성 전 설명사항 6가지 내용에 대한 이해를 확인한 후, 이에 대한 서명을 받는다."
        />
        <Textlist 
          text="호스피스 이용 의향 및 작성자 사망 전 열람 허용 여부에 대해 확인한다."
        />
        <Textlist 
          text="마지막으로 사전연명의료의향서 작성일을 기입하도록 하고, 작성자란에 성함과 서명을 받는다."
        />
      
        <Exwithhead 
          title="서식으로 작성하는 경우"
          text="직접 서명이 어려운 경우 녹화나 녹취 등으로 작성자 본인의 뜻임을 확인할 수 있는 경우에 한하여 대필을 통해 작성 가능하다. 상담자는 작성자의 명료한 의식과 자발적 의사를 확인하고 서식 뒷면에 대필했음과 사유를 기록한다. 단, 대필자의 인적사항도 기록이 필요하다. 상담자는 수기로 작성된 서식을 원본 스캔 파일로 등록해야 한다."
        />
        <Exwithhead 
          title="컴퓨터(PC)로 작성하는 경우"
          text="상담자는 등록기관의 PC 또는 개인 PC를 이용하여 연명의료 정보처리시스템(intra.lst.go.kr)에 공동인증서(구. 공인인증서)로 로그인하여 서식을 불러서 서식의 내용에 따라 작성을 지원함한다. 마지막으로 서명앱(스마트폰)을 통해 작성자가 서명하도록 안내한다."
        />
        <Exwithhead 
          title="태블릿 PC로 작성하는 경우"
          text="상담자는 연명의료 정보처리시스템(intra.lst.go.kr)에 로그인하여 서식을 불러 서식의 내용에 따라 작성을 지원한다. 마지막으로 작성자가 전자서명을 하도록 안내한다. 단, 전자서명 대신 녹화 또는 녹음도 가능하다."
        />
      </ScrollView>
      <Buttonlist 
        title="확인"
        routename="disablewrite"
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

export default disablewrite12;