import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Buttonlist from '../../components/Buttonlist';
import Exwithhead from '../../components/Exwithhead';
import ExImage from '../../components/ExImage';

/**
 * 이제 의향서를 등록하고자 합니다. 
 * 혹 더 궁금한 사항 있으신가요?
 * 작성된 의향서는 국립연명의료관리기관의 연명의료정보처리시스템에 저장이 됩니다. 
 * 그리고 지금까지 나누었던 상담내용 및 모든 정보는 저장되거나 유출되지 않습니다. 
 */

const edusup1 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="사전연명의료의향서 작성지원 절차"
      />
      <ScrollView style={{flex:2}}>
        <ExImage 
          title="등록기관의 의향서 상담 작성 지원 단계"
          text=""
          imageSource={require('../../../assets/edusup1.png')}
          imageStyle={{height : 150, width : 330, resizeMode:'contain'}}
        />
        <Exwithhead 
          title="1단계"
          text="사전연명의료의향서 상담을 위한 준비,독립된 상담실로 안내"
        />
        <Exwithhead 
          title="2단계"
          text="등록기관 및 상담자 소개"
        />
        <Exwithhead 
          title="3단계"
          text="의향서 및 제도 소개"
        />
        <Exwithhead 
          title="4단계"
          text="의향서 작성 의사 확인"
        />
        <Exwithhead 
          title="5단계"
          text="작성자 본인 및 의사결정 능력 확인"
        />
        <Exwithhead 
          title="6단계"
          text="의향서 작성을 위한 항목 설명"
        />
        <Exwithhead 
          title="7단계"
          text="의향서 작성"
        />
        <Exwithhead 
          title="8단계"
          text="등록카드 발급 여부 확인"
        />
        <Exwithhead 
          title="9단계"
          text="작성된 의향서 등록 및 통보 안내"
        />
        <Exwithhead 
          title="10단계"
          text="의향서 작성 완료 안내"
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
    //borderWidth:1,
    backgroundColor: 'white',
    marginHorizontal : 20,
    marginVertical : 15,
  }
});

export default edusup1;