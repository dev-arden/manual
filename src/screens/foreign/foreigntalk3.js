import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../../components/Textlist';
import Buttonlist from '../../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Imagelist from "../../components/Imagelist";

const foreigntalk3 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="사전연명의료의향서의 의미"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../../assets/talk3.jpg')}
        />
        <Textlist 
          text="사전연명의료의향서는 19세 이상의 성인이 향후 자신의 연명의료중단 등 결정과 호스피스 이용에 관한 의사를 직접 문서로 작성한 것을 말합니다."
        />
        <Textlist 
          text="사전연명의료의향서를 작성한다는 것은 더 이상의 치료방법 없이 죽음에 임박하게 되고 스스로가 판단할 수 없는 무의식 등의 상황이 될 때를 대비하여, 미리 스스로 판단해 그러한 상황이 되었을 때 생명만 유지하는 연명의료는 하지 않겠다고 문서로 작성해 놓는 것입니다."
        />
      </ScrollView> 
      <Buttonlist
        title = "다음"
        routename = "foreigntalk34"
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

export default foreigntalk3;