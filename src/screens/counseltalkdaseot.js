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
 * 등록된 사전연명의료의향서는 작성자 본인의 의사가 변경 된 경우 언제든지 변경 또는 철회가 가능합니다 . 
변경 또는 철회를 원하시는 경우, 신분증을 가지고 가까운 등록기관에 방문하셔서 변경 의사 를 밝히고 변경된 내용으로 재작성이 가능하고, 철회를 원하시는 경우 철회신청이 가능합니다. 
철회된 경우 해당 기록은 말소됩니다.
 */

const counseltalkdaseot = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="변경,철회"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../assets/maintain.png')}
        />
        <Textlist 
          text="등록된 사전연명의료의향서는 작성자 본인의 의사가 변경 된 경우 언제든지 변경 또는 철회가 가능합니다."
        />
        <Textlist 
          text="변경 또는 철회를 원하시는 경우, 신분증을 가지고 가까운 등록기관에 방문하셔서 변경 의사 를 밝히고 변경된 내용으로 재작성이 가능하고, 철회를 원하시는 경우 철회신청이 가능합니다."
        />
        <Textlist 
          text="철회된 경우 해당 기록은 말소됩니다."
        />
      </ScrollView> 
      <Buttonlist
        title = "완료"
        routename = "counseltalk7"
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

export default counseltalkdaseot;