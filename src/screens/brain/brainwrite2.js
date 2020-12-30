import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../../components/Textlist';
import Buttonlist from '../../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Imagelist from "../../components/Imagelist";
import NavLink from '../../components/NavLink';

/**
 * (작성 후 작성된 서식에 오기나 빠진 부분 또는 확인이 어려운 정보가 없는지 확인 한 후)
 * 사전연명의료의향서 작성이 완료되었습니다. 
 * 이후 궁금한 점이 있으시면 저희 등록기관이나 국립연명의료관리기관으로 연락주시면 친절하게 안내받으실 수 있습니다. 
 */

const brainwrite2 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="작성 후 확인과 완료"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../../assets/write2.jpg')}
        />
        <Textlist 
          text="인지기능저하로 인해 자발적인 자기결정인지 가족이나 타인의 권유에 의한 결정인지 명확히 판단하기 어려운 상황이므로 현재는 심각한 인지기능저하를 가진 성인에게 사전연명의료의향서를 받고 있지는 않습니다."
        />
        <Textlist 
          text="그러나 인지기능저하 대상자의 고통스러운 임종기간 연장을 피하려고 법적 보호자인 가족이 사전에 이러한 정보를 미리 습득하여 충분히 대상자와 함께 숙고하여 의향서를 진행할 수 있도록 노력하겠습니다."
        />
        <NavLink 
          text="추가 설명 확인하기"
          routeName="brainwrite23"
        />
      </ScrollView> 
      <Buttonlist
        title = "다음"
        routename = "brainwrite3"
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

export default brainwrite2;