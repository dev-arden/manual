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
          title="간편인지검사"
          imageSource={require('../../assets/test.png')} 
        />
        <Textlist 
          text="이 질문은 사전연명의료의향서는 직접 작성하기 위해 필요한 의사결정능력을 판단하기 위한 간단한 질문입니다."
        />
        <Textlist 
          text="(위 질문 물음)"
        />
        <Buttonlist 
          title="완료"
          routename="manual1"
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