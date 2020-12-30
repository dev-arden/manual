import React from 'react';
import {Button, Text, View, StyleSheet,TouchableOpacity, FlatList,SafeAreaView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const eduinfo = ({navigation}) => {
/**
 * 1.배경
 * 2.목적
 * 3.주요 용어
 * 4.관리체계
 * 5.연명의료에 대한 의사결정 과정
 * 6.연명의료 시술의 종류
 * 7.호스피스/완화의료
 */
const type = [
  {
    id: '1',
    title : '배경',
    nav : 'back1',
    icon : <MaterialCommunityIcons name="numeric-1-box" size={25} color="orange"/>
  },
  {
    id: '2',
    title: '목적',
    nav : 'purpose1',
    icon : <MaterialCommunityIcons name="numeric-2-box" size={25} color="orange"/>
  },
  {
    id: '3',
    title: '주요 용어',
    nav : 'word1',
    icon : <MaterialCommunityIcons name="numeric-3-box" size={25} color="orange"/>
  },
  {
    id: '4',
    title: '관리체계',
    nav : 'rule1',
    icon : <MaterialCommunityIcons name="numeric-4-box" size={25} color="orange"/>
  },
  {
    id: '5',
    title: '연명의료에 대한 의사결정 과정',
    nav : 'process1',
    icon : <MaterialCommunityIcons name="numeric-5-box" size={25} color="orange"/>
  },
  {
    id: '6',
    title: '연명의료 시술의 종류',
    nav : 'kind1',
    icon : <MaterialCommunityIcons name="numeric-6-box" size={25} color="orange"/>
  },
  {
    id: '7',
    title: '호스피스/완화의료',
    nav : 'hos1',
    icon : <MaterialCommunityIcons name="numeric-7-box" size={25} color="orange"/>
  },
];

return (
  <SafeAreaView style={{flex:1}}>
      <View style = {styles.btboxview}> 
        <Text style={styles.titlestyle} >
          연명의료결정제도 개요
        </Text>
      </View>
        <FlatList 
          keyExtractor = {(item)=> item.id}
          data = {type}
          renderItem={({item}) => 
            <TouchableOpacity onPress={() => navigation.navigate('edu'+`${item.nav}`)}>
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
    backgroundColor : '#FDF6E3',
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
  }
});

export default eduinfo;