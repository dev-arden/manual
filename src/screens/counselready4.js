import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Titlelist from '../components/Titlelist';
import Textlist from '../components/Textlist';
import Buttonlist from '../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../components/TitlewithoutImage';
import Imagelist from '../components/Imagelist';

/**
 * 
 *  저는 보건복지부 지정을 받은 사전연명의료의향서 등록기관인 [기관명] 소속 상담사이며, 의향서 작성을 돕고 있습니다. 
   [상담자 신분증과 등록기관 지정서 제시
 */

const counselready4 = ({navigation}) => {
  return (
    // <ScrollView>
    //   <View style = {styles.viewstyle}>
    //     <Titlelist 
    //       title="[신분증]"
    //       imageSource={require('../../assets/id2.png')}
    //     />
    //     <Textlist 
    //       text="사전연명의료의향서는 다른 사람이 대신 작성할 수 없고, 19세 이상의 성인만이 작성할 수 있습니다."
    //     />
    //     <Buttonlist 
    //       title="다음"
    //       routename="counselid3"
    //     />
    //   </View>
    // </ScrollView>
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="동행자 분리 상담"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../assets/id2.png')}
        />
        <Textlist 
          text="사전연명의료의향서는 다른 사람이 대신 작성할 수 없고, 19세 이상의 성인만이 작성할 수 있습니다."
        />
      </ScrollView>
      <Buttonlist 
        title="준비 완료"
        routename="manual1"
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