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

const counseltalk1 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage2 
        title="6단계"
        text="사전연명의료의향서 작성을 위한 항목 설명"
      />
      <ScrollView style={{flex:2}}>
      <View style={styles.exliststyle}>
          <Text style={{fontSize:21,fontWeight:'bold'}}>
          1. 사전연명의료의향서 내용 설명
          </Text>
        </View>
        <View style={styles.talkliststyle}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Fontisto name="quote-a-right" size={20}/>
            <Fontisto name="quote-a-left" size={20}/>
          </View>
          <Text style={styles.talktextstyle}>
          지금부터 사전연명의료의향서를 작성하기 위해 이해해야 할 내용에 대해 설명해 드리겠습니다.
          </Text>
          <Text style={styles.talktextstyle}>
          OOO님께서 사전연명의료의향서를 작성하시려고 결정한 이유가 있으신가요? 
          </Text> 
          <Text style={styles.talktextstyle}>
          사전연명의료의향서는 어떻게 알게 되셨나요?
          </Text>  
        </View>   
      
        <Textlist 
          text="• 사전연명의료의향서 작성의도 확인: 사전연명의료의향서 이유와 등록기관 방문 경로를 확인함으로 자발적 의사 여부를 확인하여 주치의, 복지관, 강의 등 어떤 이유로 작성하려는지 파악한다."
        />
        <View style={styles.exliststyle}>
          <Text style={styles.extextstyle}>
          • 본인의 삶을 스스로 마무리한다는 측면에서 의향서 작성의 의미를 깊이 고민하고, 작성 여부를 결정하도록 안내한다.
          </Text> 
          <Text style={styles.extextstyle}>
          - 경제적인 문제나 자녀의 부양 부담 등이 주된 이유가 되지 않도록 숙고할 것을 권고한다.
          </Text> 
          <Text style={styles.extextstyle}>
          - 경제적인 문제나 자녀의 부양 부담에 대한 대화는 작성자의 고민을 초래할 수 있기 때문에 상담사가 이에 대한 내용을 먼저 얘기하지 않도록 주의가 필요하다.
          </Text> 
        </View>
        <View style={styles.exliststyle}>
          <Text style={styles.extextstyle}>
          • 상담자는 중립적으로 의향서의 도입 취지와 그 효력 등 제도를 소개하고, 작성자 스스로 작성 여부를 정할 수 있도록 지원해야 한다.
          </Text> 
          <Text style={styles.extextstyle}>
          - 상담자의 역할은 충분한 설명을 통해 작성자가 의향서를 이해할 수 있도록 돕는 것이므로, 작성을 유도하거나 권유하지 않도록 주의해야 한다.
          </Text> 
        </View>
      </ScrollView>
      <Buttonlist 
        title="다음"
        routename="counseltalk2"
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

export default counseltalk1;