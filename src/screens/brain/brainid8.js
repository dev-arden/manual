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

const brainid8 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="추가 설명"
      />
      <ScrollView style={{flex:2}}>
        <Textlist 
          text="등록기관 상담자는 의향서 작성을 희망하는 사람에게 사전연명의료의향서의 의의 및 작성 전 알아야 할 사항에 대한 설명을 제공하고, 상담 일지 작성이 가능하다."
        />
        <Textlist 
          text="상담 일지 작성 시 등록기관의 장은 작성자의 개인정보 관리에 힘써야 한다."
        />
      </ScrollView>
      <Buttonlist 
        title="확인"
        routename="brainid7"
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

export default brainid8;