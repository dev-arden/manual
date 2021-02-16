import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native';
import Titlebrain2 from '../../components/Titlebrain2';
//import Buttonlist from '../components/Buttonlist';
import ExonlyHead from '../../components/ExonlyHead';
import ButtonFinish from '../../components/ButtonFinish';
import Fontisto from 'react-native-vector-icons/Fontisto';

const brainwrite1 = ({}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titlebrain2 
        title="7단계"
        text="사전연명의료의향서 작성"
      />
      <ScrollView style={{flex:2}}>
        <ExonlyHead 
          title="사전연명의료의향서 서명 및 작성 완료"
        />
        <View style={styles.talkliststyle}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Fontisto name="quote-a-right" size={20}/>
            <Fontisto name="quote-a-left" size={20}/>
          </View>
          <Text style={styles.talktextstyle}>
          OOO님께서는 사전연명의료의향서 서식에 총 2번의 서명을 하실 예정입니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          첫 번째 서명은 사전연명의료의향서 내용에 대한 설명을 듣고 이해했다는 것입니다. 
          </Text>
          <Text style={styles.talktextstyle}>
          두 번째 서명은 향후 임종과정에 있는 환자가 되었을 때 연명의료를 시행하지 않거나 중단한다는 것에 동의한다는 것입니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          이때 서명은 수기 또는 구두로 모두 가능합니다.
          </Text>
          <Text style={styles.talktextstyle}>
          어떤 서명의 형태가 편하신가요?
          </Text> 
         
          <Text style={styles.talktextstyle}>
          지금까지 설명해 드린 6가지 사항에 대하여 이해하셨나요? 
          </Text>
          <Text style={styles.talktextstyle}>
          충분히 이해하셨으면 여기 확인란에 서명하시면 됩니다. 
          </Text> 
          
          <Text style={styles.talktextstyle}>
          그리고 호스피스에 대하여 설명해 드렸는데, 호스피스 이용할 의향이 있으시면 체크하시면 됩니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          작성된 사전연명의료의향서는 법적으로 본인 또는 향후 작성자가 말기환자 또는 임종과정에 있는 환자가 되었을 때 담당의사에 의해 조회될 수 있습니다.
          </Text>
          <Text style={styles.talktextstyle}>
          환자가족에게 사망 전 열람을 허용할지 아닐지 여부는 작성자가 정할 수 있습니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          결정하기 어려운 경우 그 밖의 의견으로 체크할 수 있습니다. 
          </Text>
          <Text style={styles.talktextstyle}>
          가족들이 열람할 수 있도록 선택할 수 있습니다.
          </Text>
          
          <Text style={styles.talktextstyle}>
          작성에 대해 확실히 결정하시게 된다면, 작성일을 써주시고, 작성자란에 성함과 서명을 하시거나, 서명이 어려우면 녹음을 통해 구두로 동의하시면 사전연명의료의향서 작성이 완료됩니다.
          </Text>
          
          <Text style={styles.talktextstyle}>
          인지기능저하로 인해 자발적인 자기결정인지 가족이나 타인의 권유에 의한 결정인지 명확히 판단하기 어려운 상황이므로 현재는 심각한 인지기능저하를 가진 성인에게 사전연명의료의향서를 받고 있지는 않습니다.
          </Text>
          <Text style={styles.talktextstyle}>
          그러나 인지기능저하 대상자의 고통스러운 임종기간 연장을 피하려고 법적보호자인 가족이 사전에 이러한 정보를 미리 습득하여 충분히 대상자와 함께 숙고하여 의향서를 진행할 수 있도록 노력하겠습니다
          </Text> 
          
        </View> 
      </ScrollView>
      <ButtonFinish 
        routename="brainmanual"
        routename2="brainenter1"
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
  extextstyle2: {
    fontSize:20,
    color:'black',
    //paddingHorizontal: 10,
    flex:1,
    margin : 5,
    //alignSelf: 'center'
    textAlign: 'auto',
    lineHeight:30,
    fontWeight:'bold'
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
    color:'#61AD7A',
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
    color:'#61AD7A',
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

export default brainwrite1;