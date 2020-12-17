import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';
import {Button} from 'react-native-elements'
import Titlelist from '../components/Titlelist';
import Buttonlist from '../components/Buttonlist';

/**
 * 
 *  저는 보건복지부 지정을 받은 사전연명의료의향서 등록기관인 [기관명] 소속 상담사이며, 의향서 작성을 돕고 있습니다. 
   [상담자 신분증과 등록기관 지정서 제시
 */

const counselid3 = ({navigation}) => {
  return (
    <ScrollView>
      <View style = {styles.viewstyle}>
        <Titlelist 
          title="[맞춤상담방법 판단 알고리즘]"
          imageSource={require('../../assets/algo.png')} 
        />
        <Buttonlist 
          title="다음"
          routename="counselid4"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewstyle:{
    flex:1,
    justifyContent : 'center'
  }
});

export default counselid3;