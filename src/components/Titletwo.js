import React from 'react';
import {Text, TouchableOpacity, StyleSheet,View, Image} from 'react-native';
import { withNavigation } from 'react-navigation';

const Titletwo = ({title, text}) => {
  return (
    <View>
      <View style = {styles.btboxview}>
        <Text style={styles.titlestyle} >
          {title}
        </Text>
        <Text style={styles.titlestyle} >
          {text}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titlestyle:{
    fontSize:22,
    fontWeight:'bold', 
    color:'black',
    // borderWidth: 1,
    // borderColor : 'black',
    alignSelf : 'center'
  },
  btboxview:{
    //flexDirection : 'row',
    backgroundColor : '#FDF6E3',
    height : 100,
    margin : 15,
    borderRadius : 20,
    //alignSelf: 'center',
    justifyContent : 'center',
    //padding : 3
    // borderWidth:2,
    // borderColor: 'black'
  }
});

export default Titletwo;