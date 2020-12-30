import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TitlewithoutImage from "../../components/TitlewithoutImage";
import Buttonlist from "../../components/Buttonlist";
import { SafeAreaView } from 'react-native';
import CheckText from '../../components/CheckText';

/**
 * 
 * ◾ 상담실 환경: 개인상담전용실(2~5평), 테이블과 부드러운 등받이 의자(3~5개), 냉난방기와 온도점검, 소음점검, 따뜻한 조명과 밝은 계열의 커튼과 벽지, 정리정돈과 청결유지, 상담실 문 앞에 상담 중 표시      
◾ 사전연명의료의향서 서식: 문서 혹은 태블릿 PC(공동인증서)
◾ 상담자용 물품: 직원증(상담증), 등록기관 지정서, 상담매뉴얼, 상담일지와 그림카드, 필기류 
◾ 내담자용 물품: 안내책자, 리플릿
◾ 상담 전 다짐: 나는 내담자가 사전연명의료의향서를 충분히 이해하고 자발적으로 의사결정할 수 있도록 내담자의 특성을 반영한 맞춤형 상담을 제공할 것이다.
#D3CBB7 
*/

const deafready = ({navigation}) => {
  const type = [
    {
      id: '1',
      title : '개인상담전용실(2~5평)',
      //icon : <MaterialCommunityIcons name="numeric-1-box" size={25} color="orange"/>
    },
    {
      id: '2',
      title: '테이블과 부드러운 등받이 의자(3~5개)',
      //icon : <MaterialCommunityIcons name="numeric-2-box" size={25} color="orange"/>
    },
    {
      id: '3',
      title: '냉난방기와 온도점검, 소음점검, 따뜻한 조명과 밝은 계열의 커튼과 벽지',
      //icon : <MaterialCommunityIcons name="numeric-3-box" size={25} color="orange"/>
    },
    {
      id: '4',
      title: '정리정돈과 청결유지',
      //icon : <MaterialCommunityIcons name="numeric-6-box" size={25} color="orange"/>
    },
    {
      id: '5',
      title: '상담실 문 앞에 <상담 중> 표시',
      //icon : <MaterialCommunityIcons name="numeric-7-box" size={25} color="orange"/>
    }
  ];

  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="상담실 환경"
      />
      <FlatList 
        keyExtractor = {(item)=> item.id}
        data = {type}
        renderItem={({item}) => 
          //<TouchableOpacity onPress={() => navigation.navigate('counsel'+`${item.nav}`)}>
            <CheckText 
              text={item.title}
            />
          //</TouchableOpacity>
        }
      />
      <Buttonlist 
        title = "다음"
        routename = "deafready2"
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

export default deafready;