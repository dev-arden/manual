import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../components/Textlist';
import Buttonlist from '../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../components/TitlewithoutImage';
import Imagelist from "../components/Imagelist";

/**
 * (작성 후 작성된 서식에 오기나 빠진 부분 또는 확인이 어려운 정보가 없는지 확인 한 후)
 * 사전연명의료의향서 작성이 완료되었습니다. 
 * 이후 궁금한 점이 있으시면 저희 등록기관이나 국립연명의료관리기관으로 연락주시면 친절하게 안내받으실 수 있습니다. 
 */

const counselwrite2 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="작성 후 확인"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../assets/noname.png')}
        />
        <Textlist 
          text="제가 내용을 잘 작성하셨는지 확인하겠습니다."
        />
        <Textlist 
          text="(작성 후 작성된 서식에 오기나 빠진 부분 또는 확인이 어려운 정보가 없는지 확인 한 후)"
        />
        <Textlist 
          text="사전연명의료의향서 작성이 완료되었습니다."
        />
        <Textlist 
          text="이후 궁금한 점이 있으시면 저희 등록기관이나 국립연명의료관리기관으로 연락주시면 친절하게 안내받으실 수 있습니다."
        />
      </ScrollView> 
      <Buttonlist
        title = "다음"
        routename = "counselwrite3"
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

export default counselwrite2;