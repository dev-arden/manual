import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Textlist from '../components/Textlist';
import Titlelist from '../components/Titlelist';
import Buttonlist from '../components/Buttonlist';
import { ScrollView } from 'react-native-gesture-handler';

const counseltalkhana10 = () => {
  return(
    <ScrollView>
      <View style={styles.viewstyle}> 
        <Titlelist 
          title="설명사항"
          imageSource={require('../../assets/hana6.png')}
        />
        <Textlist 
          text="이 밖에 항암제, 수혈, 혈관을 수축시키는 등 담당의사가 판단하여 치료효과없이 임종과정의 기간만을 연장하는 시술들이 있습니다."
        />
        <Textlist 
          text="이러한 연명의료를 OOO님께서 만일 죽음에 임박하셨을 때 치료 효과 없이 임종과정의 기간만 연장하게 된다는 담당의사의 의학적 판단이 있는 경우 시행하지 않거나 중단하겠다는 의사를 미리 결정해 두는 것입니다."
        />
        <Buttonlist 
          title="다음"
          routename="counseltalkhana11"
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

export default counseltalkhana10;