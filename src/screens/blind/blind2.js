import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Buttonlist from '../../components/Buttonlist';
import Exwithhead from '../../components/Exwithhead';
import ExImage from '../../components/ExImage';
import Titleblind from '../../components/Titleblind';
import Textlist from '../../components/Textlist';
import ButtonFinish from '../../components/ButtonFinish';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

/**
 * 이제 의향서를 등록하고자 합니다. 
 * 혹 더 궁금한 사항 있으신가요?
 * 작성된 의향서는 국립연명의료관리기관의 연명의료정보처리시스템에 저장이 됩니다. 
 * 그리고 지금까지 나누었던 상담내용 및 모든 정보는 저장되거나 유출되지 않습니다. 
 */

const blind2 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      {/* <TitlewithoutImage 
        title="시각장애인"
      /> */}
      <Titleblind 
        title="시각장애인 응대 시 상담자세"
      />
      <ScrollView style={{flex:2}}>
        <Textlist 
          text="- 문을 열 때는 활짝 열어 벽에 바짝 붙여 놓도록 하여 시각장애인이 지나가다 문에 부딪히지 않도록 한다."
        />
        <Textlist 
          text="- 시각장애인 혼자서 문 통과 시 손잡이가 문의 어느 방향에 있는지 설명하고, 문손잡이를 잡도록 한다."
        />
        <Textlist 
          text="- 안전하게 기댈 수 있도록 등받이 의자가 필요하다."
        />
        <Textlist 
          text="- 의자에 앉을 때 뒤에서 밀거나 앞에서 잡아당기지 말고, 한 손은 의자에 다른 한 손은 책상에 닿게 해주면 바르게 앉을 수 있다."
        />
        <Textlist 
          text="- 맹인안내견을 시각장애인의 허락 없이 만지지 않도록 한다."
        />
        <Textlist 
          text="- 상담 시 발음은 정확하고 천천히 설명한다."
        />
        <Textlist  
          text="- 대화 내용 등에 대하여 녹화나 녹음이 필요한 경우 사전 동의를 먼저 구두로 확인하고 진행해야 한다."
        />
        <Textlist 
          text="- 상담 중 잠시 자리를 비우게 될 때, 자리를 비우는 상황을 설명한 후 이동하고, 돌아온 후 돌아왔다고 말한다."
        />
        <View style={styles.exliststyle}>
          <Text style={styles.extextstyle}>
          - 컵이나 물건 등을 전달 시, 컵의 내용물을 설명하고 탁자 위에 놓으면서 손잡이를 잡도록 해준다.
          </Text> 
          <Text style={styles.extextstyle}>
          날카롭거나 뾰족하여 다칠 위험이 있는 물건을 전달 시 안전한 부분을 시각장애인으로 향하게 하고, 손잡이에 손이 닿도록 한다.
          </Text>
        </View>
        <Textlist  
          text="- 서류에 서명이 필요한 경우, 내용에 대한 충분한 설명 후 서명에 동의 여부를 먼저 구두로 확인한 후 진행해야 한다."
        />
      </ScrollView> 
      <ButtonFinish 
        routename="manual2"
        routename2="blindmanual"
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
    //borderWidth:1,
    backgroundColor: 'white',
    marginHorizontal : 20,
    marginVertical : 15,
  },
  exliststyle:{
    marginHorizontal : 20,
    marginVertical : 15,
    borderWidth : 1,
    borderColor : 'white',
    color : 'white',
    backgroundColor : 'white',
    // paddingVertical: 30,
    // paddingHorizontal : 20,
    padding : 10
  },
  extextstyle: {
    fontSize:20,
    color:'black',
    //paddingHorizontal: 10,
    flex:1,
    margin : 5,
    //alignSelf: 'center'
    textAlign: 'auto',
    lineHeight:30
  },
  
  extitlestyle:{
    alignSelf : 'center',
    //marginLeft : 10,
    fontSize:20,
    fontWeight : 'bold',
    marginLeft : 10,
    // borderColor : 'black',
    // borderWidth : 1
  },
  exviewstyle: {
    flexDirection : 'row',
    marginBottom : 10,
    alignContent : 'center',
    // borderColor : 'black',
    // borderWidth : 1
  },
});

export default blind2;