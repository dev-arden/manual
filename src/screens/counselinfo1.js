import React from 'react';
import {View, StyleSheet} from 'react-native';
import Buttonlist from "../components/Buttonlist";
import TitleImage from "../components/TitleImage";
import { SafeAreaView } from 'react-native';
import Titletwo from '../components/Titletwo';

const counselinfo1 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titletwo 
        title="2단계"
        text="등록기관 및 상담자 소개"
      />
      <View style={{flex:2, justifyContent:'center'}}>
        <TitleImage 
          imageSource = {require('../../assets/noname.png')}
          style={{justifyContent:'center'}}
        /> 
      </View>
      <Buttonlist 
        title = "다음"
        routename = "counselinfo"
      />
    </SafeAreaView>
  );
};

const styles=StyleSheet.create({

});

export default counselinfo1;