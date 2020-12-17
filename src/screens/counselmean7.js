import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../components/Textlist';
import Titlelist from '../components/Titlelist';
import Buttonlist from '../components/Buttonlist';
import Exwithhead from '../components/Exwithhead';
import Exlist from '../components/Exlist';


const counselmean7 = () => {
  return (
    <ScrollView>
      <View style = {styles.viewstyle}>
        <Exwithhead 
          title="본인의 삶을 스스로 마무리한다는 측면에서 의향서 작성의 의미를 깊이 고민하고 작성 여부를 결정하도록 안내"
          text="- 경제적인 문제나 자녀의 부양 부담 등이 주된 이유가 되지 않도록 숙고할 것을 권고
           - 경제적인 문제나 자녀의 부양 부담에 대한 대화는 내담자의 고민을 초래할 수 있기 때문에 상담사가 먼저 이에 대한 내용을 먼저 얘기하지 않도록 주의가 필요"
        />
        <Exlist 
          text="향후 담당의사 1인 및 전문의 1인에 의해 임종과정에 있는 환자라는 판단을 받는 경우, 미리 작성해 둔 의향서가 있다면 의사의 확인을 거쳐 연명의료에 관한 작성자 본인의 의사로 인정될 수 있음을 설명"
        />
        <Exwithhead 
          title="상담자는 중립적으로 의향서의 도입 취지와 그 효력 등 제도를 소개하고 작성자 스스로 작성 여부를 정할 수 있도록 지원하여야 함"
          text="상담자의 역할은 충분한 설명을 통해 작성자가 의향서를 이해할 수 있도록 돕는 것이므로, 작성을 유도하거나 권유하지 않도록 주의해야 함"
        />
        <Buttonlist
          title = "완료"
          routename = "manual1"
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

export default counselmean7;