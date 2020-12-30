import React from 'react';
import {View, StyleSheet} from 'react-native';
import Buttonlist from "../../components/Buttonlist";
import TitleImage from "../../components/TitleImage";
import { SafeAreaView } from 'react-native';
import Titletwo from '../../components/Titletwo';

const blindintro1 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titletwo 
        title="3단계"
        text="사전연명의료의향서 소개"
      />
      <View style={{flex:2, justifyContent:'center'}}>
        <TitleImage 
          imageSource = {require('../../../assets/intro1.jpg')}
          style={{justifyContent:'center'}}
        /> 
      </View>
      <Buttonlist 
        title = "다음"
        routename = "blindintro"
      />
    </SafeAreaView>
  );
};

const styles=StyleSheet.create({

});

export default blindintro1;