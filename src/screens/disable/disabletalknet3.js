import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../../components/Textlist';
import Buttonlist from '../../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Imagelist from "../../components/Imagelist";

/**
 * 
 * 작성된 의향서는 국립연명의료관리기관 정보처리시스템으로 통보되어 영구적으로 관리됩니다. 
 * 작성된 의향서는 환자 본인이 언제든지 조회 및 열람이 가능하고, 추후 작성자가 말기 또는 임정과정에 있을 경우 담당의사에 의해 조회 될 수 있습니다. 
만약, 사망 전에 가족이 작성자가 작성한 사전연명의료의향서를 열람하는 것을 원치 않을 경우 그 뜻을 미리 밝혀 놓을 수 있습니다. 
 */

const disabletalknet3 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="작성, 등록, 보관, 통보"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../../assets/noname.png')}
        />
        <Textlist 
          text="작성된 의향서는 국립연명의료관리기관 정보처리시스템으로 통보되어 영구적으로 관리됩니다."
        />
        <Textlist 
          text="작성된 의향서는 환자 본인이 언제든지 조회 및 열람이 가능하고, 추후 작성자가 말기 또는 임정과정에 있을 경우 담당의사에 의해 조회 될 수 있습니다."
        />
        <Textlist 
          text="만약, 사망 전에 가족이 작성자가 작성한 사전연명의료의향서를 열람하는 것을 원치 않을 경우 그 뜻을 미리 밝혀 놓을 수 있습니다."
        />
      </ScrollView> 
      <Buttonlist
        title = "완료"
        routename = "disabletalk7"
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

export default disabletalknet3;