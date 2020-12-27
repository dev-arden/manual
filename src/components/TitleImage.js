import React from 'react';
import {Text, TouchableOpacity, StyleSheet,View, Image} from 'react-native';
import { withNavigation } from 'react-navigation';

const TitleImage = ({imageSource, title}) => {
  return (
    <View style={styles.newliststyle}>
      <Image 
        source = {imageSource} 
        style ={styles.imagestyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  newliststyle: {
    //marginHorizontal : 20,
    //marginBottom : 20,
    marginVertical : 20,
    fontSize : 20,
    borderWidth : 1,
    borderColor : 'white',
    color : 'white',
    backgroundColor : 'white',
    // paddingVertical: 10,
    // paddingHorizontal : 10,
    flexDirection : 'row',
    justifyContent:'center'
  },
  imagestyle:{
    height : 300, 
    width : 330, 
    resizeMode:'contain'
  }
});

export default TitleImage;