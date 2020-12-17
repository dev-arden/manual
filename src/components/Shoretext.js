import React from 'react';
import {Text, TouchableOpacity, StyleSheet,View} from 'react-native';
import { withNavigation } from 'react-navigation';

const Shorttext = ({text}) => {
  return (
    <View>
      <Text style={styles.textstyle} >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textstyle:{
    fontSize:18, 
    color:'black', 
    paddingHorizontal: 10, 
    flex:1, 
    alignSelf: 'center'
  }
});

export default Shorttext;