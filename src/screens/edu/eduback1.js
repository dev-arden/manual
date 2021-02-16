import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Buttonlist from '../../components/Buttonlist';
import Exwithhead from '../../components/Exwithhead';
import Circletext from '../../components/Circletext';
import Textlist from '../../components/Textlist';
import ButtonFinish from '../../components/ButtonFinish';

/**
 * 이제 의향서를 등록하고자 합니다. 
 * 혹 더 궁금한 사항 있으신가요?
 * 작성된 의향서는 국립연명의료관리기관의 연명의료정보처리시스템에 저장이 됩니다. 
 * 그리고 지금까지 나누었던 상담내용 및 모든 정보는 저장되거나 유출되지 않습니다. 
 */

const eduback1 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="1.배경"
      />
      <ScrollView style={{flex:2}}>
        <Textlist 
          text="연명의료결정제도는 연명의료결정법에 따라 연명의료에 관한 의사를 남겨놓을 수 있도록 기준과 절차를 정립하여 임종과정에 있는 환자가 존엄하게 삶을 마무리할 수 있도록 하는 제도다."
        />
        <Textlist  
          text="연명의료결정법은 「호스피스·완화의료 및 임종과정에 있는 환자의 연명의료결정에 관한 법률」의 약칭이며 연명의료에 대한 기본원칙, 연명의료결정의 관리 체계, 연명의료의 결정 및 그 이행 등에 필요한 사항을 정하여 임종과정에 있는 환자의 연명의료결정을 제도화함으로써 환자의 자기 결정을 존중하고 환자의 존엄과 가치를 보장하기 위해 제정되었다."
        />
        <Exwithhead 
          title="사전연명의료의향서"
          text="연명의료결정제도를 통해 19세 이상 성인은 사전연명의료의향서 등록기관에서 충분한 설명과 정보를 제공받은 후 미리 연명의료에 대한 의견을 사전연명의료의향서를 통해 남겨놓을 수 있다."
        />
        <Exwithhead 
          title="연명의료계획서"
          text="의료기관윤리위원회가 설치된 의료기관에서 의학적 판단에 따라 말기 환자 또는 임종과정에 있는 환자로 판단된 환자는 담당의사와 충분한 논의를 한 후 연명의료계획서를 작성하여 연명의료 시행여부를 결정할 수 있다."
        />
        <Textlist 
          text="연명의료결정제도에 대한 정보를 모든 사람에게 평등하게 제공하며, 시각장애, 청각장애, 신체장애, 인지장애, 비문해, 체류 외국인 등 개인의 특성을 반영한 맞춤형 상담을 제공한다."
        />
        <View style={styles.viewstyle}>
          <Text style={styles.textstyle}>
            연명의료결정제도에서는
          </Text>
          <Text style={styles.textstyle} >
            1) 당사자가 제도를 충분히 이해한 후 자발적으로 결정하도록 하고
          </Text>
          <Text style={styles.textstyle}>
          2) 이행에 있어서 죽음을 맞이하는 임종상황이 된 후에 당사자의 의견에 따라 시행되어야 한다.
          </Text>
        </View>
        <Textlist 
          text="연명의료결정제도 이용자가 경험하는 제도와 이를 통해 맞이하는 존엄한 죽음에 대한 지속적인 분석, 이용자·상담자·이행자·정책가의 열린 소통으로 임종문화와 제도의 성숙을 도모한다."
        />
      </ScrollView> 
      <ButtonFinish 
        routename="eduinfo"
        routename2="edupurpose1"
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
    //textAlign: 'justify'
    textAlign : 'auto',
    lineHeight: 30
  },
  viewstyle:{
    //borderWidth:1,
    backgroundColor: 'white',
    marginHorizontal : 20,
    marginVertical : 15,
  }
});

export default eduback1;