import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';
import {Button} from 'react-native-elements'
import Titlelist from '../components/Titlelist';
import Textlist from '../components/Textlist';
import Exlist from '../components/Exlist';
import Buttonlist from '../components/Buttonlist';

/**
 * 
 *  저는 보건복지부 지정을 받은 사전연명의료의향서 등록기관인 [기관명] 소속 상담사이며, 의향서 작성을 돕고 있습니다. 
   [상담자 신분증과 등록기관 지정서 제시
  <View style = {styles.btboxview}>
            <Text style={styles.titlestyle} >
              신분증
            </Text>
        </View>
        <View style={styles.newliststyle}>
          <Image 
            source = {require('../../assets/id.png')} 
            style ={{height : 150, width : 350, resizeMode:'contain'}}
          />
 */

const counselid = ({navigation}) => {
  return (
    <ScrollView>
      <View style = {styles.viewstyle}>
        <Titlelist 
          title="신분증"
          imageSource={require('../../assets/id.png')} 
        />
        <Textlist 
          text="본인 확인을 위해 신분증을 보여주시면 감사하겠습니다."
        />
        <Exlist 
          text="장애인 등록증은 주민번호 기재여부, 여권 및 외국인 등록증은 유효기간 확인"
        />
        <Buttonlist 
          title="다음"
          routename="counselid2"
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

export default counselid;