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

/**
 * 이제 의향서를 등록하고자 합니다. 
 * 혹 더 궁금한 사항 있으신가요?
 * 작성된 의향서는 국립연명의료관리기관의 연명의료정보처리시스템에 저장이 됩니다. 
 * 그리고 지금까지 나누었던 상담내용 및 모든 정보는 저장되거나 유출되지 않습니다. 
 */

const edupurpose1 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="2.목적"
      />
      <ScrollView style={{flex:2}}>
        <Textlist 
          text="연명의료결정법의 목적은 의학적으로 ‘임종과정에 있는 환자’로 판단된 환자에게 연명의료를 시행하지 않거나 중단할지를 미리 환자가 스스로 결정할 수 있도록 하고, 그 결정을 법적으로 보호하여 환자의 최선의 이익을 보장하고 자기결정을 존중해 인간으로서의 존엄과 가치를 보호하는 것이다."
        />
        <Textlist 
          text="모든 환자는 최선의 치료를 받으며, 자신이 앓고 있는 질병의 상태와 향후 본인에게 시행 될 의료 행위에 대하여 충분히 이해하고 스스로 결정할 권리를 보장받아야 한다."
        />
        <Textlist 
          text="의료인은 환자에게 최선의 치료를 제공하고, 연명의료중단 등 결정에 관하여 정확하고 자세하게 설명하며, 그에 따른 환자의 결정을 존중해야 한다.
          "
        />
      </ScrollView> 
      <ButtonFinish 
        routename="eduinfo"
        routename2="eduword1"
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

export default edupurpose1;