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
 * 
 * 사전연명의료의향서의 작성, 등록, 보관 및 통보에 관한 사항에 대하여 설명드리겠습니다.
사전연명의료의향서가 작성되면, 저희 등록기관이 사전연명의료의향서의 내용이 빠짐없이 잘 작성되었는지 확인한 후 국립연명의료관리기관의 연명의료정보처리시스템에 등록하게 됩니다. 
 */

const foreigntalknet = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="사전연명의료의향서의 작성, 등록, 보관 및 통보에 관한 사항"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../../assets/talknet.jpg')}
        />
        <Textlist 
          text="사전연명의료의향서의 작성, 등록, 보관 및 통보에 관한 사항에 대하여 설명드리겠습니다."
        />
        <Textlist 
          text="사전연명의료의향서가 작성되면, 저희 기관이 사전연명의료의향서의 내용이 빠짐없이 잘 작성되었는지 확인한 후 국립연명의료관리기관의 연명의료정보처리시스템에 등록하게 됩니다."
        />
        <Textlist 
          text="작성된 의향서는 국립연명의료관리기관 정보처리시스템으로 통보되어 영구적으로 관리됩니다."
        />
        <Textlist 
          text="작성된 의향서는 환자 본인이 언제든지 조회하시거나 열람하실 수 있고, 나중에 작성자가 말기 또는 임종과정에 있을 경우 담당의사에 의해 조회될 수 있습니다."
        />
        <Textlist 
          text="만약, 사망 전에 가족이 작성자가 작성한 사전연명의료의향서를 열람하는 것을 원치 않을 경우 의향서에 원하지 않는다고 작성할 수 있습니다."
        />
        <NavLink 
          text="추가 설명 확인하기"
          routeName="foreigntalknet2"
        />
      </ScrollView> 
      <Buttonlist
        title = "다음"
        routename = "foreigntalkdaseot1"
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

export default foreigntalknet;