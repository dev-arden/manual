import React from 'react';
import {View, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Titlelist from '../components/Titlelist';
import Buttonlist from '../components/Buttonlist';
import Textlist from '../components/Textlist';

/**
 * 
 *  저는 보건복지부 지정을 받은 사전연명의료의향서 등록기관인 [기관명] 소속 상담사이며, 의향서 작성을 돕고 있습니다. 
   [상담자 신분증과 등록기관 지정서 제시
 */

const counselid4 = ({navigation}) => {
  return (
    <ScrollView>
      <View style = {styles.viewstyle}>
        <Titlelist 
          title="[맞춤상담방법 판단 알고리즘]"
          imageSource={require('../../assets/algo1.png')}
        />
        <Textlist 
          text="저희는 OOO님께서 편안하게 상담받으시도록 다양한 방법으로 맞춤형 상담을 드리고 있습니다."
        />
        <Textlist 
          text="앞이 잘 안보이시거나, 소리가 잘 안들리시거나, 글을 잘 읽으실 수 없거나 무엇이든지 불편한 점이 있으시면 알려주시기 바랍니다."
        />
        <Buttonlist 
          title="다음"
          routename="counselid5"
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

export default counselid4;