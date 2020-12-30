import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../../components/Textlist';
import Buttonlist from '../../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Imagelist from "../../components/Imagelist";

const braintalkhana8 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="7.혈압상승제 투여"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../../assets/talkhana8.jpg')}
        />
        <Textlist 
          text="생명을 위협할 정도의 저혈압이나 쇼크상태에서 혈관을 수축시키는 혈압상승제를 사용합니다."
        />
        <Textlist 
          text="그러나 임종과정 환자에게 혈압상승제를 투여하는 것은 오히려 자연스러운 임종, 불필요한 고통에서 벗어나 존엄한 임종을 맞이하도록 하겠다는 취지에 맞지 않습니다."
        />
      </ScrollView> 
      <Buttonlist
        title = "다음"
        routename = "braintalkhana9"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewstyle : {
    flex:1,
    justifyContent : 'center'
  }
});

export default braintalkhana8;