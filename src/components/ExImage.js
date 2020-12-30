import React from 'react';
import {Text, TouchableOpacity, StyleSheet,View,Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const ExImage = ({title,text,imageSource,imageStyle}) => {
  return (
    <View style={styles.exliststyle}>
      <View style = {styles.viewstyle}>
        <FontAwesome name="square" size={17} color="black" style={{alignSelf:'center'}}/>
        <Text style={styles.titlestyle}>
          {title}
        </Text>
      </View>
      <Text style={styles.textstyle}>
        {text}
      </Text>
      <View style={{flexDirection:'row',justifyContent:'center'}}>
        <Image 
          source = {imageSource} 
          style ={imageStyle}
        />
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
  textstyle: {
    fontSize:20,
    color:'black',
    //paddingHorizontal: 10,
    flex:1,
    //margin : 5,
    //alignSelf: 'center'
    textAlign: 'justify',
  },
  titlestyle:{
    alignSelf : 'center',
    //marginLeft : 10,
    fontSize:20,
    fontWeight : 'bold',
    marginHorizontal : 5,
    // borderColor : 'black',
    // borderWidth : 1
  },
  viewstyle: {
    flexDirection : 'row',
    marginBottom : 10,
    alignContent : 'center',
    // borderColor : 'black',
    // borderWidth : 1
  },
  imagestyle:{
    height : 250, 
    width : 300, 
    resizeMode:'contain'
  }
});

export default ExImage;