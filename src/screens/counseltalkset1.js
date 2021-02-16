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
import Exwithhead from '../components/Exwithhead';

const counseltalkset1 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage2 
        title="6단계"
        text="사전연명의료의향서 작성을 위한 항목 설명"
      />
      <ScrollView style={{flex:2}}>
        <View style={styles.exliststyle}>
          <Text style={{fontSize:21,fontWeight:'bold'}}>
          ④ 사전연명의료의향서의 작성, 등록, 보관, 통보에 관한 사항
          </Text>
        </View>
        <View style={styles.talkliststyle}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Fontisto name="quote-a-right" size={20}/>
            <Fontisto name="quote-a-left" size={20}/>
          </View>
          <Text style={styles.talktextstyle}>
          사전연명의료의향서의 작성·등록·보관·통보에 관한 사항에 대하여 설명해드리겠습니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          사전연명의료의향서가 작성되면, 저희 등록기관이 사전연명의료의향서의 내용이 빠짐없이 잘 작성되었는지 확인한 후 국립연명의료관리기관의 연명의료정보처리시스템에 등록합니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          작성된 의향서는 국립연명의료관리기관 정보처리시스템으로 통보되어 영구적으로 관리됩니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          작성된 의향서는 환자 본인이 언제든지 조회하시거나 열람하실 수 있고, 나중에 작성자가 말기 또는 임종과정에 있을 경우 담당의사에 의해 조회될 수 있습니다.
          </Text>
          <Text style={styles.talktextstyle}>
          만약, 사망 전에 가족이 작성자가 작성한 사전연명의료의향서를 열람하는 것을 원치않을 경우 의향서에 원하지 않는다고 작성할 수 있습니다.
          </Text>
        </View> 
        <Textlist 
          text="• 작성된 의향서는 등록기관에 등록되어 등록기관 폐업·휴업 또는 지정 취소 전까지 보관되고, 연명의료정보처리시스템(intra.lst.go.kr)에 통보되어 영구적으로 관리됨을 설명한다."
        />
        <Textlist 
          text="• 작성된 의향서는 작성자가 말기 또는 임종과정에 있을 경우 담당의사에 의해 조회될 수 있음을 설명한다."
        /> 
        <Textlist 
          text="• 작성자가 사망 전에 가족이 자신의 사전연명의료의향서를 열람하는 것을 원치 않을 경우 그 뜻을 미리 밝혀 놓을 수 있음을 안내한다."
        />
      </ScrollView>
      <Buttonlist 
        title="다음"
        routename="counseltalkset2"
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

export default counseltalkset1;