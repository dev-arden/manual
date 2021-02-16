import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Buttonlist from "../../components/Buttonlist";
import { SafeAreaView } from 'react-native';
import Titlebrain2 from '../../components/Titlebrain2';
import Textlist from '../../components/Textlist';
import ExonlyHead from '../../components/ExonlyHead';

const brainready2 = ({}) => {

  return (
    // <SafeAreaView style={{flex:1}}>
    //   <TitlewithoutImage 
    //     title="준비사항"
    //   />
    //   <FlatList 
    //     keyExtractor = {(item)=> item.id}
    //     data = {type}
    //     renderItem={({item}) => 
    //       //<TouchableOpacity onPress={() => navigation.navigate('counsel'+`${item.nav}`)}>
    //         <CheckText 
    //           text={item.text}
    //         />
    //       //</TouchableOpacity>
    //     }
    //   />
    //   <Buttonlist 
    //     title = "다음"
    //     routename = "counselready3"
    //   />
    // </SafeAreaView>
    <SafeAreaView style={{flex:1}}>
      <Titlebrain2 
        title="1단계"
        text="사전연명의료의향서 상담을 위한 준비"
      />
      <ScrollView style={{flex:2}}>
        <ExonlyHead 
          title="준비사항"
        />
        <Textlist 
          text="• 사전연명의료의향서 법정서식, 컴퓨터 또는 태블릿 PC"
        />
        <Textlist 
          text="• 의향서 설명 시 참고자료: 상담매뉴얼, 상담그림카드, 일지, 안내동영상, 카메라 또는 녹음기"
        />
        <Textlist 
          text="• 등록기관 지정서 비치 및 상담자 신원 확인이 가능한 상담자 신분증"        
        />
      </ScrollView>
      <Buttonlist 
        title = "다음"
        routename = "brainready3"
      />
    </SafeAreaView>
  );
};


export default brainready2;