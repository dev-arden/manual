import React from 'react';
import {StyleSheet,Image,View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../components/Textlist';
import Buttonlist from '../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../components/TitlewithoutImage';
import Imagelist from "../components/Imagelist";
import NavLink from '../components/NavLink';

const counseltalk = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="사전연명의료의향서 작성의미"
      />
      <ScrollView style={{flex:2}}>
        {/* <View style={styles.newliststyle}>
          <Image 
            source = {require('../../assets/form.png')}
            style = {{height: 400 , width: 330, resizeMode: 'contain'}}
          />
        </View> */}
        <Imagelist 
          imageSource = {require('../../assets/talk.jpg')}
        />
        <Textlist 
          text="지금부터 사전연명의료의향서를 작성하기 위해 이해해야 할 내용에 대해 설명해 드리겠습니다."
        />
        <Textlist 
          text="OOO님께서 사전연명의료의향서를 작성하시려고 결정한 이유가 있으신가요?"
        />
        <Textlist 
          text="사전연명의료의향서는 어떻게 알게 되셨나요?"
        />
        <NavLink 
          text="추가 설명 확인하기"
          routeName="counselid9"
        />
      </ScrollView> 
      <Buttonlist
        title = "다음"
        routename = "counseltalk2"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewstyle:{
    flex:1,
    justifyContent : 'center'
  },
  newliststyle: {
    //marginHorizontal : 20,
    marginBottom : 20,
    //marginVertical : 15,
    fontSize : 20,
    borderWidth : 1,
    borderColor : 'white',
    color : 'white',
    backgroundColor : 'white',
    // paddingVertical: 10,
    // paddingHorizontal : 10,
    flexDirection : 'row',
    justifyContent:'space-around'
  },
});

export default counseltalk;