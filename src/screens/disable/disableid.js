import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
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

const disableid = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="신분증 확인"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../../assets/id.jpg')}
        />
        <Textlist 
          text="OOO님께서 사전연명의료의향서의 작성을 원하신다면, 본인 확인을 위해 신분증을 보여주시기 바랍니다."
        />
        <Textlist 
          text="사전연명의료의향서는 다른 사람이 대신 작성할 수 없고, 19세 이상의 성인이 직접 작성할 수 있습니다."
        />
        <Textlist 
          text="(장애인 등록증은 주민등록번호 기재여부, 여권 및 외국인 등록증 유효기간 확인)"
        />
        <NavLink 
          text="추가 설명 확인하기"
          routeName="disableid4"
        />
      </ScrollView>
      <Buttonlist 
        title="다음"
        routename="disableid2"
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

export default disableid;