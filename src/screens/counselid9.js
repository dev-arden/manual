import React from 'react';
import {View, StyleSheet, Image,Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../components/Textlist';
import Buttonlist from '../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../components/TitlewithoutImage';
import Exwithhead from '../components/Exwithhead';

/**
 * 
 *  저는 보건복지부 지정을 받은 사전연명의료의향서 등록기관인 [기관명] 소속 상담사이며, 의향서 작성을 돕고 있습니다. 
   [상담자 신분증과 등록기관 지정서 제시
 */

const counselid9 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="추가 설명"
      />
      <ScrollView style={{flex:2}}>
        <Exwithhead 
          title="사전연명의료의향서 작성의도 확인"
          text="사전연명의료의향서 이유와 등록기관 방문 경로를 확인함으로 자발적 의사 여부를 확인하여 주치의, 복지관, 강의 등 어떤 이유로 작성하려는지 파악한다."
        />
        <Textlist 
          text="본인의 삶을 스스로 마무리한다는 측면에서 의향서 작성의 의미를 깊이 고민하고, 작성 여부를 결정하도록 안내한다."
        />
        <Textlist 
          text="경제적인 문제나 자녀의 부양 부담 등이 주된 이유가 되지 않도록 숙고할 것을 권고한다."
        />
        <Textlist 
          text="경제적인 문제나 자녀의 부양 부담에 대한 대화는 작성자의 고민을 초래할 수 있기 때문에 상담사가 이에 대한 내용을 먼저 얘기하지 않도록 주의가 필요하다."
        />
        <Textlist 
          text="상담자는 중립적으로 의향서의 도입 취지와 그 효력 등 제도를 소개하고, 작성자 스스로 작성 여부를 정할 수 있도록 지원해야 한다."
        />
        <Textlist 
          text="상담자의 역할은 충분한 설명을 통해 작성자가 의향서를 이해할 수 있도록 돕는 것이므로, 작성을 유도하거나 권유하지 않도록 주의해야 한다."
        />
      </ScrollView>
      <Buttonlist 
        title="확인"
        routename="counseltalk"
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

export default counselid9;