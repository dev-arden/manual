import React from 'react';
import {Button, Text, View, StyleSheet,TouchableOpacity, FlatList,SafeAreaView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


//#3E538D
//#5C709D
const eduhome = ({navigation}) => {
  const type = [
    {
      id: '1',
      title : '연명의료결정제도 개요',
      nav : 'eduinfo',
      icon : <MaterialCommunityIcons name="numeric-1-box" size={25} color="#5C709D"/>
    },
    {
      id: '2',
      title: '사전연명의료의향서',
      nav : 'eduform',
      icon : <MaterialCommunityIcons name="numeric-2-box" size={25} color="#5C709D"/>
    },
    {
      id: '3',
      title: '관련 동영상',
      nav : 'eduvideo',
      icon : <MaterialCommunityIcons name="numeric-3-box" size={25} color="#5C709D"/>
    },
  ];

  return (
    <SafeAreaView style={{flex:1}}>
      <View style = {styles.btboxview}> 
        <Text style={styles.titlestyle} >
          연명의료결정제도
        </Text>
      </View>
        <FlatList 
          keyExtractor = {(item)=> item.id}
          data = {type}
          renderItem={({item}) => 
            <TouchableOpacity onPress={() => navigation.navigate(`${item.nav}`)}>
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
    //backgroundColor : '#FDF6E3',
    backgroundColor : '#D5DCE9',
    //borderColor : '#5C709D',
    //borderWidth : 5,
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
    fontSize:21,
    fontWeight:'bold', 
    color:'black',
    // borderWidth: 1,
    // borderColor : 'black',
    alignSelf : 'center'
  },
});

export default eduhome;