import React from 'react';
import {View, StyleSheet, Image,Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../../components/Textlist';
import Buttonlist from '../../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';

/**
 * 
 *  저는 보건복지부 지정을 받은 사전연명의료의향서 등록기관인 [기관명] 소속 상담사이며, 의향서 작성을 돕고 있습니다. 
   [상담자 신분증과 등록기관 지정서 제시
 */

const deafid55 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="추가 설명"
      />
      <ScrollView style={{flex:2}}>
        <Textlist
          text="효과적인 상담을 위해 대상자의 특성을 알고리즘에 따라 상담 관련 불편한 점을 질문한 후, 없다고 대답한 경우 간편인지검사를 시행한다."
        />
        <Textlist
          text="총점 4점 중 3점 이상인 경우 표준상담매뉴얼로 상담을 진행하고 2점 이하인 경우 인지맞춤상담을 진행한다."
        />
        <Textlist
          text="점수결과는 사전연명의료의향서의 작성자란에 “간편인지검사 __점”이라고 표기한다."
        />
        <Textlist
          text="불편한 점을 파악하며 필요한 상담방법을 알고리즘에 따라 결정한다."
        />
        <Textlist 
          text="수화통역 시 통역으로 들은 바를 상담사가 노트에 기록하면서, 작성자가 확인할 수 있도록 한다."
        />
        <Textlist 
          text="수화로 통역할 동행자와 함께 내방한 경우, 작성자와의 관계를 확인하고 상담일지에 이름, 전화번호, 작성자와의 관계를 작성하도록 한다"
        />
        <Textlist 
          text="만약 가족이 통역을 진행할 경우, 작성자의 의사결정인지 확인이 필요하다."
        />
      </ScrollView>
      <Buttonlist 
        title="확인"
        routename="deafid2"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
 textstyle:{
  fontSize:20,
  color:'black',
  //paddingHorizontal: 10,
  flex:1,
  marginLeft : 10,
  alignSelf: 'center',
  //textAlign: 'justify'
  // borderWidth:1,
  // borderColor:'black'
},
});

export default deafid55;