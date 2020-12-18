import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../components/Textlist';
import Buttonlist from '../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../components/TitlewithoutImage';
import Imagelist from "../components/Imagelist";

/**
 * 사전연명의료의향서 작성 후에 등록증 발급을 원하시면, 작성자께서 원하시는 주소지로 등록증을 2개월 이내 배송해드립니다. 
 * 등록증이 없어도 사전연명의료의향서 등록기관과 컴퓨터를 통해 언제든지 작성자님의 의향서를 조회하실 수 있습니다. 
 * 임종과정에 있는 환자가 되었을 때 의료기관윤리위원회 설치 의료기관에서 담당의사가 작성자님의 의향서를 조회할 수 잇습니다.
 * 
 */

const counseltalknet2 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="작성, 등록, 보관, 통보"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../assets/maintain.png')}
        />
        <Textlist 
          text="사전연명의료의향서 작성 후에 등록증 발급을 원하시면, 작성자께서 원하시는 주소지로 등록증을 2개월 이내 배송해드립니다."
        />
        <Textlist 
          text="등록증이 없어도 사전연명의료의향서 등록기관과 컴퓨터를 통해 언제든지 작성자님의 의향서를 조회하실 수 있습니다."
        />
        <Textlist 
          text="임종과정에 있는 환자가 되었을 때 의료기관윤리위원회 설치 의료기관에서 담당의사가 작성자님의 의향서를 조회할 수 잇습니다."
        />
      </ScrollView> 
      <Buttonlist
        title = "다음"
        routename = "counseltalknet3"
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

export default counseltalknet2;