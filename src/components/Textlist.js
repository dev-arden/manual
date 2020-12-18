import React from 'react';
import {Text, TouchableOpacity, StyleSheet,View} from 'react-native';
import { withNavigation } from 'react-navigation';

const Textlist = ({text}) => {
  return (
    <View style={styles.viewstyle}>
      <Text style={styles.textstyle} >
        {text}
      </Text>
    </View>
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
  }
});

export default Textlist;