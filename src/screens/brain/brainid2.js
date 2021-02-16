import React from 'react';
import {Text, View, StyleSheet, Image,ScrollView} from 'react-native';
import Buttonlist from "../../components/Buttonlist";
import { SafeAreaView } from 'react-native';
import Titlebrain2 from '../../components/Titlebrain2';
//import Buttonlist from '../components/Buttonlist';
import ExonlyHead from '../../components/ExonlyHead';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Textlist from '../../components/Textlist';

const brainid2 = ({}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titlebrain2 
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
          저희는 OOO님을 위해 그림카드뿐만 아니라 설명에 대한 그림이 많이 포함된 안내 동영상을 제공해드릴 수 있습니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          어떤 방법이 OOO님에게 도움이 되는지 알려주시기 바랍니다.
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
          OOO님께서 ‘OOOOOOOO점이 불편하다’고 하셨는데요. 저희가 간단한 질문을 통해서 OOO님을 위한 맞춤형 상담을 진행하려고 합니다. 괜찮으신가요?
          </Text>
          <Text style={styles.plustextstyle}>
          (동의한 경우 계속 진행)
          </Text> 
        </View>   
        <View style={styles.exliststyle}>
          <Text style={styles.extextstyle}>
          • 효과적인 상담을 위해 대상자의 특성을 알고리즘에 따라 상담 관련 불편한 점을 질문한 후, 불편한 점이 없다고 대답한 경우 표준상담의 6단계로 가서 진행하고, 70세 이상 또는 필요 시 간편인지검사를 시행한다.
          </Text> 
          <Text style={styles.extextstyle}>
          총점 4점 중 3점 이상인 경우 표준상담매뉴얼로 상담을 진행하고 2점 이하인 경우 인지맞춤상담을 진행한다.
          </Text> 
          <Text style={styles.extextstyle}>
          점수결과는 사전연명의료의향서의 가장자리 등을 활용하여 “간편인지검사 __점”이라고 표기할 수 있다.
          </Text> 
        </View>
        <Textlist 
          text="• 불편한 점을 파악하며 필요한 상담방법을 알고리즘에 따라 결정한다."
        />
        <View style={styles.viewstyle}>
          <Text style={styles.extextstyle}>• 맞춤상담방법 판단 알고리즘 </Text>
          <Image 
            source={require('../../../assets/counselid2.png')}
            style={{height : 300, width : 330, resizeMode:'contain', alignSelf:'center'}}
          />
        </View>
      </ScrollView>
      <Buttonlist 
        title="다음"
        routename="brainid3"
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

export default brainid2;