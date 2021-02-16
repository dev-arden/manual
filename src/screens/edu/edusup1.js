import React from 'react';
import {StyleSheet,View,Image,Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Buttonlist from '../../components/Buttonlist';
import Exwithhead from '../../components/Exwithhead';
import ExImage from '../../components/ExImage';
import ExonlyHead from '../../components/ExonlyHead';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

/**
 * 이제 의향서를 등록하고자 합니다. 
 * 혹 더 궁금한 사항 있으신가요?
 * 작성된 의향서는 국립연명의료관리기관의 연명의료정보처리시스템에 저장이 됩니다. 
 * 그리고 지금까지 나누었던 상담내용 및 모든 정보는 저장되거나 유출되지 않습니다. 
 */

const edusup1 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="2.사전연명의료의향서 작성지원 절차"
      />
      <ScrollView style={{flex:2}}>
        <ExonlyHead 
          title = "등록기관의 의향서 상담 작성 지원 단계"
        />
        <View style={styles.viewstyle}>
          <Image 
            source={require('../../../assets/sup1.png')}
            style={{height : 330, width : 330, resizeMode:'contain'}}
          />
        </View>
        {/* <ExImage 
          title="등록기관의 의향서 상담 작성 지원 단계"
          text=""
          imageSource={require('../../../assets/sup1.png')}
          imageStyle={{height : 150, width : 330, resizeMode:'contain'}}
        /> */}
        {/* <Exwithhead 
          title="1단계"
          text="사전연명의료의향서 상담을 위한 준비 독립된 상담실로 안내"
        /> */}
        <View style={styles.exliststyle}>
          <View style = {styles.exviewstyle}>
            <FontAwesome name="square" size={17} color="black" style={{alignSelf:'center'}}/>
            <Text style={styles.extitlestyle}>
            1단계
            </Text>
          </View>
          <Text style={styles.extextstyle}>
          사전연명의료의향서 상담을 위한 준비
            </Text> 
            <Text style={styles.extextstyle}>
            독립된 상담실로 안내
            </Text> 
        </View>
        <Exwithhead 
          title="2단계"
          text="등록기관 및 상담자 소개"
        />
        <Exwithhead 
          title="3단계"
          text="의향서 및 제도 소개"
        />
        <Exwithhead 
          title="4단계"
          text="의향서 작성 의사 확인"
        />
        <Exwithhead 
          title="5단계"
          text="작성자 본인 및 의사결정 능력 확인"
        />
        <Exwithhead 
          title="6단계"
          text="의향서 작성을 위한 항목 설명"
        />
        <Exwithhead 
          title="7단계"
          text="의향서 작성"
        />
        <Exwithhead 
          title="8단계"
          text="등록카드 발급 여부 확인"
        />
        <Exwithhead 
          title="9단계"
          text="작성된 의향서 등록 및 통보 안내"
        />
        <Exwithhead 
          title="10단계"
          text="의향서 작성 완료 안내"
        />
      </ScrollView> 
      <Buttonlist 
        title="완료"
        routename="eduhome"
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
  marginBottom : 10,
  alignContent : 'center',
  // borderColor : 'black',
  // borderWidth : 1
}
});

export default edusup1;