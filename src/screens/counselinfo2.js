import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';
import {Button} from 'react-native-elements'
import Titlelist from "../components/Titlelist";
import Textlist from "../components/Textlist";
import Checkicon from "../components/Checkicon";
import Shorttext from "../components/Shoretext";
import Buttonlist from "../components/Buttonlist";
import TitlewithoutImage from "../components/TitlewithoutImage";
import Exlist from "../components/Exlist";
/**
 * 
 *  저는 보건복지부 지정을 받은 사전연명의료의향서 등록기관인 [기관명] 소속 상담사이며, 의향서 작성을 돕고 있습니다. 
   [상담자 신분증과 등록기관 지정서 제시
 */

const counselinfo2 = ({navigation}) => {
  return (
    <ScrollView>
      <View style = {styles.viewstyle}>
        <TitlewithoutImage 
          title="상담자 소개"
        />
        <Exlist 
          text="사전연명의료의향서 작성은 반드시 법률에 따라 보건복지부의 지정을 받은 등록기관에서만 진행할 수 있고,상담자는 국민연령의료관리기관의 교육을 이수한 자격을 갖춘 사람임을 알림"
        />
        <Exlist 
          text="내담자에게 상담자 신분 증명자료와 등록기관 지정서를 제시함"
        />
        <Exlist 
          text="관련법률:[호스피스•완화의료 및 임종과정에 있는 환자의 연명의료결정에 관한 법률] 제11조 및 같은 법 시행규칙 제4조"
        />
        {/* <View style={styles.liststyle}>
          <View style={{alignSelf:"center"}}>
            <AntDesign name="exclamationcircleo" size={25} color="black"/>
          </View>
          <View style={{flexDirection : 'column'}}>
            <Text style={styles.textstyle}>
              내담자에게 상담자 신분 증명자료와 등록기관 지정서를 제시함
            </Text>
          </View>
        </View>
        <View style={styles.liststyle}>
          <View style={{alignSelf:"center"}}>
            <AntDesign name="exclamationcircleo" size={25} color="black"/>
          </View>
          <View style={{flexDirection : 'column'}}>
            <Text style={styles.textstyle}>
              관련법률:{"\n"}[호스피스•완화의료 및 임종과정에 있는 환자의 연명의료결정에 관한 법률] 제11조 및 같은 법 시행규칙 제4조
            </Text>
          </View>
        </View> */}
        <View>
          <Button 
            icon={
              <AntDesign
                name="right"
                size={15}
                color="#4189D6"
              />
            }
            iconRight
            type="outline"
            titleStyle = {{fontSize : 23, fontWeight : 'bold'}}
            buttonStyle = {style=styles.buttonstyle}
            title = "완료"
            onPress = {() => navigation.navigate('counselhome')}
          />
        </View>
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
  templiststyle: {
    marginHorizontal : 20,
    marginVertical : 15,
    fontSize : 20,
    borderWidth : 1,
    borderColor : 'white',
    color : 'white',
    backgroundColor : 'white',
    paddingVertical: 30,
    paddingHorizontal : 20,
    //flexDirection : 'row'
  },
  newliststyle: {
    marginHorizontal : 20,
    marginVertical : 15,
    fontSize : 20,
    borderWidth : 1,
    borderColor : 'white',
    color : 'white',
    backgroundColor : 'white',
    paddingVertical: 30,
    paddingHorizontal : 20,
    flexDirection : 'row',
    justifyContent:'space-around'
  },
  textstyle:{
    fontSize:20,
    color:'black',
    paddingHorizontal: 10,
    flex:1,
    margin : 10
    //alignSelf: 'center'
  },
  buttonstyle : {
    alignSelf: 'stretch',
    marginHorizontal : 20,
    marginBottom : 15,
    borderWidth : 2,
    // borderColor : 'black'
  }
});

export default counselinfo2;