import React from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import Buttonlist from '../../components/Buttonlist';
import Exwithhead from '../../components/Exwithhead';
import ExImage from '../../components/ExImage';
import Titledeaf from '../../components/Titledeaf';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
/**
 * 이제 의향서를 등록하고자 합니다. 
 * 혹 더 궁금한 사항 있으신가요?
 * 작성된 의향서는 국립연명의료관리기관의 연명의료정보처리시스템에 저장이 됩니다. 
 * 그리고 지금까지 나누었던 상담내용 및 모든 정보는 저장되거나 유출되지 않습니다. 
 */

const deaf1 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titledeaf
        title="청각장애인"
      />
      <ScrollView style={{flex:2}}>
        <Exwithhead 
          title="유형"
          text="전음성 난청, 감음 신경성 청력 손실, 혼합성 난청, 언어습득 전후 농, 편측성 난청"
        />
        <Exwithhead 
          title="상태"
          text="소리를 들을 수 있는 능력이 상당히 떨어져 있거나 전혀 들리지 않는 상태."
        />
        <View style={styles.exliststyle}>
          <View style = {styles.exviewstyle}>
            <FontAwesome name="square" size={17} color="black" style={{alignSelf:'center'}}/>
            <Text style={styles.extitlestyle}>
              장애 정도
            </Text>
          </View>
          <Text style={styles.extextstyle}>
          장애인복지법 시행규칙 [별표 1]
          </Text>
          <Text style={styles.extextstyle}>
          (개정 2019.6.4.)
          </Text>
          <Text>
            
          </Text> 
          <Image 
            source={require('../../../assets/deaf11.png')}
            style={{height:200,width:330,resizeMode:'contain',alignSelf:'center'}}
          />
        </View>
        <View style={styles.exliststyle}>
          <View style = {styles.exviewstyle}>
            <FontAwesome name="square" size={17} color="black" style={{alignSelf:'center'}}/>
            <Text style={styles.extitlestyle}>
              특징
            </Text>
          </View>
          <Text style={styles.extextstyle}>
          - 개인의 청각 손상에 따라 보청기나 보조기구 등의 도움을 통해 소리를 들을 수 있다.
          </Text> 
          <Text style={styles.extextstyle}>
          - 목소리를 낼 수 있으며, 본인의 목소리를 확인할 수 없기 때문에 목소리가 어눌하거나 무언가에 눌린 것처럼 들릴 수 있다.
          </Text>
          <Text style={styles.extextstyle}>
          - 대부분 상대방의 입 모양을 보고 말을 어느 정도는 이해하기도 한다.
          </Text>
          <Text style={styles.extextstyle}>
          - 90% 이상 수화를 못 하며, 의사전달 시 87.2%가 말을 사용한다. (2005년 장애인실태조사)
          </Text>
          <Text style={styles.extextstyle}>
          - 의사소통이 곤란한 환경에 노출된 경우가 많아 사회적, 정서적 경험의 제한으로 마음의 상처를 쉽게 받는 경우가 있다.
          </Text>  
          
        </View>
      </ScrollView> 
      <Buttonlist 
        title = "다음"
        routename="deaf2"
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
    marginHorizontal : 20,
    //marginBottom : 20,
    marginVertical : 15,
    fontSize : 20,
    borderWidth : 1,
    borderColor : 'white',
    color : 'white',
    backgroundColor : 'white',
    padding : 10,
    flexDirection : 'row',
    justifyContent:'space-around'
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
}
});

export default deaf1;