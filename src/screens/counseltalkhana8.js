import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Textlist from '../components/Textlist';
import Titlelist from '../components/Titlelist';
import Buttonlist from '../components/Buttonlist';
import { ScrollView } from 'react-native-gesture-handler';
import TitlewithoutImage from '../components/TitlewithoutImage';

const counseltalkhana8 = () => {
  return(
      <View style={styles.viewstyle}> 
        <TitlewithoutImage 
          title="[참조] 연명의료 시술의 종류"
        />

        <Buttonlist 
          title="다음"
          routename="counseltalkhana9"
        />
      </View>    
  )
};

const styles = StyleSheet.create({
  viewstyle : {
    flex:1,
    justifyContent : 'center'
  }
});

export default counseltalkhana8;