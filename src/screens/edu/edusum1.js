import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Buttonlist from '../../components/Buttonlist';
import Exwithhead from '../../components/Exwithhead';
import Circletext from '../../components/Circletext';
import Textlist from '../../components/Textlist';
import ButtonFinish from '../../components/ButtonFinish';
import ExImage from '../../components/ExImage';

/**
 * 이제 의향서를 등록하고자 합니다. 
 * 혹 더 궁금한 사항 있으신가요?
 * 작성된 의향서는 국립연명의료관리기관의 연명의료정보처리시스템에 저장이 됩니다. 
 * 그리고 지금까지 나누었던 상담내용 및 모든 정보는 저장되거나 유출되지 않습니다. 
 */

const edusum1 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="개요"
      />
      <ScrollView style={{flex:2}}>
        <Textlist 
          text="‘사전연명의료의향서’란 19세 이상의 사람이 자신의 연명의료중단 등 결정이나 호스피스 이용에 관한 의사를 직접 문서로 작성한 것을 말한다(법 제2조·제9호)"
        />
        <Textlist 
          text="사람이라면 누구나 죽음을 맞이하게 되고 임정과정으로의 진입은 예상치 못한 순간에 급작스럽게 이루어질 수 있으므로, 건강한 사람이라 할지라도 미리 임종을 고민하고, 임종과정에 본인에게 시행될 의료 행위가 단순히 임종과정의 기간만을 연장하는 것일 수 있다는 사실을 생각해 볼 기회를 가질 필요가 있다."
        />
        <Textlist 
          text="숙고 후, 사전연명의료의향서를 통해 임종과정에서의 연명의료를 시행하지 않거나 중단하고자 하는 결정을 내릴 수 있다. 혹은 연명의료를 계속 시행하기를 원하는 결정을 내릴 수도 있으나, 어떠한 결과를 선택하든 본인의 삶을 마무리하는 방식에 대해서 스스로 생각하고 결정할 수 있다는 점은 큰 의미가 있다."
        />
        <Textlist 
          text="사전연명의료의향서는 반드시 보건복지부 지정을 받은 사전연명의료의향서 등록기관을 통해 충분한 설명을 듣고 작성해야 하며, 등록기관을 통해 작성·등록된 사전연명의료의향서는 연명의료 정보처리시스템(insra.lst.go.kr)에 등록되어야 법적 효력을 인정받을 수 있다."
        />
        <Textlist 
          text="단, 사전연명의료의향서를 통한 결정은 현재 구체적인 상병에 관한 의사는 아니므로, 추후 의료기관 입원 시 담당의사로부터 자신의 상병의 상태와 예후 및 향후 본인에게 시행될 의료 행위에 대하여 설명을 듣고 연명의료계획서를 작성할 수도 있다. 만일 사전연명의료의향서만을 작성한 채 임종과정에 있는 환자로 판단되었다면, 담당의사가 작성자 본인에게 다시 확인하여야 이행될 수 있다. 만일 환자가 의사를 표현할 수 없는 의학적 상태이면 담담의사와 해당 분야의 전문의가 함께 확인해야 한다."
        />
        <ExImage 
          title="사전연명의료의향서 작성 및 조회"
          text=""
          imageSource={require('../../../assets/edusum1.png')}
          imageStyle={{height : 100, width : 330, resizeMode:'contain'}}
        />
      </ScrollView> 
      <Buttonlist 
        title="다음"
        routename="edusum2"
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

export default edusum1;