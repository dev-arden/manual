import React from 'react';
import {Text, TouchableOpacity, StyleSheet,View, Image} from 'react-native';
import { withNavigation } from 'react-navigation';

const TitlewithoutImage = ({title}) => {
  return (
    <View>
      <View style = {styles.btboxview}>
        <Text style={styles.titlestyle} >
          {title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titlestyle:{
    fontSize:21,
    fontWeight:'bold', 
    color:'black',
    // borderWidth: 1,
    // borderColor : 'black',
    alignSelf : 'center'
  },
  btboxview:{
    flexDirection : 'row',
    //backgroundColor : '#FDF6E3',
    backgroundColor:'#D5DCE9',
    height : 60,
    margin : 15,
    borderRadius : 20,
    //alignSelf: 'center',
    justifyContent : 'center',
    padding : 5
    // borderWidth:2,
    // borderColor: 'black'
  }
});

export default TitlewithoutImage;