import React from 'react';
import {Text, View, StyleSheet, FlatList, Image,ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native';

import Titledeaf2 from '../../components/Titledeaf2';

import ExonlyHead from '../../components/ExonlyHead';

import ButtonFinish from '../../components/ButtonFinish';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Textlist from '../../components/Textlist';

const deafintro2 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titledeaf2 
        title="3단계"
        text="사전연명의료의향서 소개"
      />
      <ScrollView style={{flex:2}}>
        <ExonlyHead 
            title="사전연명의료의향서 소개"
          />
        <View style={styles.talkliststyle}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Fontisto name="quote-a-right" size={20}/>
            <Fontisto name="quote-a-left" size={20}/>
          </View>
          <Text style={styles.talktextstyle}>
            사전연명의료의향서는 19세 이상의 성인이 미래에 연명의료의 대상이 될 경우를 대비하여 자신의 연명의료에 대한 중단과 호스피스에 관한 의사를 미리 직접 문서로 밝혀두는 것입니다. 적법한 절차에 따라 작성된 의향서는 연명의료정보처리시스템에 등록되어 법적 효력을 발생하게 됩니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          적법한 절차에 따라 작성된 의향서는 연명의료정보처리시스템에 등록되어 법적 효력을 발생하게 됩니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          의향서는 건강할 때는 효력이 없지만 나중에 임종과정에 있는 환자로 판단되었을 때, 효력을 발휘합니다.
          </Text>
          <Text style={styles.talktextstyle}>
          임종과정에 있는 환자의 담당의사와 해당분야 전문의 1인은 미리 작성된 의향서를 통해 환자의 뜻에 변함이 없는지 확인해서 환자의 연명의료결정 내용을 실제로 이행할 수 있습니다.
          </Text>
        </View>
        <Textlist 
          text="• 향후 담당의사 및 해당 분야 전문의 1인에 의해 임종과정에 있는 환자라는 판단을 받는 경우, 미리 작성해 둔 사전연명의료의향서가 있다면 의사의 확인을 거쳐 연명의료에 관한 작성자 본인의 의사로 인정될 수 있음을 설명한다."
        />
      </ScrollView>
      <ButtonFinish 
        routename="deafmanual"
        routename2="deafcheck1"
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

export default deafintro2;