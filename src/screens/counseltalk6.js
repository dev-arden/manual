import React from 'react';
import {Text, View, StyleSheet, FlatList, Image,ScrollView} from 'react-native';
import Buttonlist from "../components/Buttonlist";
import TitleImage from "../components/TitleImage";
import { SafeAreaView } from 'react-native';
import Titletwo from '../components/Titletwo';
import TitlewithoutImage2 from '../components/TitlewithoutImage2';
//import Buttonlist from '../components/Buttonlist';
import ExonlyHead from '../components/ExonlyHead';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ButtonFinish from '../components/ButtonFinish';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Textlist from '../components/Textlist';
import Exwithhead from '../components/Exwithhead';

const counseltalk6 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage2 
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
              2. 혈액투석
            </Text>
          </View>
          <Image 
            source={require('../../assets/counseltalk6.png')}
            style={{height : 220, width : 300, resizeMode:'contain', alignSelf:'center'}}
          />
          <Text style={styles.extextstyle}>
          우리 몸에서 콩팥은 노폐물을 걸러내고 소변을 만들어 배출하는 중요한 역할을 담당합니다. 
          </Text> 
          <Text style={styles.extextstyle}>
          콩팥이 망가지면 혈액을 투석기에 통과시켜 노폐물을 걸러내고 다시 몸속으로 집어넣는 혈액투석을 합니다.
          </Text>
          <Text style={styles.extextstyle}>
          그러나 임종과정에 있는 환자에게 시행하는 혈액투석은 치료 효과없이 고통만을 가중시키는 결과를 가져옵니다.
          </Text>   
        </View>    
      </ScrollView>
      <Buttonlist 
        title="다음"
        routename="counseltalkhana1"
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

export default counseltalk6;