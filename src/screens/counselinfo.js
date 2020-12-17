import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';
import {Button} from 'react-native-elements'
import Titlelist from "../components/Titlelist";
import Textlist from "../components/Textlist";
import Checkicon from "../components/Checkicon";
import Shorttext from "../components/Shoretext";
import Buttonlist from "../components/Buttonlist";

/**
 * 
 *  저는 보건복지부 지정을 받은 사전연명의료의향서 등록기관인 [기관명] 소속 상담사이며, 의향서 작성을 돕고 있습니다. 
   [상담자 신분증과 등록기관 지정서 제시
 */

const counselinfo = ({navigation}) => {
  return (
    <ScrollView>
      <View style = {styles.viewstyle}>
        <Titlelist
          title="상담자 소개"
          imageSource={require('../../assets/info.png')}
        />
        <Textlist
          text="안녕하세요. 방문해주셔서 감사드립니다." 
        />
        <Textlist
          text="저는 상담자 ○○○입니다." 
        />
        <Textlist
          text="저는 보건복지부 지정을 받은 사전연명의료의향서 등록기관인 [기관명] 소속 상담사이며, 의향서 작성을 돕고 있습니다." 
        />
        <View style={styles.liststyle}>
          <Checkicon />
          <Shorttext 
            text="상담자 신분증과 등록기관 지정서 제시"
          />
        </View>
        {/* <View style={styles.liststyle}>
          <View style={{alignSelf:"center"}}>
  
            <AntDesign name="check" size={25} color="blue"/>
          </View>
          <View style={{flexDirection : 'column'}}>
            <Text style={styles.textstyle}>
              안녕하세요 
            </Text>
            <Text style={styles.textstyle}>
              방문해주셔서 감사합니다. 
            </Text>
            <Text style={styles.textstyle}>
              저는 상담자 OOO입니다.
            </Text>
            <Text style={styles.textstyle}>
              저는 보건복지부 지정을 받은
            </Text>
            <Text style={styles.textstyle}>
              사전연명의료의향서 등록기관인
            </Text>
            <Text style={styles.textstyle}>
              [기관명] 소속 상담사이며,
            </Text>
            <Text style={styles.textstyle}>
              의향서 작성을 돕고 있습니다.
            </Text>
          </View>
        </View>
        <View style={styles.liststyle}>
          <View style={{alignSelf:"center"}}>
            <AntDesign name="check" size={25} color="blue"/>
          </View>
          <Text style={{fontSize:20, color:'black', paddingHorizontal: 10, flex:1, alignSelf: 'center'}}>
            상담자 신분증과 등록기관 지정서 제시
          </Text>
        </View> */}
        <Buttonlist 
          title="다음"
          routename="counselinfo2"
        />
      </View>
    </ScrollView>
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
  }
});

export default counselinfo;