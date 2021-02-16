import React from 'react';
import {Text, View, StyleSheet, FlatList, Image,ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native';

import Titleblind2 from '../../components/Titleblind2';

import ExonlyHead from '../../components/ExonlyHead';

import ButtonFinish from '../../components/ButtonFinish';
import Fontisto from 'react-native-vector-icons/Fontisto';


const blindcheck1 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titleblind2 
        title="4단계"
        text="사전연명의료의향서 작성 의사 확인"
      />
      <ScrollView style={{flex:2}}>
        <ExonlyHead 
            title="사전연명의료의향서 작성 의사"
          />
        <View style={styles.talkliststyle}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Fontisto name="quote-a-right" size={20}/>
            <Fontisto name="quote-a-left" size={20}/>
          </View>
          <Text style={styles.talktextstyle}>
          사전연명의료의향서는 작성한 후에라도 언제든지 변경·철회할 수 있습니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          자신이 원하는 삶의 마무리에 대해 충분히 생각하신 후 결정하시고 경제적인 부담이나 강압에 의해서가 아닌, 작성자 본인의 자발적 의사로 작성하시기 바랍니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          사전연명의료의향서를 작성하시겠습니까?
          </Text>
          <Text style={styles.plustextstyle}>
          → [사전연명의료의향서 작성을 원하지 않는 경우는 상담 종료]
          </Text>
          <Text style={styles.plustextstyle}>
          → [사전연명의료의향서 작성을 원하는 경우는 작성자신분증을 통한 본인 확인]
          </Text>
        </View>
      </ScrollView>
      <ButtonFinish 
        routename="blindmanual"
        routename2="blindid1"
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

export default blindcheck1;