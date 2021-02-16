import React from 'react';
import {Text, View, StyleSheet, Image,ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native';
import Titleforeign2 from '../../components/Titleforeign2';
//import Buttonlist from '../components/Buttonlist';
import ButtonFinish from '../../components/ButtonFinish';
import Fontisto from 'react-native-vector-icons/Fontisto';

const foreignenter1 = ({}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titleforeign2 
        title="8단계"
        text="등록카드 발급 여부 확인"
      />
      <ScrollView style={{flex:2}}>
        <View style={styles.talkliststyle}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Fontisto name="quote-a-right" size={20}/>
            <Fontisto name="quote-a-left" size={20}/>
          </View>
          <Text style={styles.talktextstyle}>
          사전연명의료의향서 등록카드를 무료로 발급받을 수 있습니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          발급신청을 하시겠습니까?
          </Text> 
          <Text style={styles.talktextstyle}>
          지금 발급받지 않아도 이후 원하실 때 언제든지 신청이 가능합니다. 
          </Text> 
          <Text style={styles.talktextstyle}>
          등록카드를 발급받지 않으셔도 작성하신 사전연명의료의향서의 법적효력은 유지됩니다.
          </Text>
          <Text style={styles.talktextstyle}>
          의향서에 작성하신 주소지로 배송을 원하시나요? 
          </Text>
          <Text style={styles.talktextstyle}>
          만약 다른 주소지로 배송을 원하시면 그 주소를 알려주십시오.
          </Text>
          <Text style={styles.talktextstyle}>
          단, 등록카드 발급기간은 2개월 정도 소요됩니다. 
          </Text>
          <Text style={styles.talktextstyle}>
          카드 발급 후 분실하였을 때 국립연명의료관리기관(1855-0075, 수신자부담 1422-25)으로 연락주시면 언제든지 무료로 재발급이 가능합니다.
          </Text>
          <Image 
            source={require('../../../assets/counselenter1.png')}
            style={{height : 150, width : 330, resizeMode:'contain', alignSelf:'center'}}
          />
        </View> 
        <View style={styles.exliststyle}>
          <Text style={styles.extextstyle}>
          • 사전연명의료의향서의 등록이 완료되면 등록카드 수령 의사를 확인한다.
          </Text> 
          <Text style={styles.extextstyle}>
          - 연명의료정보처리시스템에서 서식 등록 완료 후 등록카드 발급을 신청할 수 있다.
          </Text>
          <Text style={styles.extextstyle}>
          - 신청 후 발급기간은 몇 주(약 8주)가 소요됨을 안내한다.
          </Text>
          <Text style={styles.extextstyle}>
          - 등록카드는 지금이 아니더라도 언제든 발급신청을 할 수 있으며, 분실했을 때 재신청도 가능함을 안내한다.
          </Text>
          <Text style={styles.extextstyle}>
          - 등록카드 신청 전화 : 국립연명의료관리기관 1855-0075(수신자부담 1422-25)
          </Text>
          <Text style={styles.extextstyle}>
          - 작성된 주소지로 배송을 원하는지 확인한다.
          </Text>
        </View> 
        <View style={styles.exliststyle}>
          <Text style={styles.extextstyle}>
          • 등록카드 발급을 신청한 경우 정보처리시스템에서 서식 등록 완료 후 등록카드 발급을 신청할 수 있다.
          </Text> 
          <Text style={styles.extextstyle}>
          - (신청 방법)
          </Text>
          <Text style={styles.extextstyle}>
          연명의료정보처리시스템(intra.lst.go.kr)에서 서식 등록 완료 시 나타나는 우측 등록카드 신청 영역에서 ‘신청’ 버튼 클릭
          </Text>
          <Text style={styles.extextstyle}> 
          (기존 작성자의 등록카드 신청 시, 사전연명의료의향서 등록관리 → 작성자 확인 → 우측 ‘신청’ 버튼 클릭)
          </Text>
          <Text style={styles.extextstyle}>
          - 등록자가 연명의료정보처리시스템(intra.lst.go.kr)에서 서식 등록 완료 시 메시지 화면(등록증을 발급받으시겠습니까?)이 열리고 발급 버튼을 누르면 된다.
          </Text>
          <Text style={styles.extextstyle}>
          - (배송지 수정) ‘우편번호’ 클릭 후 배송지 정보(주소) 수정 가능하며 해당 내용은 의향서에 반영되지 않는다.
          </Text>
        </View> 
      </ScrollView>
      <ButtonFinish 
        routename="foreignmanual"
        routename2="foreignannounce1"
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

export default foreignenter1;