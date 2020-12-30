import React from 'react';
import {StyleSheet,Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import ButtonFinish from '../../components/ButtonFinish';
import Icontext from '../../components/Icontext';

/**
 * 이제 의향서를 등록하고자 합니다. 
 * 혹 더 궁금한 사항 있으신가요?
 * 작성된 의향서는 국립연명의료관리기관의 연명의료정보처리시스템에 저장이 됩니다. 
 * 그리고 지금까지 나누었던 상담내용 및 모든 정보는 저장되거나 유출되지 않습니다. 
 */

const brain3 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="인지기능저하 작성자 응대 시 상담자세"
      />
      <ScrollView style={{flex:2}}>
        <Icontext 
          text="조용한 환경에서 가능한 한 천천히 설명한다."
        />
        <Icontext 
          text="초기 상담 시 나이나 외관만으로 선입견을 가지지 않도록 주의한다."
        />
        <Icontext 
          text="지적장애나 치매 여부에 따라 일률적으로 사전연명의료의향서 작성에 대하여 설명을 하지 않는 것은 기본권을 침해하는 것이다."
        />
        <Icontext 
          text="사전연명의료의향서를 작성할 수 있는지 여부는 작성자의 구체적인 상태에 따라 달라질 수 있으며 설명의 기회가 제공되지 않은 상태에서 임종과정에 진입하였을 때는 환자가족의 진술이나 합의를 통해 연명의료를 유보 또는 중단할 수 있다."
        />
        <Icontext 
          text="노인은 신체적 노화로 인하여 청력 등의 감각기능 저하로 인하여 의사소통이 되지 않아 인지기능이 저하되었다고 판단할 수 있다. 따라서 노인의 연령과 신체적 노화 정도를 파악하여 상담을 진행해야 한다."
        />
        <Icontext 
          text="노인은 시력 및 청력저하, 방향감각 상실, 처방약 (미)복용으로 인한 신체적 상태 등의 변화로 일시적으로 인지기능 저하가 있을 수 있다."
        />
        <Icontext 
          text="노화로 인하여 경미한 인지장애가 보일 경우, 연명의료에 대한 이해정도와 자발적 의사 여부에 대한 확인이 가능한지, 법적인 문제가 없는지 확인한다."
        />
      </ScrollView> 
      <ButtonFinish 
        routename="manual5"
        routename2="disablemanual"
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
    //borderWidth:1,
    backgroundColor: 'white',
    marginHorizontal : 20,
    marginVertical : 15,
  }
});

export default brain3;