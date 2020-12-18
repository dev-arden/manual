import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Textlist from '../components/Textlist';
import Titlelist from '../components/Titlelist';
import Buttonlist from '../components/Buttonlist';
import { ScrollView } from 'react-native-gesture-handler';

const counseltalkhana5 = () => {
  return(
    <ScrollView>
      <View style={styles.viewstyle}> 
        <Titlelist 
          title="설명사항"
          imageSource={require('../../assets/hana5.png')}
        />
        <Textlist 
          text="혈액투석은 혈액을 혈액투석기에 통과시켜 노폐물을 걸러내고 다시 몸속으로 집어 넣는 방법입니다."
        />
        <Buttonlist 
          title="다음"
          routename="counseltalkhana6"
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

export default counseltalkhana5;