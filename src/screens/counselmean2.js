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
 */


const counselmean2 = ({navigation}) => {
  return (
    <ScrollView>
      <View style = {styles.viewstyle}>
        <Titlelist
          title = "[사전연명의료의향서 작성]"
          imageSource = {require('../../assets/care1.png')} 
        />
        <Textlist
          text = "사전연명의료의향서를 작성한다는 것은 더 이상의 치료방법 없이 죽음에 임박하게 되고 스스로가 판단할 수 없는 무의식 등의 상황이 될 때를 대비하여 미리 스스로 판단하여 그러한 상황이 되었을 때 생명만 유지하는 연명의료는 하지 않겠다고 문서로 작성해 놓는 것입니다." 
        />
        <Buttonlist
          title = "다음"
          routename = "counselmean3"
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

export default counselmean2;