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

const brainid10 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="추가 설명"
      />
      <ScrollView style={{flex:2}}>
        <Textlist 
          text="연명의료에 대한 경험 등의 얘기를 통해 작성자가 연명의료의 인지 정도와 자발적 의사로 의향서를 작성하러 왔음을 확인한다."
        />
        <Textlist 
          text="임종계획 및 죽음에 대한 생각 정도를 통해 본인의 삶을 스스로 마무리한다는 측면에서 의향서 작성의 의미를 깊이 고민하여 결정하는 것인지 확인한다."
        />
      </ScrollView>
      <Buttonlist 
        title="확인"
        routename="braintalk2"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewstyle:{
    flex:1,
    justifyContent : 'center'
  }
});

export default brainid10;