import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../components/Textlist';
import Buttonlist from '../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../components/TitlewithoutImage';
import Imagelist from "../components/Imagelist";

/**
 * 
 * 의향서가 작성되었다 하더라도 본인이 직접 작성하지 않은 경우 , 본인의 자발적 의사에 따라 작성되지 않은 경우, 작성 전 등록기관이 설명해야 할 내용이 제공되지 않거나 작성자의 확인을 받지 않은 경우에는 의향서로서의 효력이 인정되지 않음을 설명하여야 합니다.  
 * 추후  호스피스 대상 환자가 되었을 때 신청을 하셔도 됩니다. 
 */

const counseltalkset3 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="사전연명의료의향서 효력 상실"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../assets/noname.png')}
        />
        <Textlist 
          text="의향서가 작성되었다 하더라도 본인이 직접 작성하지 않은 경우 , 본인의 자발적 의사에 따라 작성되지 않은 경우, 작성 전 등록기관이 설명해야 할 내용이 제공되지 않거나 작성자의 확인을 받지 않은 경우에는 의향서로서의 효력이 인정되지 않음을 설명하여야 합니다."
        />
        <Textlist 
          text="추후  호스피스 대상 환자가 되었을 때 신청을 하셔도 됩니다."
        />
      </ScrollView> 
      <Buttonlist
        title = "완료"
        routename = "counseltalk7"
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

export default counseltalkset3;