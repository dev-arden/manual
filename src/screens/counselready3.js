import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../components/Textlist';
import TitlewithoutImage from "../components/TitlewithoutImage";
import Buttonlist from "../components/Buttonlist";

const counselready3 = ({navigation}) => {
  return (
    <ScrollView>
      <View style = {styles.viewstyle}>
        <TitlewithoutImage
          title="상담 전 다짐"
        />
        <Textlist
          text="나는 내담자가 사전연명의료의향서를 충분히 이해하고 자발적으로 의사결정할 수 있도록 내담자의 특성을 반영한 맞춤형 상담을 제공할 것이다."
        />
        {/* <View style={styles.liststyle}>
          <View style={{flexDirection : 'column'}}>
            <Textlist
              text="나는 내담자가 사전연명의료의향서를 충분히 이해하고 자발적으로 의사결정할 수 있도록 내담자의 특성을 반영한 맞춤형 상담을 제공할 것이다."
            />
          </View>
        </View>
        <View style={styles.liststyle}>
          <View style={{alignSelf:"center"}}>
            <AntDesign name="check" size={25} color="blue"/>
          </View>
          <View style={{flexDirection : 'column'}}>
            <Text style={styles.textstyle}>
              나는 내담자가 
            </Text>
            <Text style={styles.textstyle}>
              사전연명의료의향서를 
            </Text>
            <Text style={styles.textstyle}>
              충분히 이해하고 자발적으로
            </Text>
            <Text style={styles.textstyle}>
              의사결정할 수 있도록 
            </Text>
            <Text style={styles.textstyle}>
              내담자의 특성을 반영한 
            </Text>
            <Text style={styles.textstyle}>
              맞춤형 상담을 제공할 것이다.
            </Text>
          </View>
        </View> */}

        <Buttonlist 
          title="준비완료"
          routename='manual1'
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
  textstyle:{
    fontSize:20,
    color:'black',
    paddingHorizontal: 10,
    flex:1,
    margin : 10
    //alignSelf: 'center'
  }
});

export default counselready3;