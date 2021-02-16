import React from 'react';
import { Platform } from 'react-native';
import {Button, Text, View, StyleSheet,TouchableOpacity, FlatList,SafeAreaView} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const deafmanual = ({navigation}) => {
  const type = [
    {
      id: '1',
      title : '사전연명의료의향서 청각맞춤상담을 위한 준비',
      nav : 'ready1',
      icon : <MaterialCommunityIcons name="numeric-1-box" size={25} color="#2D68A0"/>
    },
    {
      id: '2',
      title: '등록기관 및 상담자 소개',
      nav : 'info1',
      icon : <MaterialCommunityIcons name="numeric-2-box" size={25} color="#2D68A0"/>
    },
    {
      id: '3',
      title: '사전연명의료의향서 소개',
      nav : 'intro1',
      icon : <MaterialCommunityIcons name="numeric-3-box" size={25} color="#2D68A0"/>
    },
    {
      id: '4',
      title: '사전연명의료의향서 작성 여부 확인',
      nav : 'check1',
      icon : <MaterialCommunityIcons name="numeric-4-box" size={25} color="#2D68A0"/>
    },
    {
      id: '5',
      title: '작성자 본인 및 의사결정능력 확인',
      nav : 'id1',
      icon : <MaterialCommunityIcons name="numeric-5-box" size={25} color="#2D68A0"/>
    },
    {
      id: '6',
      title: '사전연명의료의향서 작성을 위한 항목 설명',
      nav : 'talk1',
      icon : <MaterialCommunityIcons name="numeric-6-box" size={25} color="#2D68A0"/>
    },
    {
      id: '7',
      title: '사전연명의료의향서 작성',
      nav : 'write1',
      icon : <MaterialCommunityIcons name="numeric-7-box" size={25} color="#2D68A0"/>
    },
    {
      id: '8',
      title: '등록증 발급 여부 확인',
      nav : 'enter1',
      icon : <MaterialCommunityIcons name="numeric-8-box" size={25} color="#2D68A0"/>
    },
    {
      id: '9',
      title: '작성된 사전연명의료의향서 등록 통보 안내',
      nav : 'announce1',
      icon : <MaterialCommunityIcons name="numeric-9-box" size={25} color="#2D68A0"/>
    }, 
    {
      id: '10',
      title: '사전연명의료의향서 작성 완료 안내',
      nav : 'finish1',
      icon : <MaterialCommunityIcons name="numeric-10-box" size={25} color="#2D68A0"/>
    }
  ];

  return (
    <SafeAreaView style={{flex:1}}>
      <View style = {styles.btboxview}> 
        <Text style={styles.titlestyle} >
          사전연명의료의향서 작성
        </Text>
      </View>
        <FlatList 
          keyExtractor = {(item)=> item.id}
          data = {type}
          renderItem={({item}) => 
            <TouchableOpacity onPress={() => navigation.navigate('deaf'+`${item.nav}`)}>
              <View style={styles.liststyle}>
                  <View style={{alignSelf:"center"}}>
                    {item.icon}
                  </View>
                  <Text style={{fontSize:18, color:'black', paddingHorizontal: 10, flex:1, alignSelf: 'center'}}>
                    {item.title}
                  </Text>
                  <View style={{alignSelf:"center"}}>
                    <AntDesign name="rightcircleo" size={20} color="grey"/>
                  </View>
              </View>
            </TouchableOpacity>
          }
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewstyle:{
    flex:1,
    justifyContent : 'center'
  },
  link:{
    color: 'blue',
    fontSize : 20,
    //fontWeight : 'bold'
  },
  icon: {
    fontSize:25
  },
  btstyle:{
    fontSize:20
    //fontWeight: 'bold'
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
  },
  btboxview:{
    flexDirection : 'row',
    backgroundColor : '#C5D0E2',
    height : 60,
    margin : 15,
    borderRadius : 20,
    //alignSelf: 'center',
    justifyContent : 'center',
    // borderWidth:2,
    // borderColor: 'black'
  },
  viewstyle:{
    flex:1,
    justifyContent : 'center'
  },
  titlestyle:{
    fontSize:25,
    fontWeight:'bold', 
    color:'black',
    // borderWidth: 1,
    // borderColor : 'black',
    alignSelf : 'center'
  },
});

export default deafmanual;