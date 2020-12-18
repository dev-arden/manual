import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../components/Textlist';
import Buttonlist from '../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../components/TitlewithoutImage';
import Imagelist from "../components/Imagelist";

const counseltalkhana6 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="5.체외 생명 유지술"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../assets/maintain.png')}
        />
        <Textlist 
          text="체외생명유지술은 생명을 위협하는 호흡부전이나 순환기능 부전 상태에서 선택할 수 있는 심폐기능을 보조하기 위한 장치입니다."
        />
        <Textlist 
          text="정맥의 피를 뽑아 기계를 통해 산소를 보충하고 이산화탄소를 제거한 다음 정맥이나 동맥으로 주입하는 것을 지속하게 됩니다."
        />
        <Textlist 
          text="하지만 부작용으로 다리를 통하는 혈류를 차단하는 하지의 허혈로 인해 다리가 창백해지거나 파래지고 극심한 통증을 일으킵니다."
        />
        <Textlist 
          text="또한 혈관 내 공기방울로 인해 기관으로 가는 혈액 공급이 차단되는 공기색전증이나 피떡이 형성되는 혈전색전증이 발생하여 피부가 붉어지고 붓고 통증을 느낄 수 있습니다."
        />
      </ScrollView> 
      <Buttonlist
        title = "다음"
        routename = "counseltalkhana7"
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

export default counseltalkhana6;