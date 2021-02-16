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

const eduprocess2 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="5.연명의료에 대한 의사결정 과정"
      />
      <ScrollView style={{flex:2}}>
        <ExonlyHead 
          title="연명의료계획서"
        />
        <Textlist 
          text="의료기관윤리위원회가 설치된 의료기관에서 말기환자로 진단을 받거나 임종과정에 있는 환자로 판단을 받으면 담당의사와 충분한 논의를 통해 연명의료계획서를 작성할 수 있다."
        />
        <Textlist 
          text="말기환자 또는 임종과정에 있는 환자가 연명의료계획서를 작성한 후 마음이 바뀌면 언제든지 담당의사와 상의하여 작성내용을 변경 또는 철회할 수 있다."
        />
        <ExonlyHead 
          title="참고"
        />
        <Textlist 
          text="말기환자와 임종과정에 있는 환자 판단은 다음과 같이 연명의료결정법에 따른 기준에 근거하여 의사 2인이 종합적으로 판단한다."
        />
        <View style={styles.viewstyle}>
          <View style={{justifyContent:'center'}}>
            <Image 
              source={require('../../../assets/process2.png')}
              style={{height : 170, width : 330, resizeMode:'contain'}}
            />
            <Image 
              source={require('../../../assets/process22.png')}
              style={{height : 170, width : 330, resizeMode:'contain'}}
            />
          </View>
        </View>
        {/* <ExImage
          title="참고"
          text="말기환자와 임종과정에 있는 환자 판단은 다음과 같이 연명의료결정법에 따른 기준에 근거하여 의사 2인이 종합적으로 판단한다."
          imageSource={require('../../../assets/eduprocess2.png')}
          imageStyle={{height : 170, width : 330, resizeMode:'contain'}}
        /> */}
      </ScrollView> 
      <Buttonlist 
        title="다음"
        routename="eduprocess3"
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

export default eduprocess2;