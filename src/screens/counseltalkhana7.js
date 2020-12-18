import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Textlist from '../components/Textlist';
import Titlelist from '../components/Titlelist';
import Buttonlist from '../components/Buttonlist';
import { ScrollView } from 'react-native-gesture-handler';
import TitlewithoutImage from '../components/TitlewithoutImage';
import Exlist from '../components/Exlist';

const counseltalkhana7 = () => {
  return(
    <ScrollView>
      <View style={styles.viewstyle}> 
        <Exlist 
          text = "법에서 제시하고 있는 연명의료 시술(심폐소생술, 인공호흡기 착용, 체외생명유지술, 혈액투석, 항암제 투여, 수혈, 혈압상승제 투여, 그 밖에 담당의사가 환자의 최선의 이익을 보장하기 위해 시행하지 않거나 중단할 필요가 있다고 의학적으로 판단하는 시술)이 환자에게 시행될 수 있는 상황과 시행 방법 설명"
        />
        <Exlist 
          text = "임종과정에 있는 환자에게 위 시술이 치료 효과 없이 임종과정의 기간만 연장하게 된다는 담당의사의 의학적 판단이 있는 경우 시행하지 않거나 중단하는 것에 대하여 미리 동의를 표명한다는 사실 설명"
        />
        <Buttonlist 
          title="다음"
          routename="counseltalkhana8"
        />
      </View>    
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  viewstyle : {
    flex:1,
    justifyContent : 'center'
  }
});

export default counseltalkhana7;