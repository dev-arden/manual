import React from 'react';
import {StyleSheet,Image,View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Buttonlist from '../../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';

const deaftalk34 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="사전연명의료의향서"
      />
      <ScrollView style={{flex:2}}>
        <View style={styles.newliststyle}>
          <Image 
            source = {require('../../../assets/form.png')}
            style = {{height: 400 , width: 330, resizeMode: 'contain'}}
          />
        </View>
      </ScrollView> 
      <Buttonlist 
        title = "다음"
        routename = "deaftalk4"
      />
    </SafeAreaView>
  );
};

const styles=StyleSheet.create({
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

export default deaftalk34;