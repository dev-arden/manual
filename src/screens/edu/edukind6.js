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
import ExonlyHead from '../../components/ExonlyHead';
import Numhead from '../../components/Numhead';

/**
 * 이제 의향서를 등록하고자 합니다. 
 * 혹 더 궁금한 사항 있으신가요?
 * 작성된 의향서는 국립연명의료관리기관의 연명의료정보처리시스템에 저장이 됩니다. 
 * 그리고 지금까지 나누었던 상담내용 및 모든 정보는 저장되거나 유출되지 않습니다. 
 */

const edukind6 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="6.연명의료 시술의 종류"
      />
      <ScrollView style={{flex:2}}>
        {/* <Numhead 
          title="중단할 수 있는 연명의료 시술"
        /> */}
        <ExonlyHead 
          title="수혈"
        />
        <Textlist 
          text="수혈은 정맥에 정맥관(IV)을 삽입하여 혈액을 투여하는 시술로서, 신체가 혈액의 일부를 생성할 수 없거나 혈구가 제대로 활동하지 않을 때, 또는 피를 많이 흘렸을 때 필요할 수 있는 치료 방법."
        />
        <Textlist 
          text="미열이나 피부발진과 같은 경미한 반응 또는 체액 과부하와 같은 부작용이 있을 수 있음. 이 밖에 자신에게 적합하지 않은 혈액의 수혈, 알레르기나 급성 폐 손상 등의 심각한 반응, 세균이나 바이러스 등의 감염 등의 문제가 있을 수 있음."
        />
        <Textlist 
          text="주의: 임종에 직면시 혈액투석을 하지 않겠다는 의미임."
        />
        {/* <Exwithhead 
          title="주의"
          text="임종에 직면시 수혈을 하지 않겠다는 것이다."
        />  */}
      </ScrollView> 
      <Buttonlist 
        title="다음"
        routename="edukind7"
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

export default edukind6;