import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../../components/Textlist';
import Buttonlist from '../../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';


/**
 * 
 *  저는 보건복지부 지정을 받은 사전연명의료의향서 등록기관인 [기관명] 소속 상담사이며, 의향서 작성을 돕고 있습니다. 
   [상담자 신분증과 등록기관 지정서 제시
 */

const deaftalkhana10 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="추가 설명"
      />
      <ScrollView style={{flex:2}}>
        <Textlist 
          text="법에서 제시하고 있는 연명의료 시술(심폐소생술, 인공호흡기 착용, 체외생명유지술, 혈액투석, 항암제 투여, 수혈, 혈압상승제 투여, 그 밖에 담당의사가 환자의 최선의 이익을 보장하기 위해 시행하지 않거나 중단할 필요가 있다고 의학적으로 판단하는 시술)이 환자에게 시행될 수 있는 상황과 시행방법을 설명한다."
        />
        <Textlist 
          text="임종과정에 있는 환자에게 위 시술이 치료 효과 없이 임종과정의 기간만 연장하게 된다는 담당의사의 의학적 판단이 있는 경우 시행하지 않거나 중단하는 것에 대하여 미리 동의를 표명한다는 사실을 설명한다."
        />
      </ScrollView>
      <Buttonlist 
        title="확인"
        routename="deaftalkhana9"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewstyle:{
    flex:1,
    justifyContent : 'center'
  }
});

export default deaftalkhana10;