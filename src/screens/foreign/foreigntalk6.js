import React from 'react';
import {StyleSheet,View,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../../components/Textlist';
import Buttonlist from '../../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Imagelist from "../../components/Imagelist";

const foreigntalk6 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="사전연명의료의향서 6항목 설명"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../../assets/talk6.jpg')}
        />
        <Textlist 
          text="지금부터 000께서 사전연명의료의향서를 작성하는데 반드시 이해하셔야 하는 6가지 내용을 설명해 드리겠습니다."
        />
        <Textlist 
          text="만약 설명하는 내용 중 이해가 되지 않는 내용이 있으면 말씀해주세요."
        />
        <Textlist 
          text="다시 천천히 설명해 드리겠습니다."
        />
        <View style={styles.viewstyle}>
          <Image 
            source={require('../../../assets/talk6.png')}
            style={{height : 150, width : 330, resizeMode:'contain'}}
          />
        </View>
      </ScrollView> 
      <Buttonlist
        title = "다음"
        routename = "foreigntalkhana1"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default foreigntalk6;