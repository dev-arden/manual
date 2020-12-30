import React from 'react';
import {View, StyleSheet} from 'react-native';
import Buttonlist from "../../components/Buttonlist";
import TitleImage from "../../components/TitleImage";
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';

const disableid3 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="맞춤상담방법판단 알고리즘"
      />
      <View style={{flex:2, justifyContent:'center'}}>
        <TitleImage 
          imageSource = {require('../../../assets/id3.jpg')}
          style={{justifyContent:'center'}}
        /> 
      </View>
      <Buttonlist 
        title = "다음"
        routename = "disableid5"
      />
    </SafeAreaView>
  );
};

const styles=StyleSheet.create({

});

export default disableid3;