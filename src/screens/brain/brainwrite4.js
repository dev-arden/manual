import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../../components/Textlist';
import Buttonlist from '../../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import ExonlyHead from '../../components/ExonlyHead';
import Exwithhead from '../../components/Exwithhead';

/**
 * 
 *  저는 보건복지부 지정을 받은 사전연명의료의향서 등록기관인 [기관명] 소속 상담사이며, 의향서 작성을 돕고 있습니다. 
   [상담자 신분증과 등록기관 지정서 제시
 */

const brainwrite4 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="추가 설명"
      />
      <ScrollView style={{flex:2}}>
      <ExonlyHead 
          title="가.등록"
        />
        <Textlist 
          text="등록기관은 작성된 사전연명의료의향서의 본인 작성 여부를 확인하고 작성된 사전연명의료의향서를 등록하여야 한다."
        />
        <Exwithhead 
          title="수기 작성 시"
          text="수기로 작성된 의향서에 등록기관에서 관리할 수 있도록 자체적으로 등록번호를 부여하여 등록한다. 수기로 작성된 사전연명의료의향서는 스캔하여 첨부한다."
        />
        <Exwithhead 
          title="정보처리시스템에서 작성 시"
          text="작성 완료와 동시에 등록 버튼을 누르면 원본이 서버 내에 등록된다."
        />
        <Exwithhead 
          title="태블릿 pc"
          text="등록자가 작성자의 이름, 생년월일 검색으로 작성된 문서를 찾아 등록한다"
        />

        <ExonlyHead 
          title="나.보관"
        />
        <Textlist 
          text="등록된 의향서는 등록기관 폐업·휴업 또는 지정 취소 전까지 보관하여야 한"
        />
        <Exwithhead 
          title="수기 작성 시"
          text="등록기관 내 잠금장치가 설치된 문서보관 설비에 원본을 보관한다"
        />
        <Exwithhead 
          title="정보처리시스템에서 작성 시"
          text="서버 내 저장 공간에 자동으로 보관‌된다"
        />
        <ExonlyHead 
          title="다.통보"
        />
        <Textlist 
          text="연명의료 정보처리시스템을 통해서 작성된 사전연명의료의향서를 관리기관에 통보하되, 작성한 지 일주일 이내에 통보해야 한다"
        />
        <Exwithhead 
          title="수기 작성 시"
          text="등록이 완료된 사전연명의료의향서를 스캔 등을 통해 전자화 문서로 변환한 후 시스템상으로 통보한다"
        />
        <Exwithhead 
          title="정보처리시스템에서 작성 시"
          text="작성-등록-통보의 과정이 자동으로 연결된다."
        />
        <Textlist 
          text="정보처리시스템을 통한 등록 및 통보 시스템 가이드라인을 참조한다."
        />
        <ExonlyHead 
          title="라.정보유출금지"
        />
        <Textlist 
          text="등록기관의 장, 상담자 및 등록자 등 등록기관에서 종사하거나 종사하였던 사람은 사전연명의료의향서의 상담 및 작성·등록·통보 과정에서 알게 된 정보를 유출할 수 없"
        />
        
        <Exwithhead 
          title="위반 시"
          text="3년 이하의 징역 또는 3천만 원 이하의 벌금(법 제39조제3항)"
        />
        <Exwithhead 
          title="양벌 규정"
          text="정보를 유출한 행위자 외에 그 법인에게도 행위자에게 부과한 것과 같은 내용의 벌금형을 부과한다. 단, 법인이 그 위반 행위를 방지하기 위하여 상당한 주의와 감독을 게을리하지 아니한 경우에는 제외한다."
        />
      </ScrollView>
      <Buttonlist 
        title="확인"
        routename="brainwrite3"
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

export default brainwrite4;