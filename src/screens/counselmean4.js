import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../components/Textlist';
import Titlelist from '../components/Titlelist';
import Buttonlist from '../components/Buttonlist';


const counselmean4 = () => {
  return (
    <ScrollView>
      <View style = {styles.viewstyle}>
        <Titlelist
          title = "[사전연명의료의향서 작성]"
          imageSource = {require('../../assets/care3.png')} 
        />
        <Textlist
          text = "또한 교통사고 등 갑작스런 사고로 인한 응급상황에서는 응급의료에 관한 법률에 따라 당연히 치료받습니다." 
        />
        <Buttonlist
          title = "다음"
          routename = "counselmean5"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewstyle:{
    flex:1,
    justifyContent : 'center'
  },
});

export default counselmean4;