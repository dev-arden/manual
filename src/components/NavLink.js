import React from 'react';
import {Text, TouchableOpacity, StyleSheet,View} from 'react-native';
import { withNavigation } from 'react-navigation';
import AntDesign from 'react-native-vector-icons/AntDesign';

const NavLink = ({navigation, text, routeName}) => {
  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate(routeName)}
      style={styles.viewstyle}
    >
      <View style={styles.iconstyle}>
        <AntDesign name="plus" size={25} color="blue"/>
      </View>
      <Text style={styles.link}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconstyle:{
    alignSelf : 'center'
  },
  link:{
    color: 'blue',
    fontSize:20,
    paddingHorizontal: 10,
    flex:1,
    margin : 5,
    alignSelf: 'center'
  },
  viewstyle:{
    marginHorizontal : 20,
    marginVertical : 15,
    fontSize : 20,
    borderWidth : 1,
    borderColor : 'white',
    color : 'white',
    backgroundColor : 'white',
    paddingHorizontal : 10,
    flexDirection : 'row'
  }
});

export default withNavigation(NavLink);