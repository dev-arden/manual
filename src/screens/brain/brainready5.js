import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
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

const brainready5 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="추가 설명"
      />
      <ScrollView style={{flex:2}}>
        <Textlist 
          text="가족 등 동행 시 상담은 동행인과 분리된 공간에서 시행하여 동행인의 영향력을 배제하여야 하나, 인지기능저하 작성자의 경우 가족과 작성자 모두에게 설명해 작성자의 알 권리를 지키고 가족에게는 향후 발생할 수 있는 상황에 대한 사전 교육이 되도록 한다."
        />
      </ScrollView>
      <Buttonlist 
        title="확인"
        routename="brainready4"
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

export default brainready5;