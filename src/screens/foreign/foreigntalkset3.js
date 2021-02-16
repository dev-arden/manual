import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native';
import Titleforeign2 from '../../components/Titleforeign2';
//import Buttonlist from '../components/Buttonlist';
import ButtonFinish from '../../components/ButtonFinish';
import Fontisto from 'react-native-vector-icons/Fontisto';

const foreigntalkset3 = ({}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titleforeign2 
        title="6단계"
        text="사전연명의료의향서 작성을 위한 항목 설명"
      />
      <ScrollView style={{flex:2}}>
        <View style={styles.exliststyle}>
          <Text style={{fontSize:21,fontWeight:'bold'}}>
          ⑥ 사전연명의료의향서 등록기관이 폐업·휴업 하거나, 지정 취소되는 경우 기록의 이관에 관한 사항
          </Text>
        </View>
        <View style={styles.talkliststyle}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Fontisto name="quote-a-right" size={20}/>
            <Fontisto name="quote-a-left" size={20}/>
          </View>
          <Text style={styles.talktextstyle}>
          등록기관의 폐업·휴업 및 지정 취소에 따른 기록의 이관에 관하여 설명해 드리겠습니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          사전연명의료의향서 등록기관이 폐업되거나 1개월 이상 휴업 또는 지정 취소되는 경우, 사전연명의료의향서의 등록·변경·철회에 관한 모든 기록은 국립연명의료관리기관에 이관됩니다.
          </Text> 
        </View> 
        <View style={styles.exliststyle}>
          <Text style={styles.extextstyle}>
          • 등록기관이 업무를 폐업하거나 1개월 이상 휴업하는 경우, 사전연명의료의향서 등의 모든 기록은 관리기관인 국립연명의료관리기관에 이관됨을 안내한다.
          </Text> 
          <Text style={styles.extextstyle}>
          단 휴업의 경우, 등록기관의 의사에 따라 관련 기록을 직접 보관할 수 있다.
          </Text> 
        </View>
      </ScrollView>
      <ButtonFinish 
        routename="foreignmanual"
        routename2="foreignwrite1"
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
    color:'#8C6294',
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
    color:'#8C6294',
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

export default foreigntalkset3;