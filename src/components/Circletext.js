import React from 'react';
import {Text, TouchableOpacity, StyleSheet,View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from "react-native-vector-icons/Entypo";

const Circletext = ({text}) => {
  return (
    <View style={styles.exliststyle}>
      <View style = {styles.viewstyle}>
        <Entypo name="circle" size={17} color="black" style={{alignSelf:'center'}}/>
        <Text style={styles.titlestyle}>
          {text}
        </Text>
      </View>  
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
    marginHorizontal : 10,
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

export default Circletext;