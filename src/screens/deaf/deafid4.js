import React from 'react';
import {View, StyleSheet, Image,ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native';
import Titledeaf2 from '../../components/Titledeaf2';
//import Buttonlist from '../components/Buttonlist';
import ButtonFinish from '../../components/ButtonFinish';
import Textlist from '../../components/Textlist';

const deafid4 = ({}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titledeaf2 
        title="5단계"
        text="작성자 본인 및 의사결정능력 확인"
      />
      <ScrollView style={{flex:2}}> 
          <View style={styles.viewstyle}>
            <Image 
              source={require('../../../assets/counselid4.png')}
              style={{height : 400, width : 330, resizeMode:'contain', alignSelf:'center'}}
            />
          </View>
          <Textlist 
            text="• 등록기관 상담자는 의향서 작성을 희망하는 사람에게 사전연명의료의향서의 의의 및 작성 전 알아야 할 사항에 대한 설명을 제공하고, 상담 일지 작성이 가능하다."
          />
          <Textlist 
            text="• 상담일지 작성 시 등록기관의 장은 작성자의 개인정보 관리에 힘써야 한다."
          />
      </ScrollView>
      <ButtonFinish 
        routename="deafmanual"
        routename2="deaftalk1"
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

export default deafid4;