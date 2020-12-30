import React from 'react';
import {Text, TouchableOpacity, StyleSheet,View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const IconIntext = ({text}) => {
  return (
    
      <View style = {styles.viewstyle}>
        <AntDesign name="minus" size={17} color="black" style={{alignSelf:'center'}}/>
        <Text style={styles.titlestyle}>
          {text}
        </Text>
      </View>  
   
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
  titlestyle:{
    alignSelf : 'center',
    //marginLeft : 10,
    fontSize:20,
    //fontWeight : 'bold',
    //marginHorizontal : 10,
    // borderColor : 'black',
    // borderWidth : 1
  },
  viewstyle: {
    flexDirection : 'row',
    margin : 5,
    alignContent : 'center',
    // borderColor : 'black',
    // borderWidth : 1
  }
});

export default IconIntext;