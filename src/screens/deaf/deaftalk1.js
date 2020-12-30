import React from 'react';
import {View, StyleSheet} from 'react-native';
import Buttonlist from "../../components/Buttonlist";
import TitleImage from "../../components/TitleImage";
import { SafeAreaView } from 'react-native';
import Titletwo from '../../components/Titletwo';

const deaftalk1 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titletwo 
        title="6단계"
        text="사전연명의료의향서 작성을 위한 항목설명"
      />
      <View style={{flex:2, justifyContent:'center'}}>
        <TitleImage 
          imageSource = {require('../../../assets/talk1.jpg')}
          style={{justifyContent:'center'}}
        /> 
      </View>
      <Buttonlist 
        title = "다음"
        routename = "deaftalk"
      />
    </SafeAreaView>
  );
};

const styles=StyleSheet.create({

});

export default deaftalk1;