import React from 'react';
import {StyleSheet,View,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Buttonlist from '../../components/Buttonlist';
import Exwithhead from '../../components/Exwithhead';
import Circletext from '../../components/Circletext';
import Textlist from '../../components/Textlist';
import ButtonFinish from '../../components/ButtonFinish';
import ExImage from '../../components/ExImage';
import Imagelist from '../../components/Imagelist';
import ExonlyHead from '../../components/ExonlyHead';

/**
 * 이제 의향서를 등록하고자 합니다. 
 * 혹 더 궁금한 사항 있으신가요?
 * 작성된 의향서는 국립연명의료관리기관의 연명의료정보처리시스템에 저장이 됩니다. 
 * 그리고 지금까지 나누었던 상담내용 및 모든 정보는 저장되거나 유출되지 않습니다. 
 */

const eduprocess1 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="5.연명의료에 대한 의사결정 과정"
      />
      <ScrollView style={{flex:2}}>
        <View style={styles.viewstyle}>
          <Image 
            source={require('../../../assets/process1.png')}
            style={{height : 220, width : 330, resizeMode:'contain'}}
          />
        </View>
        <ExonlyHead 
          title="사전연명의료의향서"
        />
        <Textlist 
          text="사전연명의료의향서는 보건복지부가 지정한 ‘사전연명의료의향서 등록기관’에서 작성 가능하다."
        />
        <Textlist 
          text="등록기관의 상담자는 국립연명의료관리기관에서 일정 교육을 받은 자로서, 사전연명의료의향서 작성을 위해 방문한 사람에게 1:1 의향서 상담을 지원할 수 있다."
        />
        <Textlist 
          text="19세 이상 성인은 등록기관의 상담자와 일대일상담을 통해 연명의료결정제도와 사전연명의료의향서에 관한 충분한 설명과 정보를 제공받고 상담 후 별도의 비용 없이 사전연명의료의향서를 작성할 수 있다. 작성 후 의향서는 국가시스템에 등록보관된다."
        />
        <Textlist 
          text="작성자는 사전연명의료의향서를 작성하였더라도, 마음이 바뀌면 언제든지 가까운 등록 기관을 방문하여 작성된 의향서의 내용을 변경 또는 철회할 수 있다."
        />
        <Textlist 
          text="사전연명의료의향서를 작성한 후, 말기환자 또는 임종과정에 있는 환자가 되었을 때 담당의사와 논의 후 연명의료계획서 작성 가능하며, 이때 작성·등록된 의향서는 효력을 상실한다."
        />
      </ScrollView> 
      <Buttonlist 
        title="다음"
        routename="eduprocess2"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textstyle:{
    fontSize:20,
    color:'black',
    paddingHorizontal: 10,
    flex:1,
    margin : 5,
    //alignSelf: 'center'
    textAlign: 'justify'
  },
  viewstyle:{
    marginHorizontal : 20,
    //marginBottom : 20,
    marginVertical : 15,
    fontSize : 20,
    borderWidth : 1,
    borderColor : 'white',
    color : 'white',
    backgroundColor : 'white',
    padding : 10,
    flexDirection : 'row',
    justifyContent:'space-around'
 }
});

export default eduprocess1;