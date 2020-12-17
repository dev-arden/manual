import React from 'react';
import {Text, TouchableOpacity, StyleSheet,View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CheckText = ({text}) => {
  return (
    <View style={styles.liststyle}>
      <View style={styles.iconstyle}>
        <AntDesign name="check" size={25} color="blue"/>
      </View>
      <Text style={styles.textstyle} >
        {text}
      </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  iconstyle:{
    alignSelf : 'center'
  },
  textstyle:{
    fontSize:18, 
    color:'black', 
    paddingHorizontal: 10, 
    flex:1, 
    alignSelf: 'center'
  },
  liststyle: {
    marginHorizontal : 20,
    marginVertical : 15,
    fontSize : 20,
    borderWidth : 1,
    borderColor : 'white',
    color : 'white',
    backgroundColor : 'white',
    paddingVertical: 30,
    paddingHorizontal : 20,
    flexDirection : 'row'
  }
});

export default CheckText;