import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../components/Textlist';
import Titlelist from '../components/Titlelist';
import Buttonlist from '../components/Buttonlist';


const counselmean5 = () => {
  return (
    <ScrollView>
      <View style = {styles.viewstyle}>
        <Titlelist
          title = "[사전연명의료의향서 작성의사 확인]"
          imageSource = {require('../../assets/care4.png')} 
        />
        <Textlist
          text = "사전연명의료의향서는 OOO님이 자발적으로 작성하는 것이며 자발적 의사가 아닌 다른 이유로 고민되신다면 다시 한번 더 생각해보시길 바랍니다." 
        />
        <Textlist
          text = "작성하시겠다면 의향서 내용에 대하여 설명드리겠습니다." 
        />
        <Buttonlist
          title = "다음"
          routename = "counselmean6"
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

export default counselmean5;