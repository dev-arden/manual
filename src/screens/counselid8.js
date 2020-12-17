import React from 'react';
import {View, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Titlelist from '../components/Titlelist';
import Textlist from '../components/Textlist';
import CheckText from '../components/CheckText';
import Buttonlist from '../components/Buttonlist';

/**
 * 
 *  저는 보건복지부 지정을 받은 사전연명의료의향서 등록기관인 [기관명] 소속 상담사이며, 의향서 작성을 돕고 있습니다. 
   [상담자 신분증과 등록기관 지정서 제시
 */

const counselid8 = ({navigation}) => {
  return (
    <ScrollView>
      <View style = {styles.viewstyle}>
        <Titlelist 
          title="[동행인 동석 시]"
          imageSource={require('../../assets/divide.png')}
        />
        <Textlist 
          text="사전연명의료의향서 작성은 본인의 자발적인 의사로 작성해야하므로 혹시라도 발생할 수 있는 동행인의 영향력을 차단하기 위해서 동행인과 분리하여 상담을 진행해야합니다."
        />
        <Textlist 
          text="동행인은 잠시만 밖에서 대기해 주신다면 감사하겠습니다."
        />
        
        <CheckText 
          text="인지 맞춤상담의 경우 필요 시 동행인 동석"
        />
        <Buttonlist 
          title="다음"
          routename="counselid9"
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

export default counselid8;