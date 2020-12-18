import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../components/Textlist';
import Titlelist from '../components/Titlelist';
import Buttonlist from '../components/Buttonlist';
import Exwithhead from '../components/Exwithhead';
import Exlist from '../components/Exlist';


const counseltalk = () => {
  return (
    <ScrollView>
      <View style = {styles.viewstyle}>
        <Titlelist 
          title="[의향서 내용 설명]"
          imageSource={require('../../assets/talk1.png')}
        />
        <Textlist 
          text="사전연명의료의향서를 작성하기에 전에 지금부터 설명드리는 6가지 내용을 이해하셔야 됩니다."
        />
        <Textlist 
          text="지금까지 설명드린 부분도 있지만, 사전연명의료의향서에 대해 실제 이해하고 작성하는가에 대한 절차입니다."
        />
        <Textlist 
          text="설명 도중 이해가 되지 않는 내용이 있으면 말씀해주세요. 다시 설명드리겠습니다."
        />
        <Buttonlist
          title = "다음"
          routename = "counseltalk2"
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

export default counseltalk;