import React from 'react';
import {StyleSheet,View,Image,Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Buttonlist from '../../components/Buttonlist';
import Exwithhead from '../../components/Exwithhead';
import Circletext from '../../components/Circletext';
import Textlist from '../../components/Textlist';
import ButtonFinish from '../../components/ButtonFinish';
import ExImage from '../../components/ExImage';
import Imagelist from '../../components/Imagelist';
import ExonlyHead from '../../components/ExonlyHead';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
/**
 * 이제 의향서를 등록하고자 합니다. 
 * 혹 더 궁금한 사항 있으신가요?
 * 작성된 의향서는 국립연명의료관리기관의 연명의료정보처리시스템에 저장이 됩니다. 
 * 그리고 지금까지 나누었던 상담내용 및 모든 정보는 저장되거나 유출되지 않습니다. 
 */

const eduprocess3 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="5.연명의료에 대한 의사결정 과정"
      />
      <ScrollView style={{flex:2}}>
        {/* <ExonlyHead 
          title="연명의료중단등 결정 이행 (연명의료중단 또는 유보)"
        /> */}
        <View style={styles.exliststyle}>
          <View style = {styles.exviewstyle}>
            <FontAwesome name="square" size={17} color="black" style={{alignSelf:'center'}}/>
              <View style={{flexDirection:'column'}}>
                <Text style={styles.extitlestyle}>
                  연명의료중단등 결정 이행
                </Text>
                <Text style={styles.extitlestyle}>
                ( 연명의료중단 또는 유보 )
                </Text>
              </View>
          </View>  
        </View>
        <Textlist 
          text="연명의료결정법에 따라 담당의사 및 해당분야 전문의가 ‘임종과정에 있는 환자’로 판단하고, 해당 환자에 대한 연명의료중단 등 결정을 확인한 경우, 담당의사는 연명의료중단 등 결정을 이행할 수 있다."
        />
        <View style={styles.viewstyle}>
          <Image 
            source={require('../../../assets/process3.png')}
            style={{height : 60, width : 330, resizeMode:'contain'}}
          />
        </View>
        <Textlist 
          text="연명의료중단 등 결정을 이행할 경우라도 통증 완화를 위한 의료 행위와 영양분 공급, 물 공급, 산소의 단순 공급은 시행하지 않거나 중단해서는 안 된다."
        />
        <Textlist 
          text="이행 이후에도 담당의사는 이행에 따른 환자의 상태를 고려하여 환자에게 편안한 임종 돌봄을 제공하기 위해 노력할 필요가 있다."
        />
        <ExonlyHead 
          title="참고"
        />
        <Textlist 
          text="연명의료중단 등 결정 이행 과정 흐름도"
        />
        <View style={styles.viewstyle}>
          <View style={{justifyContent:'center'}}>
            <Image 
              source={require('../../../assets/process333.png')}
              style={{height : 270, width : 330, resizeMode:'contain'}}
            />
          </View>
        </View>
        {/* <ExImage
          title="참고"
          text="연명의료중단등결정 이행 과정 흐름도"
          imageSource={require('../../../assets/eduprocess32.png')}
          imageStyle={{height : 200, width : 330, resizeMode:'contain'}}
        /> */}
      </ScrollView> 
      <ButtonFinish 
        routename="eduinfo"
        routename2="edukind1"
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
  //marginBottom : 10,
  alignContent : 'center',
  // borderColor : 'black',
  // borderWidth : 1
}
});

export default eduprocess3;