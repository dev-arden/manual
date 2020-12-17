import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../components/Textlist';
import Titlelist from '../components/Titlelist';
import Buttonlist from '../components/Buttonlist';
import Exwithhead from '../components/Exwithhead';
import Exlist from '../components/Exlist';


const counselmean6 = () => {
  return (
    <ScrollView>
      <View style = {styles.viewstyle}>
        <Exwithhead 
          title="사전연명의료의향서 작성의도 확인:"
          text="사전연명의료의향서 이유와 등록기관 방문 경로를 확인함으로 자발적 의사 여부를 확인하여 주치의, 복지관, 강의 등 어떤 이유로 작성하려는지 파악함"
        />
        <Exlist 
          text="연명의료와 사전연명의료의향서 작성에 대하여 간단하게 설명"
        />
        <Exlist 
          text="연명의료에 대한 경험 등의 얘기를 통해 내담자가 연명의료의 인지 정도와 자발적 의사로 의향서를 작성하러 왔음을 확인"
        />
        <Exlist 
          text="임종계획 및 죽음에 대한 생각 정도를 통해 본인의 삶을 스스로 마무리한다는 측면에서 의향서 작성의 의미를 깊이 고민하여 결정하는 것인지 확인"
        />
        <Buttonlist
          title = "다음"
          routename = "counselmean7"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewstyle:{
    flex:1,
    justifyContent : 'center'
  },
});

export default counselmean6;