import React from 'react';
import {View, StyleSheet} from 'react-native';
import Buttonlist from "../../components/Buttonlist";
import TitleImage from "../../components/TitleImage";
import { SafeAreaView } from 'react-native';
import Titletwo from '../../components/Titletwo';

const blindinfo1 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titletwo 
        title="2단계"
        text="등록기관 및 상담자 소개"
      />
      <View style={{flex:2, justifyContent:'center'}}>
        <TitleImage 
          imageSource = {require('../../../assets/info1.jpg')}
          style={{justifyContent:'center'}}
        /> 
      </View>
      <Buttonlist 
        title = "다음"
        routename = "blindinfo"
      />
    </SafeAreaView>
  );
};

const styles=StyleSheet.create({

});

export default blindinfo1;