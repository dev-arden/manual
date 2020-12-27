import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Titlelist from '../components/Titlelist';
import Textlist from '../components/Textlist';
import Buttonlist from '../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../components/TitlewithoutImage';
import Imagelist from '../components/Imagelist';
import NavLink from "../components/NavLink";
import ButtonFinish from '../components/ButtonFinish';

/**
 * 
 *  저는 보건복지부 지정을 받은 사전연명의료의향서 등록기관인 [기관명] 소속 상담사이며, 의향서 작성을 돕고 있습니다. 
   [상담자 신분증과 등록기관 지정서 제시
 */

const counselready4 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="동행자 분리 상담"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../assets/noname.png')}
        />
        <Textlist 
          text="[동행자와 함께 방문한 경우]"
        />
        <Textlist 
          text="사전연명의료의향서의 작성은 독립된 공간에서 1:1 상담을 통해 진행됩니다."
        />
        <Textlist 
          text="혹시라도 발생할 수 있는 동행하신 분의 영향력을 차단하기 위해서니 상담실 밖에서 잠시 대기하여 주시기 바랍니다."
        />
        <NavLink 
          routeName="counselready5"
          text="추가 설명 확인하기"
        />
      </ScrollView>
      <ButtonFinish 
        routename="manual1"
        routename2="counselinfo1"
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

export default counselready4;