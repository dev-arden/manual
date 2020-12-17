import React from 'react';
import {View, StyleSheet, Text,Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Titlelist from '../components/Titlelist';
import Textlist from '../components/Textlist';
import Buttonlist from '../components/Buttonlist';
import TitlewithoutImage from '../components/TitlewithoutImage';
import Shorttext from '../components/Shoretext';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Checkicon from '../components/Checkicon';
import Exlist from '../components/Exlist';

/**
 * 
 *  저는 보건복지부 지정을 받은 사전연명의료의향서 등록기관인 [기관명] 소속 상담사이며, 의향서 작성을 돕고 있습니다. 
   [상담자 신분증과 등록기관 지정서 제시
 */

const counselid6 = ({navigation}) => {
  return (
    <ScrollView>
      <View style = {styles.viewstyle}>
        <TitlewithoutImage 
          title="[간편인지검사 항목]"
        />
        <View style={styles.liststyle}>
          <Checkicon />
          <Shorttext 
          text="1. 올해가 몇 년도 인가요? (정답 1점)"
          />
        </View>
        <View style={styles.liststyle}>
          <Checkicon />
          <Shorttext 
          text="2. 오늘이 몇 일인가요? (정답 1점)"
          />
        </View>
        <View style={styles.liststyle}>
          <Checkicon />
          <Shorttext 
          text="3. 오늘이 무슨 요일인가요? (정답 1점)"
          />
        </View>
        <View style={styles.liststyle}>
          <Checkicon />
          <Shorttext 
          text="4. 대한민국을 거꾸로 말씀해 보세요. (정답 1점)"
          />
        </View>
        
        <Exlist 
          text="한국형 간편인지검사(KO3DY):4점=정상;3점=경도인지저하(mild);2점=중등도인지저하(moderate);1점이하=중증도인지저하(severe)"
        />
        <Exlist 
          text="4점과 3점은 표준상담진행, 2점 이하는 인지맞춤상담"
        />
        <Buttonlist 
          title="다음"
          routename="counselid7"
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

export default counselid6;