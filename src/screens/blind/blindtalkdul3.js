import React from 'react';
import {Text, View, StyleSheet, Image,ScrollView} from 'react-native';
import Buttonlist from "../../components/Buttonlist";
import { SafeAreaView } from 'react-native';
import Titleblind2 from '../../components/Titleblind2';
//import Buttonlist from '../components/Buttonlist';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Textlist from '../../components/Textlist';

const blindtalkdul3 = ({}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titleblind2 
        title="6단계"
        text="사전연명의료의향서 작성을 위한 항목 설명"
      />
      <ScrollView style={{flex:2}}>
        <View style={styles.exliststyle}>
          <Text style={{fontSize:21,fontWeight:'bold'}}>
          ③ 사전연명의료의향서의 효력 및 효력 상실에 관한 사항
          </Text>
        </View>
        <View style={styles.talkliststyle}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Fontisto name="quote-a-right" size={20}/>
            <Fontisto name="quote-a-left" size={20}/>
          </View>
          <Text style={styles.talktextstyle}>
          사전연명의료의향서의 효력 및 효력 상실에 관한 사항에 대하여 설명해 드리겠습니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          법에 따라 작성된 사전연명의료의향서는 연명의료에 관한 작성자 본인의 분명한 의사 표시로써, 향후 작성자가 임종과정에 있는 환자로 판단될 때 담당의사 (의사를 표현할 수 없는 의학적 상태인 경우 담당의사 및 해당분야 전문의)의 확인을 거쳐 연명의료를 시행하지 않거나 중단할 수 있는 효력을 가지게 됩니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          환자가 과거에 의향서를 작성해서 등록하였더라도, 말기 환자 또는 임종과정에 있는 환자로 판단된 경우 담당의사와 함께 연명의료계획서를 다시 작성할 수 있습니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          환자가 연명의료계획서를 작성한다면, 과거에 작성한 의향서의 효력은 상실됩니다.
          </Text>
          <Text style={styles.talktextstyle}>
          의향서가 작성되었다 하더라도 본인이 직접 작성하지 않은 경우, 본인의 자발적 의사에 따라 작성되지 않은 경우, 작성 전 등록기관이 설명해야 할 내용이 제공되지 않거나 작성자의 확인을 받지 않은 경우에는 의향서로서의 효력이 인정되지 않습니다.
          </Text>
        </View> 
        <Textlist 
          text="• 적법하게 작성된 의향서는 연명의료에 관한 작성자 본인의 명시적 의사 표시로써, 향후 작성자가 임종과정에 있는 환자로 판단될 때 담당의사(의사를 표현할 수 없는 의학적 상태인 경우 담당의사 및 해당 분야 전문의)의 확인을 거쳐 연명의료를 시행하지 않거나 중단할 수 있는 효력을 가지게 됨을 설명한다."
        />
        <View style={styles.exliststyle}>
          <Text style={styles.extextstyle}>
          • 의향서가 작성되었다 하더라도
          </Text> 
          <Text style={styles.extextstyle}>
          1)본인이 직접 작성하지 않은 경우,
          </Text>
          <Text style={styles.extextstyle}>
          2)본인의 자발적 의사에 따라 작성되지 않은 경우, 
          </Text>
          <Text style={styles.extextstyle}>
          3) 작성 전 등록기관이 설명해야 할 내용이 제공되지 않거나 작성자의 확인을 받지 않은 경우에는 의향서의 법적 효력이 인정되지 않음을 설명한다. 
          </Text>  
        </View>
        <Textlist 
          text="• 의향서가 작성되어 등록된 후에 연명의료계획서가 다시 작성된 경우에는 연명의료계획서 작성 이후부터 의향서가 효력을 잃게 됨을 설명한다."
        /> 
        <View style={styles.viewstyle}>
          <Image 
            source={require('../../../assets/dul3.png')}
            style={{height : 500, width : 450, resizeMode:'contain', alignSelf:'center'}}
          />
        </View>
      </ScrollView>
      <Buttonlist 
        title="다음"
        routename="blindtalkset1"
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

export default blindtalkdul3;