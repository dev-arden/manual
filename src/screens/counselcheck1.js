import React from 'react';
import {View, StyleSheet} from 'react-native';
import Buttonlist from "../components/Buttonlist";
import TitleImage from "../components/TitleImage";
import { SafeAreaView } from 'react-native';
import Titletwo from '../components/Titletwo';

const counselcheck1 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titletwo 
        title="4단계"
        text="사전연명의료의향서 작성 의사 확인"
      />
      <View style={{flex:2, justifyContent:'center'}}>
        <TitleImage 
          imageSource = {require('../../assets/check1.jpg')}
          style={{justifyContent:'center'}}
        /> 
      </View>
      <Buttonlist 
        title = "다음"
        routename = "counselcheck"
      />
    </SafeAreaView>
  );
};

const styles=StyleSheet.create({

});

export default counselcheck1;