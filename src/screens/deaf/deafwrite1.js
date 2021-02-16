import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Buttonlist from "../../components/Buttonlist";
import { SafeAreaView } from 'react-native';
import Titledeaf2 from '../../components/Titledeaf2';
//import Buttonlist from '../components/Buttonlist';
import ExonlyHead from '../../components/ExonlyHead';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Textlist from '../../components/Textlist';

const deafwrite1 = ({}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titledeaf2 
        title="7단계"
        text="사전연명의료의향서 작성"
      />
      <ScrollView style={{flex:2}}>
        <ExonlyHead 
          title="사전연명의료의향서 서명"
        />
        <View style={styles.talkliststyle}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Fontisto name="quote-a-right" size={20}/>
            <Fontisto name="quote-a-left" size={20}/>
          </View>
          <Text style={styles.talktextstyle}>
          설명을 잘 이해하셨나요?
          </Text> 
          <Text style={styles.talktextstyle}>
          설명해 드린 6가지 사항에 대해 충분히 이해하셨다면 설명사항 확인란에 확인 일자, 성명을 작성하신 후 서명하시면 됩니다. 
          </Text>
          <Text style={styles.talktextstyle}>
          도장을 찍으셔도 됩니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          작성된 사전연명의료의향서는 법적으로 본인 또는 향후 작성자가 말기 환자 또는 임종과정에 있는 환자가 되었을 때 담당의사에 의해 조회될 수 있습니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          가족이 의향서 작성기록을 볼 수 있게 열람하는 것을 허락할지 여부를 결정할 수 있습니다. 
          </Text> 
          <Text style={styles.talktextstyle}>
          가족에게 열람 허용, 열람 거부, 결정하기 어려운 경우 그 밖의 의견으로 체크할 수 있습니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          작성을 원하시는지 최종적으로 확인하고, 마지막으로 작성일과 작성자란에 성명을 작성한 후 서명을 부탁드립니다.
          </Text> 
        </View> 
        <Textlist 
          text="• 사전연명의료의향서 작성 전 설명사항 6가지 내용에 대한 이해를 확인한 후, 이에 대한 서명을 받는다."
        />
        <Textlist 
          text="• 호스피스 이용 의향 및 작성자 사망 전 열람 허용 여부에 대해 확인한다."
        />
        <Textlist 
          text="• 마지막으로 사전연명의료의향서 작성일을 기입하도록 하고, 작성자란에 성함과 서명을 받는다."
        />
        <View style={styles.exliststyle}>
          <Text style={styles.extextstyle2}>
          • 서식으로 작성하는 경우:
          </Text> 
          <Text style={styles.extextstyle}>
          직접 서명이 어려운 경우 녹화나 녹취 등으로 작성자 본인의 뜻임을 확인할 수 있는 경우에 한하여 대필을 통해 작성 가능하다.
          </Text>
          <Text style={styles.extextstyle}>
          상담자는 작성자의 명료한 의식과 자발적 의사를 확인하고 서식 뒷면에 대필했음과 사유를 기록한다. 
          </Text>
          <Text style={styles.extextstyle}>
          단, 대필자의 인적사항도 기록이 필요하다.
          </Text>
          <Text style={styles.extextstyle}>
          상담자는 연명의료정보처리시스템에 수기로 작성된 서식을 원본 스캔 파일로 등록해야 한다.
          </Text>
        </View>
        <View style={styles.exliststyle}>
          <Text style={styles.extextstyle2}>
          • 컴퓨터(PC)로 작성하는 경우:
          </Text> 
          <Text style={styles.extextstyle}>
          상담자는 등록기관의 PC 또는 개인 PC를 이용하여 연명의료정보처리시스템(intra.lst.go.kr)에 공동인증서(구. 공인인증서)로 로그인하여 서식을 불러서 서식의 내용에 따라 작성을 지원한다. 
          </Text>
          <Text style={styles.extextstyle}>
          마지막으로 서명앱(스마트폰)을 통해 작성자가 서명하도록 안내한다.
          </Text>
        </View>
        <View style={styles.exliststyle}>
          <Text style={styles.extextstyle2}>
          • 태블릿 PC로 작성하는 경우:
          </Text> 
          <Text style={styles.extextstyle}>
          상담자는 연명의료정보처리시스템(intra.lst.go.kr)에 로그인하여 서식을 불러 서식의 내용에 따라 작성을 지원한다. 
          </Text>
          <Text style={styles.extextstyle}>
          마지막으로 작성자가 전자서명을 하도록 안내한다.
          </Text>
          <Text style={styles.extextstyle}>
          단, 전자서명 대신 녹화 또는 녹음도 가능하다.
          </Text>
        </View>
      </ScrollView>
      <Buttonlist 
        title="다음"
        routename="deafwrite2"
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
  extextstyle2: {
    fontSize:20,
    color:'black',
    //paddingHorizontal: 10,
    flex:1,
    margin : 5,
    //alignSelf: 'center'
    textAlign: 'auto',
    lineHeight:30,
    fontWeight:'bold'
  },
  extitlestyle:{
    alignSelf : 'center',
    //marginLeft : 10,
    fontSize:20,
    fontWeight : 'bold',
    marginLeft : 10,
    // borderColor : 'black',
    // borderWidth : 1
  },
  exviewstyle: {
    flexDirection : 'row',
    marginBottom : 10,
    alignContent : 'center',
    // borderColor : 'black',
    // borderWidth : 1
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
  viewstyle:{
    marginHorizontal : 20,
    //marginBottom : 20,
    marginVertical : 15,
    fontSize : 20,
    borderWidth : 1,
    borderColor : 'white',
    color : 'white',
    backgroundColor : 'white',
    padding : 10,
    //flexDirection : 'row',
    justifyContent:'space-around',
 },
});

export default deafwrite1;