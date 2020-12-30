import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../../components/Textlist';
import Buttonlist from '../../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Imagelist from "../../components/Imagelist";
import NavLink from '../../components/NavLink';

const blindtalkdul2 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="호스피스 이용 의향 여부"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../../assets/talkdul2.jpg')}
        />
        <Textlist 
          text="사전연명의료의향서에 호스피스 서비스 선택 및 이용에 대한 본인의 의향을 표시 할 수 있습니다."
        />
        <Textlist 
          text="작성자께서 호스피스 서비스를 이용할지에 대한 생각을 결정하지 못했다면 표시하지 않아도 됩니다."
        />
        <Textlist 
          text="이용 의향이 있다고 체크하시면 자동으로 신청이 되는 것이 아니라, 나중에 실제 호스피스 대상 환자가 되셨을 때 별도의 호스피스 서비스 신청 절차를 거쳐야 이용 가능합니다."
        />
        <Textlist 
          text="호스피스 이용 의향은 지금 결정하지 않더라도, 추후 호스피스 대상 환자가 되었을 때 신청을 하실 수 있습니다."
        />
        <NavLink 
          text="추가 설명 확인하기"
          routeName="blindtalkdul3"
        />
      </ScrollView> 
      <Buttonlist
        title = "다음"
        routename = "blindtalkset1"
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

export default blindtalkdul2;