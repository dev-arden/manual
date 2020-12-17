import React from 'react';
import {View, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
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
        <Buttonlist 
          title="완료"
          routename="manual1"
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
        {/* <View>
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
        </View> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewstyle:{
    flex:1,
    justifyContent : 'center'
  }
});

export default counselinfo2;