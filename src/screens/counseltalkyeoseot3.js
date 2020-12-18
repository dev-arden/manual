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
 * 호스피스서비스 선택 및 이용에 대한 본인의 의향을 표시 할 수 있습니다. 
작성자께서 호스피스에 대한 의향을 결정하지 못했다면 표시 하지 않아도 무방하고, 추후  호스피스이용에 관한 의향이 변경 된 경우 언제든지 변경 신청이 가능합니다.
다만, 의향이 있다 하더라도 반드시 이용할 수 있는 것은 아니며 연명의료결정법 제 28조에 따른 별도의 호스피스 서비스 신청 절차를 거쳐야 하며, 추후  호스피스 대상 환자가 되었을 때 신청을 하셔도 됩니다. 
 */

const counseltalkyeoseot3 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="호스피스 이용 결정(2)"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../assets/maintain.png')}
        />
        <Textlist 
          text="호스피스서비스 선택 및 이용에 대한 본인의 의향을 표시 할 수 있습니다."
        />
        <Textlist 
          text="작성자께서 호스피스에 대한 의향을 결정하지 못했다면 표시 하지 않아도 무방하고, 추후  호스피스이용에 관한 의향이 변경 된 경우 언제든지 변경 신청이 가능합니다."
        />
        <Textlist 
          text="다만, 의향이 있다 하더라도 반드시 이용할 수 있는 것은 아니며 연명의료결정법 제 28조에 따른 별도의 호스피스 서비스 신청 절차를 거쳐야 하며, 추후  호스피스 대상 환자가 되었을 때 신청을 하셔도 됩니다."
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

export default counseltalkyeoseot3;