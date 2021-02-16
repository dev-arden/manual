import React from 'react';
import {Text, View, StyleSheet, Image,ScrollView} from 'react-native';
import Buttonlist from "../../components/Buttonlist";
import { SafeAreaView } from 'react-native';
import Titleblind2 from '../../components/Titleblind2';
//import Buttonlist from '../components/Buttonlist';
import Textlist from '../../components/Textlist';

const blindtalkhana6 = ({}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titleblind2 
        title="6단계"
        text="사전연명의료의향서 작성을 위한 항목 설명"
      />
      <ScrollView style={{flex:2}}>
        <View style={styles.exliststyle}>
          <Text style={{fontSize:21,fontWeight:'bold'}}>
          ① 연명의료의 시행 방법 및 연명의료중단 등 결정에 관한 사항
          </Text>
        </View>
        <View style={styles.picliststyle}>
          <View style = {styles.exviewstyle}>
            <Text style={styles.extitlestyle}>
              8. 그 외 담당의사가 판단한 의학적 시술
            </Text>
          </View>
          <Image 
            source={require('../../../assets/counseltalkhana6.png')}
            style={{height : 220, width : 300, resizeMode:'contain', alignSelf:'center'}}
          />
          <Image 
            source={require('../../../assets/counseltalkhana62.png')}
            style={{height : 220, width : 300, resizeMode:'contain', alignSelf:'center'}}
          />
          <Text style={styles.extextstyle}>
          이 밖에도 담당의사가 환자의 상태와 상황에 따라 임종과정에 있는 환자의 최선의 이익을 위해 유보, 중단할 필요가 있다고 판단하는 시술이라면 중단할 수 있습니다.
          </Text>
        </View>
        <Textlist 
            text="• 법에서 제시하고 있는 연명의료 시술(심폐소생술, 인공호흡기 착용, 체외생명유지술, 혈액투석, 항암제 투여, 수혈, 혈압상승제 투여, 그 밖에 담당의사가 환자의 최선의 이익을 보장하기 위해 시행하지 않거나 중단할 필요가 있다고 의학적으로 판단하는 시술)이 환자에게 시행될 수 있는 상황과 시행방법을 설명한다."
          />
          <Textlist 
            text="• 향후 담당의사 및 해당 분야 전문의가 '임종과정에 있는 환자'로 판단하고, 해당 환자에게 연명의료중단 등 결정에 대해 의향을 확인한 후 담당의사는 연명의료중단 등 결정을 이행할 수 있음을 설명한다."
          />      
      </ScrollView>
      <Buttonlist 
        title="다음"
        routename="blindtalkdul1"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  picliststyle:{
    marginHorizontal : 20,
    marginVertical : 15,
    borderWidth : 5,
    borderColor : '#FAE7D3',
    color : 'white',
    backgroundColor : 'white',
    // paddingVertical: 30,
    // paddingHorizontal : 20,
    padding : 10,
    borderRadius: 15,
  },
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

export default blindtalkhana6;