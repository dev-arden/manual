import React from 'react';
import {View, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../components/Textlist';
import Titlelist from '../components/Titlelist';
import Buttonlist from '../components/Buttonlist';

/**
 * 
 *  저는 보건복지부 지정을 받은 사전연명의료의향서 등록기관인 [기관명] 소속 상담사이며, 의향서 작성을 돕고 있습니다. 
   [상담자 신분증과 등록기관 지정서 제시
  [사전연명의료의향서 작성의사 확인]
 */

const counselmean3 = ({navigation}) => {
  return (
    <ScrollView>
      <View style = {styles.viewstyle}>
        <Titlelist
          title = "[사전연명의료의향서 작성]"
          imageSource = {require('../../assets/care2.png')} 
        />
        <Textlist
          text = "작성은 무료이고 언제든지 변경하거나 취소할 수 있고,본인 동의없이 다른 사람은 내용을 알 수 없습니다." 
        />
        <Buttonlist
          title = "다음"
          routename = "counselmean4"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewstyle:{
    flex:1,
    justifyContent : 'center'
  },
  liststyle: {
    marginHorizontal : 20,
    marginVertical : 15,
    fontSize : 20,
    borderWidth : 1,
    borderColor : 'white',
    color : 'white',
    backgroundColor : 'white',
    paddingVertical: 30,
    paddingHorizontal : 20,
    flexDirection : 'row'
  }
});

export default counselmean3;