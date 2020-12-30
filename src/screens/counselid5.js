import React from 'react';
import {StyleSheet,Image,View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../components/Textlist';
import Buttonlist from '../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../components/TitlewithoutImage';
import Imagelist from '../components/Imagelist';
import NavLink from '../components/NavLink';
/**
 * 
 *  저는 보건복지부 지정을 받은 사전연명의료의향서 등록기관인 [기관명] 소속 상담사이며, 의향서 작성을 돕고 있습니다. 
   [상담자 신분증과 등록기관 지정서 제시
 */

const counselid5 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="간편인지검사"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../assets/id5.jpg')}
        />
        <Textlist 
          text="이 검사는 사전연명의료의향서를 직접 작성하기 위해 필요한 의사결정능력 여부를 판단하기 위한 간단한 질문입니다."
        />
        <View style={styles.viewstyle}>
          <Image 
            source={require('../../assets/id5.png')}
            style={{height : 150, width : 330, resizeMode:'contain'}}
          />
        </View>
        <Textlist 
          text="(각 질문의 정답 1점씩을 더하여 3점 이상은 작성을 진행하고, 2점 이하는 작성자의 동의하에 보호자와 동석하여 인지맞춤상담을 진행)"
        />
        <NavLink 
          routeName="counselid6"
          text="추가 설명 확인하기"
        />
      </ScrollView>
      <Buttonlist 
        title="다음"
        routename="counselid7"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewstyle:{
     marginHorizontal : 20,
     //marginBottom : 20,
     marginVertical : 15,
     fontSize : 20,
     borderWidth : 1,
     borderColor : 'white',
     color : 'white',
     backgroundColor : 'white',
     padding : 10,
     flexDirection : 'row',
     justifyContent:'space-around'
  }
});

export default counselid5;