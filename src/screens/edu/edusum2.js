import React from 'react';
import {Button, StyleSheet,View,Image,Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Buttonlist from '../../components/Buttonlist';
import Exwithhead from '../../components/Exwithhead';
import Circletext from '../../components/Circletext';
import Textlist from '../../components/Textlist';
import ButtonFinish from '../../components/ButtonFinish';
import ExImage from '../../components/ExImage';
import ExonlyHead from '../../components/ExonlyHead';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

/**
 * 이제 의향서를 등록하고자 합니다. 
 * 혹 더 궁금한 사항 있으신가요?
 * 작성된 의향서는 국립연명의료관리기관의 연명의료정보처리시스템에 저장이 됩니다. 
 * 그리고 지금까지 나누었던 상담내용 및 모든 정보는 저장되거나 유출되지 않습니다. 
 */

const edusum2 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="1.개요"
      />
      <ScrollView style={{flex:2}}>
        <View style={styles.exliststyle}>
          <View style = {styles.exviewstyle}>
            <FontAwesome name="square" size={17} color="black" style={{alignSelf:'center'}}/>
            <Text style={styles.extitlestyle}>
              사전연명의료의향서 서식
            </Text>
          </View>
            <Text style={styles.extextstyle}>
            - 해당 서식은 법정서식이므로 내용을 변경할 수는 없다.
            </Text> 
            <Text style={styles.extextstyle}>
            - 의향서 등록증 발급 여부 또는 간편인지검사 후 점수는 서식 가장자리를 이용하여 기입할 수 있다.
            </Text>
        </View>
        {/* <ExonlyHead 
          title="사전연명의료의향서 서식"
        />
        <Textlist 
          text="해당 서식은 법정서식이므로 내용을 변경할 수는 없다."
        />
        <Textlist 
          text="의향서 등록증 발급 여부 또는 간편인지검사 후 점수 기입은 서식 가장자리를 이용하여 작성할 수 있다."
        /> */}
        {/* <View style={styles.viewstyle}>
          <View style={{justifyContent:'center'}}>
            <Image 
              source={require('../../../assets/sum2.png')}
              style={{height : 400, width : 350, resizeMode:'contain'}}
            />
          </View>
        </View> */}
        <View style={styles.viewstyle}>
          <Image 
            source={require('../../../assets/sum2.png')}
            style={{height : 500, width : 330, resizeMode:'contain'}}
          />
        </View>
      </ScrollView> 
      <ButtonFinish 
        routename="eduform"
        routename2="edusup1"
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
    marginHorizontal : 20,
    //marginBottom : 20,
    marginVertical : 15,
    fontSize : 20,
    borderWidth : 1,
    borderColor : 'white',
    color : 'white',
    backgroundColor : 'white',
    //padding : 10,
    flexDirection : 'row',
    justifyContent:'center'
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

export default edusum2;