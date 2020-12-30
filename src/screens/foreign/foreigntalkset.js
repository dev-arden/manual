import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../../components/Textlist';
import Buttonlist from '../../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Imagelist from "../../components/Imagelist";
import NavLink from '../../components/NavLink';

/**
 * 적법하게 작성된 사전연명의료의향서는 연명의료에 관한 작성자 본인의 명시적 의사 표시로서, 향후 작성자가 임종과정에 있는 환자로 판단될 때 담당의사 (의사를 표현할 수 없는 의학적 상태인 경우 담당의사 및 해당분야 전문의)의 확인을 거쳐 연명의료를 시행하지 않거나 중단할 수 있는 효력을 가지게 됩니다.  
 */

const foreigntalkset = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="사전연명의료의향서의 효력 및 효력 상실에 관한 사항"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../../assets/talkset.jpg')}
        />
        <Textlist 
          text="사전연명의료의향서의 효력 및 효력 상실에 관한 사항에 대하여 설명해 드리겠습니다."
        />
        <Textlist 
          text="법에 따라 작성된 사전연명의료의향서는 연명의료에 관한 작성자 본인의 분명한 의사 표시로서, 향후 작성자가 임종과정에 있는 환자로 판단될 때 담당의사 (의사를 표현할 수 없는 의학적 상태인 경우 담당의사 및 해당분야 전문의)의 확인을 거쳐 연명의료를 시행하지 않거나 중단할 수 있는 효력을 가지게 됩니다."
        />
        <Textlist 
          text="환자가 과거에 의향서를 작성해서 등록하였더라도, 말기 환자 또는 임종과정에 있는 환자로 판단된 경우 담당의사와 함께 연명의료계획서를 다시 작성할 수 있습니다."
        />
        <Textlist 
          text=" 환자가 연명의료계획서를 작성한다면, 과거에 작성한 의향서의 효력은 상실됩니다."
        />
        <Textlist 
          text="의향서가 작성되었다 하더라도 본인이 직접 작성하지 않은 경우, 본인의 자발적 의사에 따라 작성되지 않은 경우, 작성 전 등록기관이 설명해야 할 내용이 제공되지 않거나 작성자의 확인을 받지 않은 경우에는 의향서로서의 효력이 인정되지 않습니다."
        />
        <NavLink 
          text="추가 설명 확인하기"
          routeName="foreigntalkset2"
        />
      </ScrollView> 
      <Buttonlist
        title = "다음"
        routename = "foreigntalknet1"
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

export default foreigntalkset;