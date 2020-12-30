import React from 'react';
import {FlatList,Text, View, StyleSheet,TouchableOpacity,SafeAreaView} from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from 'react-native-vector-icons/AntDesign';

const langtalk7 = ({navigation}) => {
  const type = [
    {
      id : '1',
      nav : 'hana1',
      icon : <MaterialCommunityIcons name="numeric-1-circle-outline" size={25} color="black"/>,
      title: '연명의료의 시행 방법 및 연명의료 중단 등 결정에 관한 사항'
    },
    {
      id : '2',
      nav : 'dul1',
      icon : <MaterialCommunityIcons name="numeric-2-circle-outline" size={25} color="black"/>,
      title : '호스피스의 선택 및 이용에 관한 사항'
    },
    {
      id : '3',
      nav : 'set1',
      icon : <MaterialCommunityIcons name="numeric-3-circle-outline" size={25} color="black"/>,
      title : '사전연명의료의향서의 효력 및 효력상실에 관한 사항'
    },
    {
      id : '4',
      nav : 'net1',
      icon : <MaterialCommunityIcons name="numeric-4-circle-outline" size={25} color="black"/>,
      title : '사전연명의료의향서의 작성, 등록, 보관 및 통보에 관한 사항'
    },
    {
      id : '5',
      nav : 'daseot1',
      icon : <MaterialCommunityIcons name="numeric-5-circle-outline" size={25} color="black"/>,
      title : '사전연명의료의향서의 변경, 철회 및 그에 따른 조치에 관한 사항'
    },
    {
      id : '6',
      nav : 'yeoseot1',
      icon : <MaterialCommunityIcons name="numeric-6-circle-outline" size={25} color="black"/>,
      title: '사전연명의료의향서 등록기관이 폐업·휴업 하거나, 지정 취소되는 경우 기록의 이관에 관한 사항'
    },

  ];
  
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="사전연명의료의향서 6항목 설명"
      />
      <FlatList 
        keyExtractor = {(item)=> item.id}
        data = {type}
        renderItem={({item}) => 
          <TouchableOpacity onPress={() => navigation.navigate('langtalk'+`${item.nav}`)}>
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
});

export default langtalk7;