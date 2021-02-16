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

const edukind5 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="6.연명의료 시술의 종류"
      />
      <ScrollView style={{flex:2}}>
        {/* <Numhead 
          title="중단할 수 있는 연명의료 시술"
        /> */}
        <ExonlyHead 
          title="항암제투여"
        />
        <Textlist 
          text="암을 축소, 억제, 제거하기 위해 약물을 사용하는 의학적 시술로서, 암의 종류와 진행 정도에 따라 다양한 방법이 존재함."
        />
        <Textlist 
          text="항암제는 암세포에만 선택적으로 작용하는 것이 아니라 정상세포에도 손상을 입히기 때문에 위장장애, 탈모증 등 여러 가지 부작용을 동반할 수 있음."
        />
        {/* <Exwithhead 
          title="주의"
          text="임종에 직면시 항암제 투여를 하지 않겠다는 것이다."
        /> */}
      </ScrollView> 
      <Buttonlist 
        title="다음"
        routename="edukind6"
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

export default edukind5;