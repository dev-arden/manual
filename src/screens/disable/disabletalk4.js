import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../../components/Textlist';
import Buttonlist from '../../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Imagelist from "../../components/Imagelist";

const disabletalk4 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="사전연명의료의향서의 작성"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../../assets/talk4.jpg')}
        />
        <Textlist 
          text="사전연명의료의향서는 반드시 보건복지부지정을 받은 등록기관에 소속된 상담자를 통해 충분한 설명을 듣고 작성할 수 있으며, 별도의 비용은 청구되지 않습니다."
        />
        <Textlist 
          text="작성 후 본인의 의사가 변경된 경우 언제든지 변경 또는 철회도 가능합니다."
        />
      </ScrollView> 
      <Buttonlist
        title = "다음"
        routename = "disabletalk5"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewstyle:{
    flex:1,
    justifyContent : 'center'
  },
});

export default disabletalk4;