import React from 'react';
import {Text, View, StyleSheet, Image,ScrollView} from 'react-native';
import Buttonlist from "../../components/Buttonlist";
import { SafeAreaView } from 'react-native';
import Titleblind2 from '../../components/Titleblind2';
import ExonlyHead from '../../components/ExonlyHead';
import Fontisto from 'react-native-vector-icons/Fontisto';

const blindtalk3 = ({}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titleblind2 
        title="6단계"
        text="사전연명의료의향서 작성을 위한 항목 설명"
      />
      <ScrollView style={{flex:2}}>
        <View style={styles.viewstyle}>
          <Image 
            source={require('../../../assets/counseltalk3.png')}
            style={{height : 450, width : 400, resizeMode:'contain', alignSelf:'center'}}
          />
        </View>
        <ExonlyHead 
          title="사전연명의료의향서의 작성"
        />
        <View style={styles.talkliststyle}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Fontisto name="quote-a-right" size={20}/>
            <Fontisto name="quote-a-left" size={20}/>
          </View>
          <Text style={styles.talktextstyle}>
          사전연명의료의향서는 반드시 보건복지부지정을 받은 등록기관에 소속된 상담자를 통해 충분한 설명을 듣고 작성할 수 있으며, 별도의 비용은 청구되지 않습니다.
          </Text>
          <Text style={styles.talktextstyle}>
          작성 후 본인의 의사가 변경된 경우 언제든지 변경 또는 철회도 가능합니다.
          </Text>
        </View>   
        <ExonlyHead 
          title="사전연명의료의향서의 적용"
        />
        <View style={styles.talkliststyle}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Fontisto name="quote-a-right" size={20}/>
            <Fontisto name="quote-a-left" size={20}/>
          </View>
          <Text style={styles.talktextstyle}>
          사전연명의료의향서를 작성하게 되면, 추후 의료기관에서 의사 2인으로부터 임종과정에 있는 환자로 판단됐을 때 본인 의사를 확인 후 연명의료에 대한 중단 등 결정이 가능합니다.
          </Text>
          <Text style={styles.talktextstyle}>
          단, 교통사고 등 갑작스러운 사고로 인한 응급상황이라면 응급의료에 관한 법률 등에 따라 의료진이 환자를 위해 최선의 치료를 진행합니다.
          </Text>
        </View>   
      </ScrollView>
      <Buttonlist 
        title="다음"
        routename="blindtalk4"
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

export default blindtalk3;