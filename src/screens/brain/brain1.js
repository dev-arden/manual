import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import Titlebrain from '../../components/Titlebrain';
import Buttonlist from '../../components/Buttonlist';
import ExonlyHead from '../../components/ExonlyHead';
import Exwithhead from '../../components/Exwithhead';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icontext from '../../components/Icontext';

/**
 * 이제 의향서를 등록하고자 합니다. 
 * 혹 더 궁금한 사항 있으신가요?
 * 작성된 의향서는 국립연명의료관리기관의 연명의료정보처리시스템에 저장이 됩니다. 
 * 그리고 지금까지 나누었던 상담내용 및 모든 정보는 저장되거나 유출되지 않습니다. 
 */

const brain1 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titlebrain 
        title="인지기능저하"
      />
      <ScrollView style={{flex:2}}>
        <ExonlyHead 
          title="용어 설명"
        />
        <Exwithhead 
          title="인지기능"
          text="상황이나 상태를 인지하고 분별하는 기능"
        />
        <Exwithhead 
          title="인지기능장애"
          text="기억력, 주의력, 언어능력, 시공간 능력, 판단력 등이 저하된 상태를 의미하며, 인지장애의 정도는 아주 경미한 경우에서 심한 경우까지 다양함"
        />
        <Exwithhead 
          title="치매"
          text="인지기능 장애가 심하여 일상생활이나 사회생활에 지장을 주는 경우"
        />
        <Exwithhead 
          title="경도 인지장애"
          text="동일 연령대에 비해 인지기능, 특히 기억력이 떨어지나 일상생활을 수행하는 능력은 남아있어 아직은 치매라고 할 정도로 심하지 않은 상태임. 정상 노화와 치매의 중간 단계라고 할 수 있음"
        />
        <Exwithhead 
          title="지적장애"
          text="지적인 능력이 평균 이하인 상태"
        />
        <Exwithhead 
          title="중증정신질환"
          text="조현병, 양극성장애, 심한 우울증 등으로 인한 현실검증력과 인지기능 저하"
        />
      <View style={styles.exliststyle}>
          <View style = {styles.exviewstyle}>
            <FontAwesome name="square" size={17} color="black" style={{alignSelf:'center'}}/>
            <Text style={styles.extitlestyle}>
            특징
            </Text>
          </View>
          <Text style={styles.extextstyle}>
          - 노화 및 장애의 정도에 따라 개인마다 인지기능은 다르다.
          </Text> 
          <Text style={styles.extextstyle}>
          - 노인의 인지기능은 노화에 따라 인지기능이 점차 감퇴하며 이는 정상적인 변화이다. 따라서 치매와 같은 병적인 상태와 구별해야 한다.
          </Text>
          <Text style={styles.extextstyle}>
          - 지적장애는 일반적으로 학령전기부터 발견되어 생애 전반적으로 유지된다.
          </Text>
        </View>
      </ScrollView> 
      <Buttonlist 
        title = "다음"
        routename="brain2"
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

export default brain1;