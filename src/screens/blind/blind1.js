import React from 'react';
import {StyleSheet,View, Text, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Buttonlist from '../../components/Buttonlist';
import Exwithhead from '../../components/Exwithhead';
import ExImage from '../../components/ExImage';
import Titleblind from '../../components/Titleblind';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

/**
 * 이제 의향서를 등록하고자 합니다. 
 * 혹 더 궁금한 사항 있으신가요?
 * 작성된 의향서는 국립연명의료관리기관의 연명의료정보처리시스템에 저장이 됩니다. 
 * 그리고 지금까지 나누었던 상담내용 및 모든 정보는 저장되거나 유출되지 않습니다. 
 */

const blind1 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      {/* <TitlewithoutImage 
        title="시각장애인"
      /> */}
      <Titleblind 
        title="시각장애인"
      />
      <ScrollView style={{flex:2}}>
        <Exwithhead 
          title="유형"
          text="전맹, 저시력(약시), 단안 실명, 시야각 결손"
        />
        <Exwithhead 
          title="상태"
          text="다수는 명암이나 색깔을 희미하게 구분하거나 남아있는 시각기능을 일상생활에 활용."
        />
        <ExImage 
          title="장애 정도"
          text="장애인복지법 시행규칙 [별표 1]"
          imageSource={require('../../../assets/blind11.png')}
          imageStyle={{height:130,width:330,resizeMode:'contain'}}
        />
        <View style={styles.exliststyle}>
          <View style = {styles.exviewstyle}>
            <FontAwesome name="square" size={17} color="black" style={{alignSelf:'center'}}/>
            <Text style={styles.extitlestyle}>
            특징
            </Text>
          </View>
          <Text style={styles.extextstyle}>
          - 흰 지팡이를 사용하고, 의사소통은 가능하나 직접 확인이 어려워 답답해한다.
          </Text> 
          <Text style={styles.extextstyle}>
          - 사고나 질병으로 후천적으로 장애가 생긴 중도장애인은 점자를 모를 수 있다.
          </Text>
          <Text style={styles.extextstyle}>
          - 육안으로 시각장애인을 구별하기 어려울 수 있으며, 사물에 초점을 맞출 수도 있다.
          </Text>
          <Text style={styles.extextstyle}>
          - 내방상담 시 대부분 장애인활동지원사와 동행하는 경우가 많으며, 출장상담을 요청하는 경우도 있다.
          </Text> 
          <Text style={styles.extextstyle}>
          - 시각장애인은 혼자서도 서명이 가능한 경우가 많다.
          </Text> 
        </View>
      </ScrollView> 
      <Buttonlist 
        title = "다음"
        routename="blind2"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textstyle:{
    fontSize:20,
    color:'black',
    paddingHorizontal: 10,
    flex:1,
    margin : 5,
    //alignSelf: 'center'
    textAlign: 'justify'
  },
  viewstyle:{
    //borderWidth:1,
    backgroundColor: 'white',
    marginHorizontal : 20,
    marginVertical : 15,
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
});

export default blind1;