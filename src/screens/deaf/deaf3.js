import React from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import Buttonlist from '../../components/Buttonlist';
import Exwithhead from '../../components/Exwithhead';
import ExImage from '../../components/ExImage';
import Titledeaf from '../../components/Titledeaf';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Textlist from '../../components/Textlist';
import ButtonFinish from '../../components/ButtonFinish';
/**
 * 이제 의향서를 등록하고자 합니다. 
 * 혹 더 궁금한 사항 있으신가요?
 * 작성된 의향서는 국립연명의료관리기관의 연명의료정보처리시스템에 저장이 됩니다. 
 * 그리고 지금까지 나누었던 상담내용 및 모든 정보는 저장되거나 유출되지 않습니다. 
 */

const deaf3 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titledeaf
        title="청각장애인과 청력저하 고령자 응대 시 상담자세"
      />
      <ScrollView style={{flex:2}}>
        <Textlist 
          text="- 조용하고 밝은 장소에서 입술이나 몸짓을 파악할 수 있도록 한다."
        />
        <Textlist 
          text="- 사전연명의료의향서 작성을 위한 상담 시 안내서 글을 짚으면서 진행하고 중간중간 이해했는지 확인한다."
        />
        <Textlist 
          text="- 약간 느린 속도로 말하고, 발음을 명확하게 한다."
        />
        <Textlist 
          text="- 대화 시 한 구절이 끝나면 잠시 말을 멈춰 이해할 시간을 제공한다."
        />
        <Textlist 
          text="- 보통 말소리보다 약간 크게 말하되, 같은 말의 반복보다 쉬운 단어로 바꾸어 대화한다."
        />
        <Textlist 
          text="- 대화 시 입 모양을 크게 해 천천히 말하기, 글로 쓰기, 혹은 수화를 이용하여 의사소통할 수 있다."
        />
        <Textlist 
          text="- 대화 시 ‘눈’을 보며 말하되 상황에 맞는 표정이나 몸짓을 동반하면 더 쉽게 의미 전달이 된다."
        />
        <Textlist 
          text="- 동반자가 수화통역으로 대화할 때 작성자와 눈을 맞춘다."
        />
        <Textlist 
          text="- 중증청각장애 시 대화 시 어깨를 가볍게 두드리거나 손을 흔들어 시선을 확보한다."
        />
      </ScrollView> 
      <ButtonFinish 
        routename="manual3"
        routename2="deafmanual"
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

export default deaf3;