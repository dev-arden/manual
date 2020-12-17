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

const counselid7 = ({navigation}) => {
  return (
    <ScrollView>
      <View style = {styles.viewstyle}>
        <Titlelist 
          title="개인정보 이용동의서"
          imageSource={require('../../assets/agree2.png')} 
        />
        <Textlist 
          text="사전연명의료의향서 작성, 등록, 등록카드 발송을 위해 OOO님의 개인정보를 수집이용하고자 합니다."
        />
        <Textlist 
          text="다음의 내용을 충분히 읽어보신 후 동의해주시기 바랍니다."
        />
        <Buttonlist 
          title="다음"
          routename="counselid8"
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

export default counselid7;