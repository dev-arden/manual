import React from 'react';
import {Button, Text, View, StyleSheet,TouchableOpacity, FlatList,SafeAreaView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const eduform = ({navigation}) => {
  /**
   * 1.개요
   * 2.사전연명의료의향서 작성지원 절차
   */
  const type = [
    {
      id: '1',
      title : '개요',
      nav : 'sum1',
      icon : <MaterialCommunityIcons name="numeric-1-box" size={25} color="orange"/>
    },
    {
      id: '2',
      title: '사전연명의료의향서 작성지원 절차',
      nav : 'sup1',
      icon : <MaterialCommunityIcons name="numeric-2-box" size={25} color="orange"/>
    },
  ];

  return (
    <SafeAreaView style={{flex:1}}>
      <View style = {styles.btboxview}> 
        <Text style={styles.titlestyle} >
          사전연명의료의향서
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
        {/* <Button title="실험"/> */}
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
  },
});

export default eduform;