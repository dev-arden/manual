import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Buttonlist from '../components/Buttonlist';
import Textlist from '../components/Textlist';
import Titlelist from '../components/Titlelist';

const counseltalkhana = () => {
  return(
    <ScrollView>
      <View style={styles.viewstyle}> 
        <Titlelist 
          title="설명사항"
          imageSource={require('../../assets/hana1.png')}
        />
        <Textlist 
          text="연명의료의 시행 방법 및 연명의료 중단 등 결정에 관한 사항에 대해 상담그림카드로 설명드리겠습니다."
        />
        <Buttonlist 
          title="다음"
          routename="counseltalkhana2"
        />
      </View>
    </ScrollView>      
  )
};

const styles = StyleSheet.create({
  viewstyle : {
    flex:1,
    justifyContent : 'center'
  }
});

export default counseltalkhana;