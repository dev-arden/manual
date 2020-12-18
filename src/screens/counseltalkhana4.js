import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Textlist from '../components/Textlist';
import Titlelist from '../components/Titlelist';
import Buttonlist from '../components/Buttonlist';
import { ScrollView } from 'react-native-gesture-handler';

const counseltalkhana4 = () => {
  return(
    <ScrollView>
      <View style={styles.viewstyle}> 
        <Titlelist 
          title="설명사항"
          imageSource={require('../../assets/hana4.png')}
        />
        <Textlist 
          text="체외생명유지술은 모든 혈액을 몸 밖으로 빼내어 에크모라는 기계로 통과시켜 산소를 공급하고 다시 몸으로 넣는 방법입니다."
        />
        <Buttonlist 
          title="다음"
          routename="counseltalkhana5"
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

export default counseltalkhana4;