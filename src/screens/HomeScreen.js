import React from 'react';
import {Text, View, StyleSheet, Platform, KeyboardAvoidingView, SafeAreaView,Image} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {Button} from 'react-native-elements';
AntDesign.loadFont();

const HomeScreen = ({navigation}) => {
  return (
      <SafeAreaView style={{flex : 1}}>        
        <View style={styles.viewstyle}>
          <View style={{flexDirection:'row',marginBottom:30,justifyContent:'flex-end'}}>
            <Image 
              source={require('../../assets/opentype04.jpg')}
              style={{height : 120, width : 200, resizeMode:'contain'}}
            />
          </View>
          <View style={{marginTop:30, marginBottom:30, flex:2,justifyContent:'center'}}>
            <Text style={styles.textstyle}>사전연명의료의향서</Text>
            <Text style={styles.textstyle}>맞춤상담매뉴얼</Text>
          </View>
          <View style={{marginVertical:50,marginHorizontal:15}}>
            <Button
              icon={
                <AntDesign
                  name="right"
                  size={15}
                  color="#4189D6"
                />
              }
              iconRight
              onPress={() => navigation.navigate('eduhome')}
              //raised
              title="시작하기"
              type="outline"
              titleStyle={styles.bttextstyle}
              buttonStyle={{borderWidth:1}}
            />
          </View>
        </View>
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewstyle: {
    flex :1,
    //alignItems : 'center',
    //justifyContent : 'center',
    // borderWidth : 2,
    // borderColor : 'red'
  },
  textstyle:{
    fontSize: 40,
    fontWeight : 'bold',
    alignSelf: 'center',
    marginBottom : 10,
    // borderWidth : 2,
    // borderColor : 'black'
  },
  buttonstyle : {
    marginTop: 100,
    alignSelf: 'stretch',
    marginHorizontal : 35
    // borderWidth : 2,
    // borderColor : 'black'
  },
  bttextstyle:{
    fontSize : 25,
    alignSelf:'center',
   
  }
});

export default HomeScreen;