import React from 'react';
import {StyleSheet,View} from 'react-native';
import {Button} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { withNavigation } from 'react-navigation';

const ButtonFinish = ({navigation,routename, routename2}) => {
  return (
    <View style={styles.viewstyle}>
      <Button 
        icon={
          <AntDesign
            name="left"
            size={15}
            color="#4189D6"
          />
        }
        //iconRight
        type="outline"
        titleStyle = {styles.title}
        buttonStyle = {style=styles.button}
        title = "목록으로"
        onPress = {() => navigation.navigate(routename)}
      />
      <Button 
        icon={
          <AntDesign
            name="right"
            size={15}
            color="#4189D6"
          />
        }
        iconRight
        type="outline"
        titleStyle = {styles.title}
        buttonStyle = {style=styles.button}
        title = "다음단계"
        onPress = {() => navigation.navigate(routename2)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconstyle:{
    alignSelf : 'center'
  },
  title:{
    fontSize : 23, 
    fontWeight : 'bold'
  },
  button:{
    alignSelf: 'stretch',
    borderWidth : 2,
  },
  viewstyle:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal : 20,
    marginVertical : 15,
  }
});

export default withNavigation(ButtonFinish);