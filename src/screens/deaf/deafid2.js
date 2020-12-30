import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../../components/Textlist';
import Buttonlist from '../../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Imagelist from '../../components/Imagelist';
import NavLink from '../../components/NavLink';

/**
 * 
 *  저는 보건복지부 지정을 받은 사전연명의료의향서 등록기관인 [기관명] 소속 상담사이며, 의향서 작성을 돕고 있습니다. 
   [상담자 신분증과 등록기관 지정서 제시
 */

const deafid2 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="맞춤상담방법 판단 알고리즘"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../../assets/id2.jpg')}
        />
        <Textlist 
          text="저희 등록기관은 OOO님께 사전연명의료의향서 작성 시 도움이 필요한 지 아닌지의 여부를 판단하기 위해 몇 가지 질문을 드립니다."
        />
        <Textlist 
          text="간단한 질문이므로 듣고 대답해주시길 부탁드립니다."
        />
        <Textlist 
          text="저희는 OOO님을 위해 수화나 자막이 있는 동영상을 제공해드릴 수 있습니다."
        />
        <Textlist 
          text="어떤 방법이 OOO님에게 도움이 되는지 알려주시기를 바랍니다."
        />
        <Textlist 
          text="그 외 불편한 점이 있으시면 알려주십시오."
        />
        <Textlist 
          text="(잠시 기다리면서, 작성자의 대답을 기다림, 30초 정도)"
        />
        <Textlist 
          text="(작성자가 불편하다고 한 부분에 대해서 아래와 같이 대응함)"
        />
        <Textlist 
          text="OOO님께서 ‘OOOOOOO점이 불편하다’고 하셨는데요."
        />
        <Textlist 
          text="저희가 간단한 질문을 통해서 OOO님을 위한 맞춤형 상담을 진행하려고 합니다."
        />
        <Textlist 
          text="괜찮으신가요?"
        />
        <Textlist 
          text="(동의한 경우 계속 진행)"
        />
        <NavLink 
          text="추가 설명 확인하기"
          routeName="deafid55"
        />
      </ScrollView>
      <Buttonlist 
        title="다음"
        routename="deafid3"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewstyle:{
    flex:1,
    justifyContent : 'center'
  },
  liststyle: {
    marginHorizontal : 20,
    marginVertical : 15,
    fontSize : 20,
    borderWidth : 1,
    borderColor : 'white',
    color : 'white',
    backgroundColor : 'white',
    paddingVertical: 30,
    paddingHorizontal : 20,
    flexDirection : 'row'
  }
});

export default deafid2;