import React from 'react';
import {Text, View, StyleSheet, FlatList,SafeAreaView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TitlewithoutImage2 from '../components/TitlewithoutImage2';


const counseltype = ({navigation}) => {
  const type = [
    {
      id: '1',
      title: '표준상담',
      //icon : <Ionicons name="man" size={30} color='#EFC8AC'/>
      icon : <MaterialCommunityIcons name="numeric-1-box" size={25} color="#DF9364"/>
    },
    {
      id: '2',
      title: '시각맞춤상담',
      //icon : <FontAwesome name="blind" size={30} color='#EFC8AC'/>
      icon : <MaterialCommunityIcons name="numeric-2-box" size={25} color="#DF9364"/>
    },
    {
      id: '3',
      title: '청각맞춤상담',
      //icon : <FontAwesome5 name="deaf" size={30} color='#EFC8AC'/>
      icon : <MaterialCommunityIcons name="numeric-3-box" size={25} color="#DF9364"/>
    },
    {
      id: '4',
      title: '신체맞춤상담',
      //icon : <Fontisto name="paralysis-disability" size={30} color='#EFC8AC'/>
      icon : <MaterialCommunityIcons name="numeric-4-box" size={25} color="#DF9364"/>
    },
    {
      id: '5',
      title: '인지맞춤상담',
      //icon : <MaterialCommunityIcons name="brain" size={30} color='#EFC8AC'/>
      icon : <MaterialCommunityIcons name="numeric-5-box" size={25} color="#DF9364"/>
    },
    {
      id: '6',
      title: '비문해맞춤상담',
      //icon : <Ionicons name="language" size={30} color='#EFC8AC'/>
      icon : <MaterialCommunityIcons name="numeric-6-box" size={25} color="#DF9364"/>
    },
    {
      id: '7',
      title: '외국인맞춤상담',
      //icon : <Ionicons name="earth" size={30} color='#EFC8AC'/>
      icon : <MaterialCommunityIcons name="numeric-7-box" size={25} color="#DF9364"/>
    }
  ];

  return (
    <SafeAreaView style={{flex:1}}>
      <View style = {styles.btboxview}> 
        <Text style={styles.titlestyle} >
          사전연명의료의향서 맞춤상담매뉴얼
        </Text>
      </View>
      <FlatList 
        keyExtractor = {(item)=> item.id}
        data = {type}
        renderItem={({item}) => 
          <TouchableOpacity
            onPress={()=>navigation.navigate('manual'+`${item.id}`)}
            //style={{flexDirection:'row'}}
          >
            <View style={styles.liststyle}>
              <View style={{alignSelf:"center"}}>
                {item.icon}
              </View>
              <Text style={{fontSize:20, color:'black', paddingHorizontal: 10, flex:1, alignSelf: 'center'}}>
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
    backgroundColor : '#FAE7D3',
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

export default counseltype;