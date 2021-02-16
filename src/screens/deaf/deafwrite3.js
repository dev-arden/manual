import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native';
import Titledeaf2 from '../../components/Titledeaf2';
//import Buttonlist from '../components/Buttonlist';
import ExonlyHead from '../../components/ExonlyHead';
import ButtonFinish from '../../components/ButtonFinish';
import Fontisto from 'react-native-vector-icons/Fontisto';

const deafwrite3 = ({}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titledeaf2 
        title="7단계"
        text="사전연명의료의향서 작성"
      />
      <ScrollView style={{flex:2}}>
        <ExonlyHead 
          title="등록 설명"
        />
        <View style={styles.talkliststyle}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Fontisto name="quote-a-right" size={20}/>
            <Fontisto name="quote-a-left" size={20}/>
          </View>
          <Text style={styles.talktextstyle}>
          이제 사전연명의료의향서를 등록하고자 합니다. 
          </Text> 
          <Text style={styles.talktextstyle}>
          혹시 더 궁금한 사항 있으신가요?
          </Text>
          <Text style={styles.talktextstyle}>
          작성된 의향서는 국립연명의료관리기관의 연명의료정보처리시스템에 저장됩니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          그리고 지금까지 나누었던 상담내용 및 모든 정보는 저장되거나 유출되지 않습니다.
          </Text> 
        </View> 
       
        <View style={styles.exliststyle}>
          <Text style={styles.extextstyle2}>
          가. 등록
          </Text> 
          <Text style={styles.extextstyle}>
          • 등록기관은 작성된 사전연명의료의향서의 본인 작성 여부를 확인하고 작성된 사전연명의료의향서를 등록하여야 한다.
          </Text>
          <Text style={styles.extextstyle2}>
          • 수기로 작성하는 경우:
          </Text>
          <Text style={styles.extextstyle}>
          수기로 작성된 의향서에 등록기관에서 관리할 수 있도록 자체적으로 관리번호를 부여하여 등록한다. 
          </Text>
          <Text style={styles.extextstyle}>
          수기로 작성된 사전연명의료의향서는 스캔하여 첨부한다.
          </Text>
          <Text style={styles.extextstyle2}>
          • 정보처리시스템에서 작성하는 경우:
          </Text> 
          <Text style={styles.extextstyle}>
          작성 완료와 동시에 등록 버튼을 누르면 원본이 서버 내에 등록된다.
          </Text>
          <Text style={styles.extextstyle2}>
          • 태블릿 PC에서 작성하는 경우:
          </Text> 
          <Text style={styles.extextstyle}>
          등록자가 작성자의 이름, 생년월일 검색으로 작성된 문서를 찾아 등록한다.
          </Text>
        </View>
        
        <View style={styles.exliststyle}>
          <Text style={styles.extextstyle2}>
          나. 보관
          </Text> 
          <Text style={styles.extextstyle}>
          • 등록된 의향서는 등록기관 폐업·휴업 또는 지정 취소 전까지 보관하여야 한다.
          </Text>
          <Text style={styles.extextstyle2}>
          • 수기로 작성하는 경우:
          </Text>
          <Text style={styles.extextstyle}>
          등록기관 내 잠금장치가 설치된 문서보관 설비에 원본을 보관한다.
          </Text>
          <Text style={styles.extextstyle2}>
          • 정보처리시스템에서 작성하는 경우:
          </Text> 
          <Text style={styles.extextstyle}>
          서버 내 저장 공간에 자동으로 보관된다.
          </Text>
        </View>

        <View style={styles.exliststyle}>
          <Text style={styles.extextstyle2}>
          다. 통보
          </Text> 
          <Text style={styles.extextstyle}>
          • 연명의료정보처리시스템을 통해서 작성된 사전연명의료의향서를 관리기관에 통보하되, 작성한 지 일주일 이내에 통보해야 한다.
          </Text>
          <Text style={styles.extextstyle2}>
          • 수기로 작성하는 경우:
          </Text>
          <Text style={styles.extextstyle}>
          등록이 완료된 사전연명의료의향서를 스캔 등을 통해 전자화 문서로 변환한 후 시스템상으로 통보한다.
          </Text>
          <Text style={styles.extextstyle2}>
          • 정보처리시스템에서 작성하는 경우:
          </Text> 
          <Text style={styles.extextstyle}>
          작성-등록-통보의 과정이 자동으로 연결된다.
          </Text>
          <Text style={styles.extextstyle}>
          ※ 정보처리시스템을 통한 등록 및 통보 시스템은 가이드라인을 참조한다.
          </Text>
        </View>

        <View style={styles.exliststyle}>
          <Text style={styles.extextstyle2}>
          라. 정보 유출 금지
          </Text> 
          <Text style={styles.extextstyle}>
          • 등록기관의 장, 상담자 및 등록자 등 등록기관에서 종사하거나 종사하였던 사람은 사전연명의료의향서의 상담 및 작성·등록·통보 과정에서 알게 된 정보를 유출할 수 없다,
          </Text>
          <Text style={styles.extextstyle}>
          • (위반 시) 3년 이하의 징역 또는 3천만 원 이하의 벌금(법 제39조제3호)
          </Text>
          <Text style={styles.extextstyle}>
          • (양벌 규정) 정보를 유출한 행위자 외에 그 법인에게도 행위자에게 부과한 것과 같은 내용의 벌금형을 부과한다.
          </Text>
          <Text style={styles.extextstyle}>
          단, 법인이 그 위반 행위를 방지하기 위하여 상당한 주의와 감독을 게을리하지 아니한 경우에는 제외한다.
          </Text>
        </View>
      </ScrollView>
      <ButtonFinish 
        routename="deafmanual"
        routename2="deafenter1"
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
  extextstyle2: {
    fontSize:20,
    color:'black',
    //paddingHorizontal: 10,
    flex:1,
    margin : 5,
    //alignSelf: 'center'
    textAlign: 'auto',
    lineHeight:30,
    fontWeight:'bold'
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

export default deafwrite3;