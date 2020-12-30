import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../../components/Textlist';
import Buttonlist from '../../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Imagelist from "../../components/Imagelist";

const disabletalkhana6 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="5.체외 생명 유지술"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../../assets/talkhana6.jpg')}
        />
        <Textlist 
          text="체외생명유지술은 정맥의 피를 뽑아 기계를 통해 산소를 보충하고 이산화탄소를 제거한 다음 다시 혈관으로 계속해서 주입하는 방법입니다."
        />
        <Textlist 
          text="부작용으로 다리가 창백해지거나 파래지고, 극심한 통증을 일으키거나, 혈관 내 공기방울이 발생하거나, 피떡이 만들어져 몸이 붓고 통증이 발생할 수 있습니다."
        />
      </ScrollView> 
      <Buttonlist
        title = "다음"
        routename = "disabletalkhana7"
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

export default disabletalkhana6;