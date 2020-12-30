import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TitlewithoutImage from "../../components/TitlewithoutImage";
import Buttonlist from "../../components/Buttonlist";
import { SafeAreaView } from 'react-native';
import CheckText from '../../components/CheckText';

const disableready2 = ({navigation}) => {
  const type = [
    {
      id: '1',
      //text : '법정서식 또는 PC 또는 태블릿 PC'
      text: '거동이 불편하여 출장방문을 요청할 수 있으며 2인 1조로 방문'
    },
    {
      id: '2',
      //text : '법정서식 또는 PC 또는 태블릿 PC'
      text: '사전연명의료의향서 법정서식, 컴퓨터 또는 태블릿 PC'
    },
    {
      id: '3',
      //text : '의향서 설명 시 참고자료 또는 동영상'
      text : '의향서 설명 시 참고자료: 상담그림카드, 상담일지, 동영상 또는 녹음기'
    },
    {
      id : '4',
      //text : '상담자의 신원 확인을 위한 등록기관 지정서와 상담자 신분 증명 등 신빙성 있는 근거 자료 '
      text : '상담자의 신원 확인을 위한 등록기관 지정서와 상담자 신분증'
    }
  ];

  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="준비사항"
      />
      <FlatList 
        keyExtractor = {(item)=> item.id}
        data = {type}
        renderItem={({item}) => 
          //<TouchableOpacity onPress={() => navigation.navigate('counsel'+`${item.nav}`)}>
            <CheckText 
              text={item.text}
            />
          //</TouchableOpacity>
        }
      />
      <Buttonlist 
        title = "다음"
        routename = "disableready3"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titlestyle:{
    fontSize:25,
    fontWeight:'bold', 
    color:'black',
    // borderWidth: 1,
    // borderColor : 'black',
    alignSelf : 'center'
  },
  backgroundStyle:{
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height:50,
    borderRadius:5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10
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
  titleview:{
    backgroundColor : 'white',
    justifyContent : 'space-around',
    padding : 15,
    margin : 15,
    height : 80,
    borderRadius : 20
  },
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
  buttonstyle : {
    alignSelf: 'stretch',
    marginHorizontal : 20,
    marginBottom : 15,
    borderWidth : 2,
    // borderColor : 'black'
  },
});

export default disableready2;