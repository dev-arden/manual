import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';
import TitlewithoutImage from "../components/TitlewithoutImage";
import Titlelist from '../components/Titlelist';
import Checkicon from '../components/Checkicon';
import Shorttext from "../components/Shoretext";
import Buttonlist from "../components/Buttonlist";

const counselready2 = ({navigation}) => {
  return (
    <ScrollView>
      <View style = {styles.viewstyle}>
        <TitlewithoutImage
          title="2 - 사전연명의료의향서 서식 준비"
        />
        <View style={styles.liststyle}>
          <Checkicon />
          <Shorttext 
            text="문서 혹은 태블릿 PC(공동인증서)"
          />
        </View>

        <TitlewithoutImage 
          title="3 - 상담자용 물품"
        />
        <View style={styles.liststyle}>
            <Checkicon />
            <Shorttext 
              text="직원증(상담증)"
            />
        </View>

        <View style={styles.liststyle}>
          <Checkicon />
          <Shorttext 
            text="등록기관 지정서"
          />
        </View>

        <View style={styles.liststyle}>
          <Checkicon />
          <Shorttext 
            text="상담매뉴얼"
          />
        </View>

        <View style={styles.liststyle}>
          <Checkicon />
          <Shorttext 
            text="상담일지와 상담그림카드"
          />
        </View>

        <View style={styles.liststyle}>
          <Checkicon />
          <Shorttext 
            text="필기류"
          />
        </View>
        
        <Buttonlist 
          title="다음"
          routename="counselready3"
        />
      </View>
    </ScrollView>
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

export default counselready2;