import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../../components/Textlist';
import Buttonlist from '../../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import ExImage from '../../components/ExImage';

/**
 * 
 *  저는 보건복지부 지정을 받은 사전연명의료의향서 등록기관인 [기관명] 소속 상담사이며, 의향서 작성을 돕고 있습니다. 
   [상담자 신분증과 등록기관 지정서 제시
 */

const deaftalkset2 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="추가 설명"
      />
      <ScrollView style={{flex:2}}>
      <Textlist 
          text="적법하게 작성된 의향서는 연명의료에 관한 작성자 본인의 명시적 의사 표시로서, 향후 작성자가 임종과정에 있는 환자로 판단될 때 담당의사(의사를 표현할 수 없는 의학적 상태인 경우 담당의사 및 해당 분야 전문의)의 확인을 거쳐 연명의료를 시행하지 않거나 중단할 수 있는 효력을 가지게 됨을 설명한다."
        />
        <Textlist 
          text="의향서가 작성되었다 하더라도 1) 본인이 직접 작성하지 않은 경우, 2) 본인의 자발적 의사에 따라 작성되지 않은 경우, 3) 작성 전 등록기관이 설명해야 할 내용이 제공되지 않거나 작성자의 확인을 받지 않은 경우에는 의향서로서의 효력이 인정되지 않음을 설명한다."
        />
        <Textlist 
          text="의향서가 작성되어 등록된 후에 연명의료계획서가 다시 작성된 경우에는 연명의료계획서 작성 이후부터 의향서가 효력을 잃게 됨을 설명한다."
        />
        {/* <Textlist 
          text="연명의료계획서"
        />
        <View style={styles.viewstyle}>
          <Image 
            source={require('../../assets/set2.png')}
            style={{height : 400, width : 330, resizeMode:'contain'}}
          />
        </View> */}
        <ExImage 
          title="연명의료계획서"
          text=""
          imageSource={require('../../../assets/set2.png')}
          imageStyle={{height : 400, width : 330, resizeMode:'contain'}}
        />
      </ScrollView>
      <Buttonlist 
        title="확인"
        routename="deaftalkset"
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

export default deaftalkset2;