import React from 'react';
import {StyleSheet,View,Image,Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Buttonlist from '../../components/Buttonlist';
import Exwithhead from '../../components/Exwithhead';
import Circletext from '../../components/Circletext';
import Textlist from '../../components/Textlist';
import ButtonFinish from '../../components/ButtonFinish';
import ExImage from '../../components/ExImage';
import Imagelist from '../../components/Imagelist';
import ExonlyHead from '../../components/ExonlyHead';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Numhead from '../../components/Numhead';
/**
 * 이제 의향서를 등록하고자 합니다. 
 * 혹 더 궁금한 사항 있으신가요?
 * 작성된 의향서는 국립연명의료관리기관의 연명의료정보처리시스템에 저장이 됩니다. 
 * 그리고 지금까지 나누었던 상담내용 및 모든 정보는 저장되거나 유출되지 않습니다. 
 */

const eduhos2 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="7.호스피스・완화의료"
      />
      <ScrollView style={{flex:2}}>
        {/* <View style={styles.exliststyle}>
          <View style = {styles.exviewstyle}>
            <FontAwesome name="square" size={17} color="black" style={{alignSelf:'center'}}/>
              <View style={{flexDirection:'column'}}>
                <Text style={styles.extitlestyle}>
                사전연명의료의향서 작성 시 호스피스이용 의향 선택 가능,
                </Text>
                <Text style={styles.extitlestyle}>
                단 향후 이용 시 별도의 신청 절차를 거쳐야 한다.
                </Text>
              </View>
          </View>  
        </View> */}
        <Textlist 
          text="사전연명의료의향서 작성 시 호스피스이용 의향 선택 가능, 단 향후 이용 시 별도의 신청 절차를 거쳐야 한다."
        />
        {/* <ExonlyHead 
          title="사전연명의료의향서 작성 시 호스피스이용 의향 선택 가능, 단 향후 이용 시 별도의 신청 절차를 거쳐야 한다."
        /> */}

        <ExonlyHead 
          title="호스피스 이용절차"
        />
        <View style={styles.exliststyle}>
          <View style = {styles.exviewstyle}>
            <MaterialCommunityIcons name="numeric-1-circle-outline" size={20} color="black" style={{alignSelf:'center'}}/>
            <Text style={styles.extitlestyle}>
              호스피스전문기관 선택
            </Text>
          </View>
            <Text style={styles.extextstyle}>
            - 담당 의료진과 상의하여 호스피스에 대한 안내를 받음.
            </Text> 
            <Text style={styles.extextstyle}>
            - 환자의 상태와 주요 거주지 등 환자와 가족의 희망이나 필요 사항을 고려하여 적절한 호스피스전문기관을 선택.
            </Text>
        </View>
        <View style={styles.exliststyle}>
          <View style = {styles.exviewstyle}>
            <MaterialCommunityIcons name="numeric-2-circle-outline" size={20} color="black" style={{alignSelf:'center'}}/>
            <Text style={styles.extitlestyle}>
              서류 준비
            </Text>
          </View>
            <Text style={styles.extextstyle}>
            - 지금까지 치료 받았던 기록
            </Text> 
            <Text style={styles.extextstyle}>
            1) 의사소견서 또는 진료의뢰서
            </Text>
            <Text style={styles.extextstyle}>
            2) 의무기록사본 : 최근 검사 자료(혈액검사결과, CT나 MRI 등), 현재 처방받고 있는 약에 대한 의사오더지 등
            </Text>
            <Text style={styles.extextstyle}>
            3) 필름(CD)복사 : 최근 검사한 영상검사인 CT나 MRI 등
            </Text>
            <Text></Text>
            <Text style={styles.extextstyle}>
            - 호스피스전문기관 방문
            </Text> 
            <Text style={styles.extextstyle}>
            1) 호스피스 담당의사의 진료를 받고, 호스피스의 선택과 이용에 관한 안내를 받음.
            </Text>
            <Text style={styles.extextstyle}>
            2) 호스피스 이용 동의서를 작성.
            </Text>
            <Text style={styles.extextstyle}>
            3) 호스피스병동에 입원하여 호스피스를 이용.
            </Text>
        </View>
        <View style={styles.exliststyle}>
            <View style = {styles.exviewstyle}>
            <FontAwesome name="square" size={17} color="black" style={{alignSelf:'center'}}/>
              <Text style={styles.extitlestyle}>
                문의
              </Text>
            </View>
            <Text style={styles.extextstyle}>
            중앙호스피스센터 홈페이지(www.hospice.go.kr)
            </Text> 
            <Text style={styles.extextstyle}>
            국가암정보센터(1577-8899)
            </Text>
          </View>
        
        {/* <Exwithhead 
          title="호스피스 의료비"
          text="암환자는 중증질환으로 본인부담 5%가 적용되며, 병원급 이상 1인실 상급병실 차액만 비급여로 납부."
        />
        <Textlist 
          text="요양병원 4인실 기준 1개월 입원시 급여의 본인부담금 약 50만 원 내외, 단 간병비 및 비급여 별도"
        />
        <Textlist 
          text="사전연명의료의향서 작성 시 호스피스이용 의향 선택 가능, 단 향후 이용 시 별도의 신청 절차를 거쳐야 한다."
        />
        <Exwithhead 
          title="신청 방법"
          text="호스피스를 이용하려는 경우에는 호스피스 이용동의서와 의사가 발급하는 호스피스 대상 환자임을 나타내는 의사소견서를 첨부하여 호스피스전문기관에 신청한다."
        />
        <Exwithhead 
          title="문의"
          text="중앙호스피스센터 홈페이지(www.hospice.go.kr)나 국가암정보센터(1577-8899)로 문의."
        /> */}
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

export default eduhos2;