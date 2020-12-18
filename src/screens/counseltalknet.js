import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../components/Textlist';
import Buttonlist from '../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../components/TitlewithoutImage';
import Imagelist from "../components/Imagelist";

/**
 * 
 * 사전연명의료의향서의 작성, 등록, 보관 및 통보에 관한 사항에 대하여 설명드리겠습니다.
사전연명의료의향서가 작성되면, 저희 등록기관이 사전연명의료의향서의 내용이 빠짐없이 잘 작성되었는지 확인한 후 국립연명의료관리기관의 연명의료정보처리시스템에 등록하게 됩니다. 
 */

const counseltalknet = () => {
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
          text="사전연명의료의향서의 작성, 등록, 보관 및 통보에 관한 사항에 대하여 설명드리겠습니다."
        />
        <Textlist 
          text="사전연명의료의향서가 작성되면, 저희 등록기관이 사전연명의료의향서의 내용이 빠짐없이 잘 작성되었는지 확인한 후 국립연명의료관리기관의 연명의료정보처리시스템에 등록하게 됩니다."
        />
      </ScrollView> 
      <Buttonlist
        title = "다음"
        routename = "counseltalknet2"
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

export default counseltalknet;