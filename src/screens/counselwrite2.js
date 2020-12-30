import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../components/Textlist';
import Buttonlist from '../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../components/TitlewithoutImage';
import Imagelist from "../components/Imagelist";
import NavLink from '../components/NavLink';

/**
 * (작성 후 작성된 서식에 오기나 빠진 부분 또는 확인이 어려운 정보가 없는지 확인 한 후)
 * 사전연명의료의향서 작성이 완료되었습니다. 
 * 이후 궁금한 점이 있으시면 저희 등록기관이나 국립연명의료관리기관으로 연락주시면 친절하게 안내받으실 수 있습니다. 
 */

const counselwrite2 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="작성 후 확인과 완료"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../assets/write2.jpg')}
        />
        <Textlist 
          text="내용을 잘 작성하셨는지 저와 함께 확인하겠습니다."
        />
        <Textlist 
          text="(작성자 성명부터 작성일, 작성자 서명까지 꼼꼼하게 함께 확인함)"
        />
        <Textlist 
          text="사전연명의료의향서 작성이 완료되었습니다."
        />
        <Textlist 
          text="이후 궁금한 점이 있으시면 저희 등록기관이나 국립연명의료관리기관으로 연락주시면 친절하게 안내받으실 수 있습니다."
        />
        <NavLink 
          text="추가 설명 확인하기"
          routeName="counselwrite23"
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