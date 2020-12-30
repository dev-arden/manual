import React from 'react';
import {StyleSheet, Image,View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../../components/Textlist';
import Buttonlist from '../../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Imagelist from "../../components/Imagelist";
import NavLink from '../../components/NavLink';

/**
 * 설명을 잘 이해하셨나요? 
 * 설명드린 6가지 사항에 대해 충분히 이해하셨다면 설명사항 확인란에 확인 일자,성명을 작성 하신 후 서명을 하시면 됩니다.
 * 기명날인도 가능합니다. 
 * 작성된 사전연명의료의향서는 법적으로 본인 또는 향후 작성자가 말기 환자 또는 임종과정에 있는 환자가 되었을 떄 담당의사에 의해 조회될 수 있습니다. 
 * 작성자의 사망 전 가족열람을 허용할 지 여부는 작성자가 정할 수 있습니다. 정할 수 있는 범위는 가족에게 열람 허용 또는 열람 거부지만 결정하기 어려운 경우 그 밖의 의견으로 체크할 수 있습니다.  
 * 작성을 원하시는지 최종 확인하고, 마지막으로 작성일과 작성자란에 직접 서명을 부탁드립니다. 
 * 이제 작성이 완료되었습니다. 
 */

const langwrite = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="사전연명의료의향서 서명"
      />
      <ScrollView style={{flex:2}}>
        {/* <View style={styles.newliststyle}>
          <Image
            source={require('../../assets/form.png')}
            style={{height:400, width:330, resizeMode:'contain'}}
          />
        </View> */}
        <Imagelist 
          imageSource={require('../../../assets/write.jpg')}
        />
        <Textlist 
          text="OOO님께서는 사전연명의료의향서 서식에 총 2번의 서명을 하실 예정입니다."
        />
        <Textlist 
          text="첫 번째 서명은 사전연명의료의향서 내용에 대한 설명을 듣고 이해했다는 것입니다."
        />
        <Textlist 
          text="두 번째 서명은 향후 임종과정에 있는 환자가 되었을 때 연명의료를 시행하지 않거나 중단한다는 것에 동의한다는 것입니다."
        />
        <Textlist 
          text="이때 서명은 수기 또는 구두로 모두 가능합니다."
        />
        <Textlist 
          text="어떤 서명의 형태가 편하신가요?"
        />
        <Textlist 
          text="지금까지 설명해 드린 6가지 사항에 대하여 이해하셨나요?"
        />
        <Textlist 
          text="충분히 이해하셨으면 여기 확인란에 서명하시면 됩니다."
        />
        <Textlist 
          text="(직접 서명 시 서명 위치를 잡아줌)"
        />
        <Textlist 
          text="그리고 호스피스에 대하여 설명해 드렸는데, 호스피스를 이용할 의향이 있으신가요?"
        />
        <Textlist 
          text="작성된 사전연명의료의향서는 법적으로 본인 또는 향후 작성자가 말기환자 또는 임종과정에 있는 환자가 되었을 때 담당의사에 의해 조회될 수 있습니다."
        />
        <Textlist 
          text="가족이 의향서 작성기록을 볼 수 있게 열람하는 것을 허락할지 아닐지 여부를 정하실 수 있습니다."
        />
        <Textlist 
          text="가족에게 열람 허용, 열람 거부, 결정하기 어려운 경우 그 밖의 의견으로 체크할 수 있습니다."
        />
        <Textlist 
          text="(체크할 수 있도록 위치를 잡아줌)"
        />
        <Textlist 
          text="작성을 원하시는지 최종적으로 확인하고, 마지막으로 작성일과 작성자란에 직접 서명을 부탁드립니다."
        />
        <Textlist 
          text="(직접 서명 시 서명 위치를 잡아줌)"
        />
        <Textlist 
          text="이제 작성이 완료되었습니다."
        />
        <NavLink 
          text="추가 설명 확인하기"
          routeName="langwrite12"
        />
      </ScrollView> 
      <Buttonlist
        title = "다음"
        routename = "langwrite2"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewstyle : {
    flex:1,
    justifyContent : 'center'
  },
  newliststyle: {
    //marginHorizontal : 20,
    marginBottom : 20,
    //marginVertical : 15,
    fontSize : 20,
    borderWidth : 1,
    borderColor : 'white',
    color : 'white',
    backgroundColor : 'white',
    // paddingVertical: 10,
    // paddingHorizontal : 10,
    flexDirection : 'row',
    justifyContent:'space-around'
  },
});

export default langwrite;