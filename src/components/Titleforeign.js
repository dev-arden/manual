import React from 'react';
import {Text, TouchableOpacity, StyleSheet,View, Image} from 'react-native';
import { withNavigation } from 'react-navigation';

const Titleforeign = ({title}) => {
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
  // titlestyle:{
  //   fontSize:22,
  //   fontWeight:'bold', 
  //   color:'black',
    
  //   alignSelf : 'center'
  // },
  // btboxview:{
    
  //   backgroundColor : '#FDF6E3',
  //   height : 100,
  //   margin : 15,
  //   borderRadius : 20,
   
  //   justifyContent : 'center',
    
  // },
  titlestyle:{
    fontSize:25,
    fontWeight:'bold', 
    color:'black',
    // borderWidth: 1,
    // borderColor : 'black',
    alignSelf : 'center',
    //flex:1,
    //margin : 5,
    //alignSelf: 'center'
    //textAlign: 'justify'
    textAlign : 'auto',
  },
  btboxview:{
    //flexDirection : 'row',
    //backgroundColor : '#FDF6E3',
    backgroundColor:'#EAC6C0',
    //height : 60,
    margin : 15,
    borderRadius : 20,
    //alignSelf: 'center',
    alignContent : 'center',
    padding : 8
    // borderWidth:2,
    // borderColor: 'black'
  },
  textstyle:{
    fontSize:20,
    color:'black',
    //paddingHorizontal: 10,
    flex:1,
    margin : 5,
    //alignSelf: 'center'
    //textAlign: 'justify'
    textAlign : 'auto',
    lineHeight : 30
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
  extextstyle: {
    fontSize:20,
    color:'black',
    //paddingHorizontal: 10,
    flex:1,
    margin : 5,
    //alignSelf: 'center'
    textAlign: 'auto',
    lineHeight:30
  },
});

export default Titleforeign;