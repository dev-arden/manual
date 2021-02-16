import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native';
import Titleforeign2 from '../../components/Titleforeign2';
//import Buttonlist from '../components/Buttonlist';
import ExonlyHead from '../../components/ExonlyHead';
import ButtonFinish from '../../components/ButtonFinish';
import Fontisto from 'react-native-vector-icons/Fontisto';

const foreignwrite1 = ({}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titleforeign2 
        title="7단계"
        text="사전연명의료의향서 작성"
      />
      <ScrollView style={{flex:2}}>
        <ExonlyHead 
          title="사전연명의료의향서 서명 및 작성 완료"
        />
        <View style={styles.talkliststyle}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Fontisto name="quote-a-right" size={20}/>
            <Fontisto name="quote-a-left" size={20}/>
          </View>
          <Text style={styles.talktextstyle}>
          OOO님께서는 사전연명의료의향서 서식에 총 2번의 서명을 하실 예정입니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          첫 번째 서명은 사전연명의료의향서 내용에 대한 설명을 듣고 이해했다는 것입니다. 
          </Text>
          <Text style={styles.talktextstyle}>
          두 번째 서명은 향후 임종과정에 있는 환자가 되었을 때 연명의료를 시행하지 않거나 중단한다는 것에 동의한다는 것입니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          이때 서명은 수기 또는 구두로 모두 가능합니다.
          </Text>
          <Text style={styles.talktextstyle}>
          어떤 서명의 형태가 편하신가요?
          </Text> 
          <Text style={styles.talktextstyle}>
          지금까지 설명해 드린 6가지 사항에 대하여 이해하셨나요? 
          </Text>
          <Text style={styles.talktextstyle}>
          충분히 이해하셨으면 여기 확인란에 서명하시면 됩니다. 
          </Text> 
          <Text style={styles.plustextstyle}>
          (직접 서명 시 서명 위치를 잡아줌)
          </Text> 
          <Text style={styles.talktextstyle}>
          그리고 호스피스에 대하여 설명해 드렸는데, 호스피스를 이용할 의향이 있으신가요?
          </Text> 
          <Text style={styles.talktextstyle}>
          작성된 사전연명의료의향서는 법적으로 본인 또는 향후 작성자가 말기환자 또는 임종과정에 있는 환자가 되었을 때 담당의사에 의해 조회될 수 있습니다.
          </Text>
          <Text style={styles.talktextstyle}>
          가족이 의향서 작성기록을 볼 수 있게 열람하는 것을 허락할지 아닐지 여부를 정하실 수 있습니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          가족에게 열람 허용, 열람 거부, 결정하기 어려운 경우 그 밖의 의견으로 체크할 수 있습니다.
          </Text>
          <Text style={styles.plustextstyle}>
          (체크할 수 있도록 위치를 잡아줌)
          </Text> 
          <Text style={styles.talktextstyle}>
          작성을 원하시는지 최종적으로 확인하고, 마지막으로 작성일과 작성자란에 직접 서명을 부탁드립니다.
          </Text>
          <Text style={styles.plustextstyle}>
          (직접 서명 시 서명 위치를 잡아줌)
          </Text> 
          <Text style={styles.talktextstyle}>
          이제 작성이 완료되었습니다.
          </Text>
          <Text style={styles.talktextstyle}>
          향후 OOO님이 사전연명의료의향서를 직접 작성했다는 것을 구두로 남기시면 이후 작성에 대한 적법성에 문제 제기가 될 때 OOO님의 본인이 직접 스스로 결정에 의한 것임을 확인할 수 있습니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          구두로 남기시겠습니까?
          </Text>
          <Text style={styles.plustextstyle}>
          (동의하는 경우 아래와 같이 진행, 미동의 시 의향서 작성 완료)
          </Text>    
          <Text style={styles.plustextstyle}>
          (동의)
          </Text>    
          <Text style={styles.talktextstyle}>
          그렇다면 제가 말하는 것을 따라서 말씀해주세요.
          </Text>    
          <Text style={styles.talktextstyle}>
          ‘나 OOO은 연명의료를 시행하지 않거나 중단 등에 동의합니다’
          </Text>    
          <Text style={styles.talktextstyle}>
          네 완료하였습니다.
          </Text>    
          <Text style={styles.talktextstyle}>
          지금 구두로 하신 말씀을 함께 저장하겠습니다.
          </Text>    
          <Text style={styles.plustextstyle}>
          (미동의)
          </Text>    
          <Text style={styles.talktextstyle}>
          OOO님께서는 구두로 동의한 내용을 녹음하는 것에 대해 동의하지 않으셨습니다.
          </Text>    
          <Text style={styles.talktextstyle}>
          그러므로 의향서에 수기로 서명한 내용으로 동의를 대신하겠습니다.
          </Text>    
          <Text style={styles.talktextstyle}>
          이제 OOO님의 사전연명의료의향서 작성이 완료되었습니다.
          </Text>        
        </View> 
      </ScrollView>
      <ButtonFinish 
        routename="foreignmanual"
        routename2="foreignenter1"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  extextstyle2: {
    fontSize:20,
    color:'black',
    //paddingHorizontal: 10,
    flex:1,
    margin : 5,
    //alignSelf: 'center'
    textAlign: 'auto',
    lineHeight:30,
    fontWeight:'bold'
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
  plustextstyle: {
    fontSize:20,
    color:'#C96661',
    //paddingHorizontal: 10,
    flex:1,
    margin : 5,
    //alignSelf: 'center'
    textAlign: 'auto',
    lineHeight:30
  },
  talkliststyle:{
    marginHorizontal : 20,
    marginVertical : 15,
    borderWidth : 1,
    borderColor : 'grey',
    //color : '#DAD9DB',
    backgroundColor : '#ECECEB',
    // paddingVertical: 30,
    // paddingHorizontal : 20,
    padding : 10,
    borderRadius : 15
  },
  talkheadstyle: {
    fontSize:20,
    color:'#C96661',
    //paddingHorizontal: 10,
    flex:1,
    margin : 5,
    //alignSelf: 'center'
    textAlign: 'auto',
    lineHeight:30,
    fontWeight:'bold'
  },
  talktextstyle: {
    fontSize:22,
    color:'black',
    //paddingHorizontal: 10,
    flex:1,
    margin : 5,
    //alignSelf: 'center'
    textAlign: 'auto',
    lineHeight:30,
    fontWeight:'bold'
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
    //flexDirection : 'row',
    justifyContent:'space-around',
 },
});

export default foreignwrite1;