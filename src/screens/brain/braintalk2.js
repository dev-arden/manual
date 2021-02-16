import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Buttonlist from "../../components/Buttonlist";
import { SafeAreaView } from 'react-native';
import Titlebrain2 from '../../components/Titlebrain2';
//import Buttonlist from '../components/Buttonlist';
import ExonlyHead from '../../components/ExonlyHead';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Textlist from '../../components/Textlist';

const braintalk2 = ({}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titlebrain2 
        title="6단계"
        text="사전연명의료의향서 작성을 위한 항목 설명"
      />
      <ScrollView style={{flex:2}}>
        <ExonlyHead 
            title="연명의료의 의미"
          />
        <View style={styles.talkliststyle}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Fontisto name="quote-a-right" size={20}/>
            <Fontisto name="quote-a-left" size={20}/>
          </View>
          <Text style={styles.talktextstyle}>
          연명의료는 임종과정에 있는 환자에게 하는 심폐소생술, 혈액 투석, 항암제 투여, 인공호흡기 착용과 그 밖에 법으로 정하는 의학적 시술로서 치료효과 없이 임종과정의 기간만을 연장하는 것을 말합니다.
          </Text>
        </View>   
        <Textlist 
          text="• 연명의료에 대한 경험 등의 얘기를 통해 작성자가 연명의료의 인지 정도와 자발적 의사로 의향서 를 작성하러 왔음을 확인한다."
        />
        <Textlist 
          text="• 임종계획 및 죽음에 대한 생각 정도를 통해 본인의 삶을 스스로 마무리한다는 측면에서 의향서 작성의 의미를 깊이 고민하여 결정하는 것인지 확인한다."
        />
        <ExonlyHead 
          title="사전연명의료의향서의 의미"
        />
        <View style={styles.talkliststyle}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Fontisto name="quote-a-right" size={20}/>
            <Fontisto name="quote-a-left" size={20}/>
          </View>
          <Text style={styles.talktextstyle}>
          사전연명의료의향서는 19세 이상의 성인이 향후 자신의 연명의료중단 등 결정과 호스피스 이용에 관한 의사를 직접 문서로 작성한 것을 말합니다.
          </Text>
          <Text style={styles.talktextstyle}>
          사전연명의료의향서를 작성한다는 것은 더 이상의 치료방법 없이 죽음에 임박하게 되고 스스로가 판단할 수 없는 무의식 등의 상황이 될 때를 대비하여, 미리 스스로 판단해 그러한 상황이 되었을 때 생명만 유지하는 연명의료는 하지 않겠다고 문서로 작성해 놓는 것입니다.
          </Text>
        </View>  
      </ScrollView>
      <Buttonlist 
        title="다음"
        routename="braintalk3"
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
    color:'#8C6294',
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
    color:'#8C6294',
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

export default braintalk2;