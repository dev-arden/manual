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
import Numhead from '../../components/Numhead';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
/**
 * 이제 의향서를 등록하고자 합니다. 
 * 혹 더 궁금한 사항 있으신가요?
 * 작성된 의향서는 국립연명의료관리기관의 연명의료정보처리시스템에 저장이 됩니다. 
 * 그리고 지금까지 나누었던 상담내용 및 모든 정보는 저장되거나 유출되지 않습니다. 
 */

const edukind1 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="6.연명의료 시술의 종류"
      />
      <ScrollView style={{flex:2}}>
        {/* <Numhead 
          title="연명의료결정법에 따라 중단가능한 연명의료의 종류"
        /> */}
        <View style={styles.exliststyle}>
          <View style = {styles.exviewstyle}>
            {/* <MaterialCommunityIcons name="numeric-1-circle-outline" size={25} color="black" style={{alignSelf:'center',fontWeight:'bold'}}/> */}
            <Text style={{alignSelf:'center', fontSize:21,fontWeight:'bold'}}>
              1)
            </Text>
            <View style={{flexDirection:'column'}}>
              <Text style={styles.extitlestyle}>
                연명의료결정법에 따라 중단가능한
              </Text>
              <Text style={styles.extitlestyle}>
                연명의료의 종류
              </Text>
            </View>
          </View>  
        </View>
        <ExonlyHead 
          title="심폐소생술"
        />
        <Textlist 
          text="심장마비가 발생하면 심장박동과 호흡이 멈추면서 온몸으로의 혈액 공급이 중단되는데, 이때 가슴압박과 인공호흡을 시행함으로써 정지된 심장을 대신해 심장과 뇌에 혈액을 공급하는 응급처치법."
        />
        <Textlist 
          text="흉부 압박으로 인한 갈비뼈 골절과 혈흉 및 기흉(폐에 공기가 참)의 부작용이 나타날 수 있으며, 기도삽관으로 인한 치아손실, 목소리 손상 등의 부작용이 나타날 수 있음."
        />
        <Textlist 
          text="주의: 임종에 직면 시 심폐소생술을 하지 않겠다는 것이다. 단, 사전연명의료의향서 작성 후 부득이한 사고 등으로 심장마비와 같은 응급상황이 발생하면 심폐소생술은 즉시 시행됨."
        />
        {/* <Exwithhead 
          title="주의"
          text="임종에 직면 시 심폐소생술을 하지 않겠다는 것이다. 단, 사전연명의료의향서 작성 후 부득이한 사고 등으로 심장마비와 같은 응급상황이 발생하면 심폐소생술은 즉시 시행된다."
        /> */}
      </ScrollView> 
      <Buttonlist 
        title="다음"
        routename="edukind2"
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
extitlestyle:{
  alignSelf : 'stretch',
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
  borderColor : 'white',
  borderWidth : 1
}
});

export default edukind1;