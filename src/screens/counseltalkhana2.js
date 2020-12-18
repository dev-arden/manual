import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Textlist from '../components/Textlist';
import Titlelist from '../components/Titlelist';
import Buttonlist from '../components/Buttonlist';
import { ScrollView } from 'react-native-gesture-handler';

const counseltalkhana2 = () => {
  return(
    <ScrollView>
      <View style={styles.viewstyle}> 
        <Titlelist 
          title="설명사항"
          imageSource={require('../../assets/hana2.png')}
        />
        <Textlist 
          text="연명의료로 수행되는 심폐소생술은 심장과 폐기능이 사라진 경우에 가슴부위를 압박하여 일시적으로 기능하게 하는 것으로 부작용으로 갈비뼈 골절 등이 있습니다."
        />
        <Buttonlist 
          title="다음"
          routename="counseltalkhana3"
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

export default counseltalkhana2;