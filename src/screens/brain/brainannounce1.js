import React from 'react';
import {View, StyleSheet} from 'react-native';
import Buttonlist from "../../components/Buttonlist";
import TitleImage from "../../components/TitleImage";
import { SafeAreaView } from 'react-native';
import Titletwo from '../../components/Titletwo';

const brainannounce1 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titletwo 
        title="9단계"
        text="작성된 사전연명의료의향서 등록통보 안내"
      />
      <View style={{flex:2, justifyContent:'center'}}>
        <TitleImage 
          imageSource = {require('../../../assets/announce1.jpg')}
          style={{justifyContent:'center'}}
        /> 
      </View>
      <Buttonlist 
        title = "다음"
        routename = "brainannounce"
      />
    </SafeAreaView>
  );
};

const styles=StyleSheet.create({

});

export default brainannounce1;