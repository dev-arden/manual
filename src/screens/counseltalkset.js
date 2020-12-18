import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../components/Textlist';
import Buttonlist from '../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../components/TitlewithoutImage';
import Imagelist from "../components/Imagelist";

/**
 * 적법하게 작성된 사전연명의료의향서는 연명의료에 관한 작성자 본인의 명시적 의사 표시로서, 향후 작성자가 임종과정에 있는 환자로 판단될 때 담당의사 (의사를 표현할 수 없는 의학적 상태인 경우 담당의사 및 해당분야 전문의)의 확인을 거쳐 연명의료를 시행하지 않거나 중단할 수 있는 효력을 가지게 됩니다.  
 */

const counseltalkset = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="사전연명의료의향서의 효력"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../assets/maintain.png')}
        />
        <Textlist 
          text="적법하게 작성된 사전연명의료의향서는 연명의료에 관한 작성자 본인의 명시적 의사 표시로서, 향후 작성자가 임종과정에 있는 환자로 판단될 때 담당의사 (의사를 표현할 수 없는 의학적 상태인 경우 담당의사 및 해당분야 전문의)의 확인을 거쳐 연명의료를 시행하지 않거나 중단할 수 있는 효력을 가지게 됩니다."
        />
      </ScrollView> 
      <Buttonlist
        title = "다음"
        routename = "counseltalkset2"
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

export default counseltalkset;