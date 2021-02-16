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

const counseltalkdul2 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage2 
        title="6단계"
        text="사전연명의료의향서 작성을 위한 항목 설명"
      />
      <ScrollView style={{flex:2}}>
        <View style={styles.exliststyle}>
          <Text style={{fontSize:21,fontWeight:'bold'}}>
          ② 호스피스의 선택 및 이용에 관한 사항
          </Text>
        </View>
        <ExonlyHead 
          title="호스피스 이용 의향 여부"
        />
        <View style={styles.talkliststyle}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Fontisto name="quote-a-right" size={20}/>
            <Fontisto name="quote-a-left" size={20}/>
          </View>
          <Text style={styles.talktextstyle}>
          사전연명의료의향서에 호스피스 서비스 선택 및 이용에 대한 본인의 의향을 표시할 수 있습니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          작성자께서 호스피스 서비스를 이용할지에 대한 생각을 결정하지 못했다면 표시하지 않아도 됩니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          이용 의향이 있다고 체크하시면 자동으로 신청이 되는 것이 아니라, 나중에 실제 호스피스 대상 환자가 되셨을 때 별도의 호스피스 서비스 신청 절차를 거쳐야 이용 가능합니다. 
          </Text> 
          <Text style={styles.talktextstyle}>
          호스피스 이용 의향은 지금 결정하지 않더라도, 추후 호스피스 대상 환자가 되었을 때 신청을 하실 수 있습니다.
          </Text>
        </View> 
        <View style={styles.exliststyle}>
          <Text style={styles.extextstyle}>
          • 호스피스 서비스를 이용할 의향이 있다 하더라도 반드시 이용할 수 있는 것은 아니며 연명의료결정법 제28조에 따른 별도의 호스피스 서비스 신청 절차를 거쳐야 함을 설명한다.
          </Text> 
          <Text style={styles.extextstyle}>
          - 단, 지금 결정하는 것이 아니며 이용 의향이 있다면 향후 의사가 한 번 더 확인할 때 결정하면 된다.
          </Text> 
        </View>
        <Textlist 
          text="• 호스피스를 이용하려는 경우에는 호스피스 이용동의서와 의사가 발급하는 호스피스 대상 환자임을 나타내는 의사소견서를 첨부하여 호스피스전문기관에 신청한다."
        />
        <Textlist 
          text="• 호스피스 이용 시 경제적 부담에 대해 간단히 설명한다(본인부담금5%, 이용기간, 대략적 본인 부담금)."
        /> 
      </ScrollView>
      <Buttonlist 
        title="다음"
        routename="counseltalkdul3"
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

export default counseltalkdul2;