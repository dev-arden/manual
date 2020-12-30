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
import Numhead from '../../components/Numhead';

/**
 * 이제 의향서를 등록하고자 합니다. 
 * 혹 더 궁금한 사항 있으신가요?
 * 작성된 의향서는 국립연명의료관리기관의 연명의료정보처리시스템에 저장이 됩니다. 
 * 그리고 지금까지 나누었던 상담내용 및 모든 정보는 저장되거나 유출되지 않습니다. 
 */

const edukind7 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="연명의료 시술의 종류"
      />
      <ScrollView style={{flex:2}}>
        <Numhead 
          title="중단할 수 있는 연명의료 시술"
        />
        <ExonlyHead 
          title="혈압상승제 투여"
        />
        <Textlist 
          text="혈관 수축제를 투여하는 방법으로서 쇼크, 중증 저혈압, 심근경색이나 심부전일 때에 인위적으로 혈압을 상승시키는 약제를 투여하는 것이다."
        />
        <Textlist 
          text="지속하여 사용 시 사지괴저 등의 합병증을 유발할 수 있다."
        />
        <Exwithhead 
          title="주의"
          text="임종에 직면시에 해당된다."
        />
      </ScrollView> 
      <Buttonlist 
        title="다음"
        routename="edukind8"
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

export default edukind7;