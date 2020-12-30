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

const deafwrite2 = () => {
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
          text="향후 OOO님이 사전연명의료의향서를 직접 작성했다는 것을 구두로 남기시면 이후 작성에 대한 적법성에 문제 제기가 될 때 OOO님의 본인이 직접 스스로 결정에 의한 것임을 확인할 수 있습니다."
        />
        <Textlist 
          text="구두로 남기시겠습니까?"
        />
        <Textlist 
          text="(동의하는 경우 아래와 같이 진행, 미동의 시 의향서 작성 완료)"
        />
        <Textlist 
          text="(동의) 그렇다면 제가 말하는 것을 따라서 말씀해주세요."
        />
        <Textlist 
          text="‘나 OOO은 연명의료를 시행하지 않거나 중단 등에 동의합니다’"
        />
        <Textlist 
          text="네 완료하였습니다."
        />
        <Textlist 
          text="지금 구두로 하신 말씀을 함께 저장하겠습니다."
        />
        <Textlist 
          text="(미동의) OOO님께서는 구두로 동의한 내용을 녹음하는 것에 대해 동의하지 않으셨습니다."
        />
        <Textlist 
          text="그러므로 의향서에 수기로 서명한 내용으로 동의를 대신하겠습니다."
        />
        <Textlist 
          text="이제 OOO님의 사전연명의료의향서 작성이 완료되었습니다."
        />
        <Textlist 
          text="이후 궁금한 점이 있으시면 저희 등록기관이나 국립연명의료관리기관으로 연락주시면 친절하게 안내받으실 수 있습니다."
        />
        <NavLink 
          text="추가 설명 확인하기"
          routeName="deafwrite23"
        />
      </ScrollView> 
      <Buttonlist
        title = "다음"
        routename = "deafwrite3"
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

export default deafwrite2;