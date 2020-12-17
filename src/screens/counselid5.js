import React from 'react';
import {View, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Titlelist from '../components/Titlelist';
import Textlist from '../components/Textlist';
import Buttonlist from '../components/Buttonlist';

/**
 * 
 *  저는 보건복지부 지정을 받은 사전연명의료의향서 등록기관인 [기관명] 소속 상담사이며, 의향서 작성을 돕고 있습니다. 
   [상담자 신분증과 등록기관 지정서 제시
 */

const counselid5 = ({navigation}) => {
  return (
    <ScrollView>
      <View style = {styles.viewstyle}>
        <Titlelist 
          title="[간편인지검사]"
          imageSource={require('../../assets/test.png')} 
        />
        <Textlist 
          text="다음은 간편하게 OOO님의 판단력을 알아보겠습니다."
        />
        <Textlist 
          text="다음의 질문에 대답해주세요."
        />
        <Buttonlist 
          title="다음"
          routename="counselid6"
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

export default counselid5;