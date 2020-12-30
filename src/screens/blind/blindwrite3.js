import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../../components/Textlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Imagelist from "../../components/Imagelist";
import NavLink from '../../components/NavLink';
import ButtonFinish from '../../components/ButtonFinish';

/**
 * 이제 의향서를 등록하고자 합니다. 
 * 혹 더 궁금한 사항 있으신가요?
 * 작성된 의향서는 국립연명의료관리기관의 연명의료정보처리시스템에 저장이 됩니다. 
 * 그리고 지금까지 나누었던 상담내용 및 모든 정보는 저장되거나 유출되지 않습니다. 
 */

const blindwrite3 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="등록 설명"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../../assets/write3.jpg')}
        />
        <Textlist 
          text="이제 사전연명의료의향서를 등록하고자 합니다."
        />
        <Textlist 
          text="혹시 더 궁금한 사항 있으신가요?"
        />
        <Textlist 
          text="작성된 의향서는 국립연명의료관리기관의 연명의료정보처리시스템에 저장이 됩니다."
        />
        <Textlist 
          text="그리고 지금까지 나누었던 상담내용 및 모든 정보는 저장되거나 유출되지 않습니다."
        />
        <NavLink 
          text="추가 설명 확인하기"
          routeName="blindwrite4"
        />
      </ScrollView> 
      <ButtonFinish 
        routename="blindmanual"
        routename2="blindenter1"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewstyle : {
    flex:1,
    justifyContent : 'center'
  }
});

export default blindwrite3;