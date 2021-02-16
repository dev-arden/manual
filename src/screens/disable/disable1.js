import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import Titledisable from '../../components/Titledisable';
import Buttonlist from '../../components/Buttonlist';
import Exwithhead from '../../components/Exwithhead';
import ExImage from '../../components/ExImage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import IconIntext from '../../components/Icontext';
/**
 * 이제 의향서를 등록하고자 합니다. 
 * 혹 더 궁금한 사항 있으신가요?
 * 작성된 의향서는 국립연명의료관리기관의 연명의료정보처리시스템에 저장이 됩니다. 
 * 그리고 지금까지 나누었던 상담내용 및 모든 정보는 저장되거나 유출되지 않습니다. 
 */

const disable1 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titledisable 
        title="신체장애인"
      />
      <ScrollView style={{flex:2}}>
        <Exwithhead 
          title="유형"
          text="지체장애, 뇌병변장애, 노화로 인한 근력약화(신체적 불편감) 등"
        />
        <Exwithhead 
          title="상태"
          text="소아마비, 뇌성마비, 뇌졸중, 척수손상, 근이양증 등으로 신체적 불편감이 있음."
        />
        <Exwithhead 
          title="특징"
          text="인지기능은 문제없어 자기 결정이 가능하나, 장애의 심각도에 따라 일상생활 능력 및 기능이 다양해 직접 수기로 의향서에 서명을 하는 경우 어려움이 있을 수 있다."
        />
        {/* <View style={styles.exliststyle}>
          <View style = {styles.viewstyle}>
            <FontAwesome name="square" size={17} color="black" style={{alignSelf:'center'}}/>
            <Text style={styles.titlestyle}>
              특징
            </Text>
          </View>
          <IconIntext 
            text="인지기능은 문제없어 자기 결정이 가능하나, 장애의 심각도에 따라 일상생활 능력 및 기능이 다양해 직접 수기로 의향서에 서명을 하는 경우 어려움이 있을 수 있다."
          />   
        </View> */}
      </ScrollView> 
      <Buttonlist 
        title = "다음"
        routename="disable2"
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
  textstyle: {
    fontSize:20,
    color:'black',
    //paddingHorizontal: 10,
    flex:1,
    //margin : 5,
    //alignSelf: 'center'
    textAlign: 'auto',
  },
  titlestyle:{
    alignSelf : 'center',
    //marginLeft : 10,
    fontSize:20,
    fontWeight : 'bold',
    marginLeft : 10,
    // borderColor : 'black',
    // borderWidth : 1
  },
  viewstyle: {
    flexDirection : 'row',
    marginBottom : 10,
    alignContent : 'center',
    // borderColor : 'black',
    // borderWidth : 1
  }
});

export default disable1;