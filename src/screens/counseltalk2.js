import React from 'react';
import { Platform } from 'react-native';
import {Text, View, StyleSheet,TouchableOpacity, FlatList} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const counseltalk2 = ({navigation}) => {
  const type = [
    {
      id: '1',
      title : '연명의료의 시행 방법 및 연명의료중단 등 결정에 대한 사항',
      nav : 'hana',
      icon : <MaterialCommunityIcons name="numeric-1-circle-outline" size={25} color="black"/>
    },
    {
      id: '2',
      title: '호스피스의 선택 및 이용에 관한 사항',
      nav : 'dul',
      icon : <MaterialCommunityIcons name="numeric-2-circle-outline" size={25} color="black"/>
    },
    {
      id: '3',
      title: '사전연명의료의향서의 효력 및 효력 상실에 관한 사항',
      nav : 'set',
      icon : <MaterialCommunityIcons name="numeric-3-circle-outline" size={25} color="black"/>
    },
    {
      id: '4',
      title: '사전연명의료의향서의 작성, 등록, 보관 및 통보에 관한 사항',
      nav : 'net',
      icon : <MaterialCommunityIcons name="numeric-4-circle-outline" size={25} color="black"/>
    },
    {
      id: '5',
      title: '사전연명의료의향서의 변경, 철회 및 그에 따른 조치에 관한 사항',
      nav : 'daseot',
      icon : <MaterialCommunityIcons name="numeric-5-circle-outline" size={25} color="black"/>
    },
    {
      id: '6',
      title: '사전연명의료의향서 등록기관이 폐업·휴업하거나, 지정 취소되는 경우 기록의 이관에 관한 사항',
      nav : 'yeoseot',
      icon : <MaterialCommunityIcons name="numeric-6-circle-outline" size={25} color="black"/>
    }
  ];

  return (
    <View style={{flex:1}}>
      <View style = {styles.btboxview}> 
        <Text style={styles.titlestyle} >
          설명사항
        </Text>
      </View>
        <FlatList 
          keyExtractor = {(item)=> item.id}
          data = {type}
          renderItem={({item}) => 
            <TouchableOpacity onPress={() => navigation.navigate('counseltalk'+`${item.nav}`)}>
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
    </View>
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

export default counseltalk2;