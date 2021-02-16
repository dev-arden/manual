import React from 'react';
import {Text, View, StyleSheet, Image,ScrollView} from 'react-native';
import Buttonlist from "../../components/Buttonlist";
import { SafeAreaView } from 'react-native';
import Titledisable2 from '../../components/Titledisable2';
//import Buttonlist from '../components/Buttonlist';
import ExonlyHead from '../../components/ExonlyHead';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Textlist from '../../components/Textlist';

const disableid3 = ({}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titledisable2 
        title="5단계"
        text="작성자 본인 및 의사결정능력 확인"
      />
      <ScrollView style={{flex:2}}>
        <ExonlyHead 
            title="간편인지검사"
          />
        <View style={styles.talkliststyle}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Fontisto name="quote-a-right" size={20}/>
            <Fontisto name="quote-a-left" size={20}/>
          </View>
          <Text style={styles.talktextstyle}>
          지금 보여드리는 질문은 OOO님께서 사전연명의료의향서를 직접 작성하시기 전에 OOO님께 맞춤 상담을 제공하기 위해 드리는 질문입니다.
          </Text> 
          <Image 
            source={require('../../../assets/counselid3.png')}
            style={{height : 180, width : 330, resizeMode:'contain', alignSelf:'center'}}
          />
          <Text style={styles.plustextstyle}>
          (각 질문의 정답 1점씩을 더하여 3점 이상은 작성을 진행하고, 2점 이하는 작성자의 동의하에 보호자와 동석하여 인지맞춤상담을 진행)
          </Text>
        </View>   
      
        <View style={styles.exliststyle}>
          <View style = {styles.exviewstyle}>
            <FontAwesome name="square" size={17} color="black" style={{alignSelf:'center'}}/>
            <Text style={styles.extitlestyle}>
            한국형 간편인지검사(KO3DY)
            </Text>
          </View>
          <Text style={styles.extextstyle}>
          4점=정상;
          </Text> 
          <Text style={styles.extextstyle}>
          3점=경도인지저하(mild);
          </Text>
          <Text style={styles.extextstyle}>
          2점=중등도인지저하 (moderate);
          </Text>
          <Text style={styles.extextstyle}>
          1점 이하=중증도인지저하(severe);
          </Text>  
        </View>
        <Textlist 
          text="• 참고: Molnar FJ, Benjamin S, Hawkins SA, Briscoe M, Ehsan S. One Size Does Not Fit All: Choosing Practical Cognitive Screening Tools for Your Practice. Journal of the American Geriatric Society. 2020;68(10):2207-2213."
        />
        <View style={styles.exliststyle}>
          <Text style={styles.extextstyle}>
          • 4점·3점은 표준상담진행, 2점 이하는 인지맞춤상담진행
          </Text> 
          <Text style={styles.extextstyle}>
          점수결과는 사전연명의료의향서의 작성자란에 “인지검사 __점”이라고 표기함
          </Text> 
        </View>
        <View style={styles.viewstyle}>
          <Text style={styles.extextstyle}>• [예시] </Text>
          <Image 
            source={require('../../../assets/counselid32.png')}
            style={{height : 180, width : 330, resizeMode:'contain', alignSelf:'center'}}
          />
        </View>
      </ScrollView>
      <Buttonlist 
        title="다음"
        routename="disableid4"
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

export default disableid3;