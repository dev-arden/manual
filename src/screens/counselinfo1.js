import React from 'react';
import {Text, View, StyleSheet, FlatList, Image,ScrollView} from 'react-native';
import Buttonlist from "../components/Buttonlist";
import TitleImage from "../components/TitleImage";
import { SafeAreaView } from 'react-native';
import Titletwo from '../components/Titletwo';
import TitlewithoutImage2 from '../components/TitlewithoutImage2';
//import Buttonlist from '../components/Buttonlist';
import ExonlyHead from '../components/ExonlyHead';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ButtonFinish from '../components/ButtonFinish';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Textlist from '../components/Textlist';

const counselinfo1 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage2 
        title="2단계"
        text="등록기관 및 상담자 소개"
      />
      <ScrollView style={{flex:2}}>
        <View style={styles.talkliststyle}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Fontisto name="quote-a-right" size={20}/>
            <Fontisto name="quote-a-left" size={20}/>
          </View>
          <Text style={styles.talkheadstyle}>
            [소개]
          </Text>
          <Text style={styles.talktextstyle}>
          안녕하세요.
          </Text> 
          <Text style={styles.talktextstyle}>
          저는 연명의료결정법에 따라 보건복지부 지정을 받은 사전연명의료의향서 등록기관 (기관명) 소속 상담자 ○○○입니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          저는 사전연명의료의향서 작성을 지원하는 업무를 담당하고 있습니다.
          </Text> 
          <Text style={styles.plustextstyle}>
          [상담자 신분증과 등록기관 지정서 제시]
          </Text>
        </View>
        <Textlist 
          text="• 관련법률: [호스피스·완화의료 및 임종과정에 있는 환자의 연명의료결정에 관한 법률] 제11조 및 같은 법 시행규칙 제4조"
        />
        <Textlist 
          text="• 사전연명의료의향서 작성은 연명의료결정법에 따라 반드시 보건복지부의 지정을 받은 등록기관에서만 진행할 수 있고, 상담자는 국립연명의료관리기관의 교육을 이수한 자격을 갖춘 사람임을 알린다."
        />
        <Textlist 
          text="• 사전연명의료의향서 등록기관은 방문한 사람이 확인할 수 있도록 보건복지부 등록기관 지정서를 비치하고, 상담 시 상담자 신분 증명자료를 제시한다."
        />
      </ScrollView>
      <ButtonFinish 
        routename="manual1"
        routename2="counselintro1"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  exliststyle:{
    marginHorizontal : 20,
    marginVertical : 15,
    borderWidth : 1,
    borderColor : 'white',
    color : 'white',
    backgroundColor : 'white',
    // paddingVertical: 30,
    // paddingHorizontal : 20,
    padding : 10
  },
  extextstyle: {
    fontSize:20,
    color:'black',
    //paddingHorizontal: 10,
    flex:1,
    margin : 5,
    //alignSelf: 'center'
    textAlign: 'auto',
    lineHeight:30
  },
  plustextstyle: {
    fontSize:20,
    color:'#D97F48',
    //paddingHorizontal: 10,
    flex:1,
    margin : 5,
    //alignSelf: 'center'
    textAlign: 'auto',
    lineHeight:30
  },
  talkliststyle:{
    marginHorizontal : 20,
    marginVertical : 15,
    borderWidth : 1,
    borderColor : 'grey',
    //color : '#DAD9DB',
    backgroundColor : '#ECECEB',
    // paddingVertical: 30,
    // paddingHorizontal : 20,
    padding : 10,
    borderRadius : 15
  },
  talkheadstyle: {
    fontSize:20,
    color:'#D97F48',
    //paddingHorizontal: 10,
    flex:1,
    margin : 5,
    //alignSelf: 'center'
    textAlign: 'auto',
    lineHeight:30,
    fontWeight:'bold'
  },
  talktextstyle: {
    fontSize:22,
    color:'black',
    //paddingHorizontal: 10,
    flex:1,
    margin : 5,
    //alignSelf: 'center'
    textAlign: 'auto',
    lineHeight:30,
    fontWeight:'bold'
  },
});

export default counselinfo1;