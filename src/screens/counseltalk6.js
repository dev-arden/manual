import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../components/Textlist';
import Buttonlist from '../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../components/TitlewithoutImage';
import Imagelist from "../components/Imagelist";

const counseltalk6 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="사전연명의료의향서 내용설명"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../assets/info.png')}
        />
        <Textlist 
          text="지금부터 작성자께서 사전연명의료의향서를 작성하는데 반드시 이해하셔야 하는 부분을 설명해드리겠습니다."
        />
        <Textlist 
          text="만약 설명하는 내용 중 이해가 되지 않는 내용이 있으면 말씀해주세요. 다시 천천히 설명 드리겠습니다."
        />
      </ScrollView> 
      <Buttonlist
        title = "다음"
        routename = "counseltalk7"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewstyle:{
    flex:1,
    justifyContent : 'center'
  },
});

export default counseltalk6;