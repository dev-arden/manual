import React from 'react';
import {StyleSheet,View,Image} from 'react-native';
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

/**
 * 이제 의향서를 등록하고자 합니다. 
 * 혹 더 궁금한 사항 있으신가요?
 * 작성된 의향서는 국립연명의료관리기관의 연명의료정보처리시스템에 저장이 됩니다. 
 * 그리고 지금까지 나누었던 상담내용 및 모든 정보는 저장되거나 유출되지 않습니다. 
 */

const edurule1 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="관리체계"
      />
      <ScrollView style={{flex:2}}>
        <View style={styles.viewstyle}>
          <Image 
            source={require('../../../assets/edurule1.png')}
            style={{height : 150, width : 330, resizeMode:'contain'}}
          />
        </View>
        <Exwithhead 
          title="국가호스피스연명의료위원회"
          text="호스피스와 연명의료 및 연명의료중단 등 결정에 관한 종합계획 및 시행계획을 심의."
        />
        <Exwithhead 
          title="국립연명의료관리기관"
          text="연명의료, 연명의료중단 등 결정 및 그 이행에 관한 사항을 관리하는 업무로 1) 사전연명의료의향서에 대한 데이터베이스의 구축 및 관리, 2) 사전연명의료의향서 등록기관에 대한 관리·지도·감독, 3) 연명의료계획서 및 사전연명의료의향서 확인 조회 요청에 대한 회답, 4) 연명의료, 연명의료중단 등 결정 및 그 이행의 현황에 대한 조사·연구, 정보수집 및 관련 통계의 산출 등을 수행."
        />
        <Exwithhead 
          title="사전연명의료의향서 등록기관"
          text="사전연명의료의향서 등록, 설명, 작성지원, 상담, 정보제공 및 홍보, 국립연명의료관리기관에 등록·변경·철회 등 결과 통보 등의 업무를 수행."
        />
        <Exwithhead 
          title="의료기관윤리위원회"
          text="연명의료중단 등 결정 및 그 이행에 관한 업무를 수행하려는 의료기관에 설치되어 1) 연명의료중단 등 결정 및 그 이행에 관하여 임종과정에 있는 환자와 그 환자가족 또는 의료인이 요청한 사항에 관한 심의, 2) 담당의사의 교체에 관한 심의, 3) 환자와 환자가족에 대한 연명의료중단 등 결정 관련 상담, 4) 해당 의료기관의 의료인에 대한 의료윤리교육하고, 연명의료 정보처리시스템에 등록 등의 업무를 수행."
        />
      </ScrollView> 
      <ButtonFinish 
        routename="eduinfo"
        routename2="eduprocess1"
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
 }
});

export default edurule1;