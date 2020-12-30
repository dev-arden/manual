import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../../components/Textlist';
import TitlewithoutImage from "../../components/TitlewithoutImage";
import Buttonlist from "../../components/Buttonlist";
import { SafeAreaView } from 'react-native';
import Imagelist from '../../components/Imagelist';

const blindready3 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>      
        <TitlewithoutImage
          title="1:1 상담실 이동"
        />
        <ScrollView style={{flex:2}}>
            <Imagelist 
              imageSource={require('../../../assets/ready3.jpg')}
            />
            <Textlist
              //text="사전연명의료의향서 작성을 원하는 방문자를 기밀성 보장을 위해 작성자를 독립성이 보장된 ‘1:1 상담실’로 안내합니다."
              text="사전연명의료의향서 작성을 원하는 방문자를 상담내용이 밖으로 들리지 않는 ‘1:1 상담실’로 안내한다."
            />
        </ScrollView>
        <Buttonlist 
          title="다음"
          routename='blindready4'
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
  textstyle:{
    fontSize:20,
    color:'black',
    paddingHorizontal: 10,
    flex:1,
    margin : 10
    //alignSelf: 'center'
  }
});

export default blindready3;