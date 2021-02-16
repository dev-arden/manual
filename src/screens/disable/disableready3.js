import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native';
import Titledisable2 from '../../components/Titledisable2';
import Textlist from '../../components/Textlist';
import ExonlyHead from '../../components/ExonlyHead';
import ButtonFinish from '../../components/ButtonFinish';
import Fontisto from 'react-native-vector-icons/Fontisto';

const disableready3 = ({}) => {
  return (
    // <SafeAreaView style={{flex:1}}>      
    //     <TitlewithoutImage
    //       title="● 일대일 상담실 이동"
    //     />
    //     <ScrollView style={{flex:2}}>
    //         <Imagelist 
    //           imageSource={require('../../assets/ready3.jpg')}
    //         />
    //         <Textlist
    //           //text="사전연명의료의향서 작성을 원하는 방문자를 기밀성 보장을 위해 작성자를 독립성이 보장된 ‘1:1 상담실’로 안내합니다."
    //           text="사전연명의료의향서 작성을 원하는 방문자를 상담내용이 밖으로 들리지 않는 ‘1:1 상담실’로 안내한다."
    //         />
    //     </ScrollView>
    //     <Buttonlist 
    //       title="다음"
    //       routename='counselready4'
    //     />
    // </SafeAreaView>
    <SafeAreaView style={{flex:1}}>
      <Titledisable2 
        title="1단계"
        text="사전연명의료의향서 신체맞춤상담을 위한 준비"
      />
      <ScrollView style={{flex:2}}>
        <ExonlyHead 
          title="일대일 상담실 이동"
        />
        <Textlist 
          text="• 사전연명의료의향서 작성을 원하는 방문자를 상담내용이 밖으로 들리지 않는 ‘일대일 상담실’로 안내한다."
        />
        <ExonlyHead 
          title="동행자 분리 상담"
        />
        <View style={styles.talkliststyle}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Fontisto name="quote-a-right" size={20}/>
            <Fontisto name="quote-a-left" size={20}/>
          </View>
          <Text style={styles.talkheadstyle}>
            [동행자와 함께 방문한 경우]
          </Text>
          <Text style={styles.talktextstyle}>
          사전연명의료의향서의 작성은 독립된 공간에서 일대일 상담을 통해 진행됩니다.
          </Text> 
          <Text style={styles.talktextstyle}>
          본인 스스로 의향서 작성의 의미를 깊이 고민하고 작성하실 수 있도록 하기 위해서이니 상담실 밖에서 잠시 대기하여 주시기 바랍니다.
          </Text> 
        </View>
        <Textlist 
          text="• 가족 등 동행 시 상담은 동행인과 분리된 공간에서 시행하여 동행자의 영향력을 배제한다. 부모, 형제, 자녀 등 가족이 대신하여 의향서를 작성할 수 없으며, 19세 미만은 의향서 작성이 불가함을 안내한다. 특히, 가족의 의지로 진행되지 않도록 주의한다."
        />
        {/* <View style={styles.exliststyle}>
          <Text style={styles.extextstyle}>
          가족 등 동행 시 상담은 동행인과 분리된 공간에서 시행하여 동행자의 영향력을 배제한다.
          </Text> 
          <Text style={styles.extextstyle}>
          부모, 형제, 자녀 등 가족이 대신하여 의향서를 작성할 수 없으며, 19세 미만은 의향서 작성이 불가함을 안내한다.
          </Text> 
          <Text style={styles.extextstyle}>
          특히, 가족의 의지로 진행되지 않도록 주의한다.
          </Text> 
          
        </View> */}
      </ScrollView>
      <ButtonFinish 
        routename="disablemanual"
        routename2="disableinfo1"
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
    color:'#61AD7A',
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
});

export default disableready3;