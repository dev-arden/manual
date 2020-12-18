import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Textlist from '../components/Textlist';
import Titlelist from '../components/Titlelist';
import Buttonlist from '../components/Buttonlist';
import { ScrollView } from 'react-native-gesture-handler';

const counseltalkhana3 = () => {
  return(
    <ScrollView>
      <View style={styles.viewstyle}> 
        <Titlelist 
          title="설명사항"
          imageSource={require('../../assets/hana3.png')}
        />
        <Textlist 
          text="인공호흡기는 폐기능이 사라진 경우에 코나 입으로 관을 삽입하여 기계에 연결하여 기계가 폐를 대신하는 것입니다."
        />
        <Buttonlist 
          title="다음"
          routename="counseltalkhana4"
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

export default counseltalkhana3;