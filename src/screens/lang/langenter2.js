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

const langenter2 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="추가 설명"
      />
      <ScrollView style={{flex:2}}>
      <Textlist 
          text="사전연명의료의향서의 등록이 완료되면 등록카드 수령 의사를 확인한다."
        />
        <Textlist 
          text="정보처리시스템에서 서식 등록 완료 후 등록카드 발급을 신청할 수 있다."
        />
        <Textlist 
          text="신청 후 발급기간은 몇 주가 소요됨을 안내한다."
        />
        <Textlist 
          text="등록카드는 지금이 아니더라도 언제든 발급신청을 할 수 있으며, 분실했을 때 재신청도 가능함을 안내한다."
        />
        <Textlist 
          text="작성된 주소지로 배송을 원하는지 확인한다."
        />
        <Textlist 
          text="등록카드 발급을 신청한 경우 정보처리시스템에서 서식 등록 완료 후 등록카드 발급을 신청할 수 있다."
        />
        <Exwithhead 
          title="신청 방법"
          text="정보처리시스템(intra.lst.go.kr)에서 서식 등록 완료 시 나타나는 우측 등록카드 신청 영역에서 ‘신청’ 버튼 클릭(기존 작성자의 등록카드 신청 시, 사전연명의료의향서 등록관리 → 작성자 확인 → 우측 ‘신청’ 버튼 클릭)"
        />
        <Textlist 
          text="등록자가 정보처리시스템(intra.lst.go.kr)에서 서식 등록 완료 시 메시지 화면(등록증을 발급받으시겠습니까?)이 열리고 발급 버튼을 누르면 된다. "
        />
        <Exwithhead 
          title="배송지 수정"
          text="‘우편번호’ 클릭 후 배송지 정보(주소) 수정 가능하며 해당 내용은 의향서에 반영되지 않는다."
        />
      </ScrollView>
      <Buttonlist 
        title="확인"
        routename="langenter"
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

export default langenter2;