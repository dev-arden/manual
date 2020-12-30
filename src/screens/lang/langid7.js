import React from 'react';
import {StyleSheet,Image,View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../../components/Textlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import NavLink from '../../components/NavLink';
import ButtonFinish from '../../components/ButtonFinish';

/**
 * 
 *  저는 보건복지부 지정을 받은 사전연명의료의향서 등록기관인 [기관명] 소속 상담사이며, 의향서 작성을 돕고 있습니다. 
   [상담자 신분증과 등록기관 지정서 제시
 */

const langid7 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="사전연명의료의향서 상담일지"
      />
      <ScrollView style={{flex:2}}>
        <View style={styles.viewstyle}>
          <Image 
            source={require('../../../assets/id7.png')}
            style={{height : 350, width : 330, resizeMode:'contain'}}
          />
        </View>
        <Textlist 
          text="본 상담일지양식은 예시로 제공된 것이며 기관 자율에 따라 자유롭게 상담일지를 작성•활용하실 수 있습니다. 다만 상담일지 작성시에는 개인정보보호법 위반이 되지 않도록 주의하세요."
        />
        <NavLink 
          routeName="langid8"
          text="추가 설명 확인하기"
        />
      </ScrollView>
      <ButtonFinish 
        routename="langmanual"
        routename2="langtalk1"
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

export default langid7;