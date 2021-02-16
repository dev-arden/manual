import React from 'react';
import {StyleSheet,View,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Buttonlist from '../../components/Buttonlist';
import Exwithhead from '../../components/Exwithhead';
import Circletext from '../../components/Circletext';
import Textlist from '../../components/Textlist';
import ButtonFinish from '../../components/ButtonFinish';
import ExImage from '../../components/ExImage';
import Imagelist from '../../components/Imagelist';
import ExonlyHead from '../../components/ExonlyHead';
import Numhead from '../../components/Numhead';

/**
 * 이제 의향서를 등록하고자 합니다. 
 * 혹 더 궁금한 사항 있으신가요?
 * 작성된 의향서는 국립연명의료관리기관의 연명의료정보처리시스템에 저장이 됩니다. 
 * 그리고 지금까지 나누었던 상담내용 및 모든 정보는 저장되거나 유출되지 않습니다. 
 */

const edukind2 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="6.연명의료 시술의 종류"
      />
      <ScrollView style={{flex:2}}>
        {/* <Numhead 
          title="중단할 수 있는 연명의료 시술"
        /> */}
        {/* <View style={styles.exliststyle}>
          <View style = {styles.exviewstyle}>
            
            <Text style={{alignSelf:'center', fontSize:21,fontWeight:'bold'}}>
              1)
            </Text>
            <View style={{flexDirection:'column'}}>
              <Text style={styles.extitlestyle}>
                연명의료결정법에 따라 중단가능한
              </Text>
              <Text style={styles.extitlestyle}>
                연명의료의 종류
              </Text>
            </View>
          </View>  
        </View> */}
        <ExonlyHead 
          title="인공호흡기 착용"
        />
        <Textlist 
          text="본인 스스로 정상적인 호흡을 할 수 없는 호흡부전 환자에게 인공적인 방법(기계 이용)으로 호흡을 도와주는 방법."
        />
        <Textlist 
          text="일반적으로 기도 확보를 위해 튜브를 삽입하는 기관 내 삽관이 필요한데, 기도삽관이나 기관절개술의 시행과정에서 침습적인 행위로 인해 치아나 기도의 손상, 식도 천공, 피하기종 및 출혈 등이 발생할 수 있으며 기도삽관 및 절개로 인한 통증 등으로 진정제와 승압제 등의 약물을 지속적으로 사용하기도 함."
        />
        <Textlist 
          text="주의: 산소 공급하는 산소호흡기와 착각하는 경우 많은데, 인공호흡기가 산소호흡기 착용은 아님. 산소호흡기는 호흡이 힘들 경우 산소마스크 등으로 산소를 공급해주는 것임."
        />
        {/* <Exwithhead 
          title="주의"
          text="산소 공급하는 산소호흡기와 착각하는 경우 많은데, 인공호흡기가 산소호흡기 착용은 아니다. 산소호흡기는 호흡이 힘들 경우 산소마스크 등으로 산소를 공급해주는 것이다."
        /> */}
      </ScrollView> 
      <Buttonlist 
        title="다음"
        routename="edukind3"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textstyle:{
    fontSize:20,
    color:'black',
    paddingHorizontal: 10,
    flex:1,
    margin : 5,
    //alignSelf: 'center'
    textAlign: 'justify'
  },
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

export default edukind2;