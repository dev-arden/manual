import React from 'react';
import {View, StyleSheet} from 'react-native';
import Buttonlist from "../components/Buttonlist";
import TitleImage from "../components/TitleImage";
import { SafeAreaView } from 'react-native';
import Titletwo from '../components/Titletwo';

const counselid1 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titletwo 
        title="5단계"
        text="작성자 본인 및 의사결정능력 확인"
      />
      <View style={{flex:2, justifyContent:'center'}}>
        <TitleImage 
          imageSource = {require('../../assets/id1.jpg')}
          style={{justifyContent:'center'}}
        /> 
      </View>
      <Buttonlist 
        title = "다음"
        routename = "counselid"
      />
    </SafeAreaView>
  );
};

const styles=StyleSheet.create({

});

export default counselid1;