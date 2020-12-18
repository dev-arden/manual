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
 * 의향서가 작성되어 등록된 후에 연명의료계획서가 다시 작성된 경우에는 연명의료계획서 작성 이후부터 의향서가 효력을 잃게 됩니다. 
 */

const counseltalkset2 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="사전연명의료의향서의 효력"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../assets/maintain.png')}
        />
        <Textlist 
          text="의향서가 작성되어 등록된 후에 연명의료계획서가 다시 작성된 경우에는 연명의료계획서 작성 이후부터 의향서가 효력을 잃게 됩니다."
        />
      </ScrollView> 
      <Buttonlist
        title = "다음"
        routename = "counseltalkset3"
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

export default counseltalkset2;