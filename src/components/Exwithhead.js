import React from 'react';
import {Text, TouchableOpacity, StyleSheet,View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Exwithhead = ({title,text}) => {
  return (
    <View style={styles.exliststyle}>
      <View style = {styles.iconstyle}>
        <AntDesign name="exclamationcircleo" size={25} color="black"/>
      </View>
      <Text style={styles.titlestyle}>
        {title}
      </Text>
      <Text style={styles.textstyle}>
        {text}
      </Text>   
    </View>
  );
};

const styles = StyleSheet.create({
  iconstyle:{
    alignSelf : 'center'
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
  textstyle: {
    fontSize:20,
    color:'black',
    //paddingHorizontal: 10,
    flex:1,
    //margin : 5,
    //alignSelf: 'center'
    textAlign: 'justify',
  },
  titleviewstyle:{
    flexDirection : 'row',
    alignSelf: 'center',
    paddingHorizontal: 10,
    margin : 5,
  },
  textviewstyle:{
    borderWidth:2
  },
  titlestyle:{
    alignSelf : 'center',
    //marginLeft : 10,
    fontSize:20,
  }
});

export default Exwithhead;