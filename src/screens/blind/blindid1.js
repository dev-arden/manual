import React from 'react';
import {Text, View, StyleSheet, FlatList, Image,ScrollView} from 'react-native';
import Buttonlist from "../../components/Buttonlist";

import { SafeAreaView } from 'react-native';

import Titleblind2 from '../../components/Titleblind2';
import ExonlyHead from '../../components/ExonlyHead';

import Fontisto from 'react-native-vector-icons/Fontisto';
import Textlist from '../../components/Textlist';

const blindid1 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titleblind2 
        title="5단계"
        text="작성자 본인 및 의사결정능력 확인"
      />
      <ScrollView style={{flex:2}}>
        <ExonlyHead 
            title="신분증 확인"
          />
        <View style={styles.talkliststyle}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Fontisto name="quote-a-right" size={20}/>
            <Fontisto name="quote-a-left" size={20}/>
          </View>
          <Text style={styles.talktextstyle}>
          OOO님께서 사전연명의료의향서의 작성을 원하신다면, 본인 확인을 위해 신분증을 보여주시기 바랍니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          사전연명의료의향서는 다른 사람이 대신 작성할 수 없고, 19세 이상의 성인이 직접 작성할 수 있습니다.
          </Text> 
          
          <Text style={styles.plustextstyle}>
          (장애인 등록증은 주민등록번호 기재여부, 여권 및 외국인 등록증 유효기간 확인)
          </Text>
        </View>
        <Textlist 
          text="• 사전연명의료의향서는 19세 이상 본인이 직접 작성해야 하므로 신분증(주민등록증, 운전면허증, 장애인 등록증, 여권, 외국인 등록증)을 확인한다."
        />
        <Textlist 
          text="• 장애인 등록증은 주민등록번호 기재여부를 확인한다. 여권과 외국인 등록증은 유효기간을 확인한다."
        />
      </ScrollView>
      <Buttonlist 
        title="다음"
        routename="blindid2"
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
    color:'skyblue',
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

export default blindid1;