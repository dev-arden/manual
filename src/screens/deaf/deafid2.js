import React from 'react';
import {Text, View, StyleSheet, Image,ScrollView} from 'react-native';
import Buttonlist from "../../components/Buttonlist";
import { SafeAreaView } from 'react-native';
import Titledeaf2 from '../../components/Titledeaf2';
//import Buttonlist from '../components/Buttonlist';
import ExonlyHead from '../../components/ExonlyHead';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Textlist from '../../components/Textlist';

const deafid2 = ({}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titledeaf2 
        title="5단계"
        text="작성자 본인 및 의사결정능력 확인"
      />
      <ScrollView style={{flex:2}}>
        <ExonlyHead 
            title="맞춤상담방법 판단 알고리즘"
          />
        <View style={styles.talkliststyle}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Fontisto name="quote-a-right" size={20}/>
            <Fontisto name="quote-a-left" size={20}/>
          </View>
          <Text style={styles.talktextstyle}>
          저희 등록기관은 OOO님께 사전연명의료의향서 작성 시 도움이 필요한지 아닌지의 여부를 판단하기 위해 몇 가지 질문을 드립니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          간단한 질문이므로 듣고 대답해주시길 부탁드립니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          저희는 OOO님을 위해 수화나 자막이 있는 동영상을 제공해드릴 수 있습니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          어떤 방법이 OOO님에게 도움이 되는지 알려주시기를 바랍니다.
          </Text>
          <Text style={styles.talktextstyle}>
          그 외 불편한 점이 있으시면 알려주십시오.
          </Text>
          <Text style={styles.plustextstyle}>
          (잠시 기다리면서, 작성자의 대답을 기다림, 30초 정도)
          </Text>
          <Text style={styles.plustextstyle}>
          (작성자가 불편하다고 한 부분에 대해서 아래와 같이 대응함)
          </Text> 
          <Text style={styles.talktextstyle}>
          OOO님께서 ‘OOOOOOO점이 불편하다’고 하셨는데요. 저희가 간단한 질문을 통해서 OOO님을 위한 맞춤형 상담을 진행하려고 합니다. 괜찮으신가요?
          </Text>
          <Text style={styles.plustextstyle}>
          (동의한 경우 계속 진행)
          </Text>  
        </View>   
        <Textlist 
          text="• 수화통역 시 통역으로 들은 바를 상담사가 노트에 기록하면서, 작성자가 확인할 수 있도록 한다."
        />
         <Textlist 
          text="• 수화로 통역할 동행자와 함께 내방한경우, 작성자와의 관계를 확인하고 상담일지에 이름, 전화번호, 작성자와의 관계를 작성하도록 한다."
        />
         <Textlist 
          text="• 만약 가족이 통역을 진행할 경우, 작성자의 의사결정인지 확인이 필요하다."
        />
      </ScrollView>
      <Buttonlist 
        title="다음"
        routename="deafid3"
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
    color:'#2D68A0',
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
    color:'#2D68A0',
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

export default deafid2;