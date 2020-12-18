/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
//import {Provider} from './src/context/BlessedContext';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
//import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
FontAwesome.loadFont();
SimpleLineIcons.loadFont();
Ionicons.loadFont();

import HomeScreen from "./src/screens/HomeScreen";
import counselhome from "./src/screens/counselhome";
import counselid from "./src/screens/counselid";
import counselid2 from "./src/screens/counselid2";
import counselid3 from "./src/screens/counselid3";
import counselid4 from "./src/screens/counselid4";
import counselid5 from "./src/screens/counselid5";
import counselid6 from "./src/screens/counselid6";
import counselid7 from "./src/screens/counselid7";
import counselid8 from "./src/screens/counselid8";
import counselid9 from "./src/screens/counselid9";
import counselid10 from "./src/screens/counselid10";
import counselinfo from "./src/screens/counselinfo";
import counselinfo2 from "./src/screens/counselinfo2";
import counselmean from "./src/screens/counselmean";
import counselmean2 from "./src/screens/counselmean2";
import counselmean3 from "./src/screens/counselmean3";
import counselmean4 from "./src/screens/counselmean4";
import counselmean5 from "./src/screens/counselmean5";
import counselmean6 from "./src/screens/counselmean6";
import counselmean7 from "./src/screens/counselmean7";

import counselfinish from "./src/screens/counselfinish";
import counselenter from "./src/screens/counselenter";
import counselenter2 from "./src/screens/counselenter2";

import counselannounce from "./src/screens/counselannounce";

import counselwrite from "./src/screens/counselwrite";
import counselwrite2 from "./src/screens/counselwrite2";
import counselwrite3 from "./src/screens/counselwrite3";


import counseltalk from "./src/screens/counseltalk";
import counseltalk2 from "./src/screens/counseltalk2";
import counseltalk3 from "./src/screens/counseltalk3";
import counseltalk4 from "./src/screens/counseltalk4";
import counseltalk5 from "./src/screens/counseltalk5";
import counseltalk6 from "./src/screens/counseltalk6";
import counseltalk7 from "./src/screens/counseltalk7";


import counseltalkhana from "./src/screens/counseltalkhana";
import counseltalkhana2 from "./src/screens/counseltalkhana2";
import counseltalkhana3 from "./src/screens/counseltalkhana3";
import counseltalkhana4 from "./src/screens/counseltalkhana4";
import counseltalkhana5 from "./src/screens/counseltalkhana5";
import counseltalkhana6 from "./src/screens/counseltalkhana6";
import counseltalkhana7 from "./src/screens/counseltalkhana7";
import counseltalkhana8 from "./src/screens/counseltalkhana8";
import counseltalkhana9 from "./src/screens/counseltalkhana9";
import counseltalkhana10 from "./src/screens/counseltalkhana10";
import counseltalkhana11 from "./src/screens/counseltalkhana11";
import counseltalkhana12 from "./src/screens/counseltalkhana12";
import counseltalkhana13 from "./src/screens/counseltalkhana13";
import counseltalkhana14 from "./src/screens/counseltalkhana14";
import counseltalkhana15 from "./src/screens/counseltalkhana15";

import counseltalkdul from "./src/screens/counseltalkdul";
import counseltalkdul2 from "./src/screens/counseltalkdul2";
import counseltalkdul3 from "./src/screens/counseltalkdul3";

import counseltalkset from "./src/screens/counseltalkset";
import counseltalkset2 from "./src/screens/counseltalkset2";
import counseltalkset3 from "./src/screens/counseltalkset3";


import counseltalknet from "./src/screens/counseltalknet";
import counseltalknet2 from "./src/screens/counseltalknet2";
import counseltalknet3 from "./src/screens/counseltalknet3";


import counseltalkdaseot from "./src/screens/counseltalkdaseot";
import counseltalkdaseot2 from "./src/screens/counseltalkdaseot2";
import counseltalkdaseot3 from "./src/screens/counseltalkdaseot3";


import counseltalkyeoseot from "./src/screens/counseltalkyeoseot";
import counseltalkyeoseot2 from "./src/screens/counseltalkyeoseot2";
import counseltalkyeoseot3 from "./src/screens/counseltalkyeoseot3";


import counselnormal from "./src/screens/counselnormal";
import counselready from "./src/screens/counselready";
import counselready2 from "./src/screens/counselready2";
import counselready3 from "./src/screens/counselready3";
import counselready4 from "./src/screens/counselready4";

import counselintro from "./src/screens/counselintro";
import counselintro2 from "./src/screens/counselintro2";

import counselcheck from "./src/screens/counselcheck";
import counselcheck2 from "./src/screens/counselcheck2";
import counselcheck3 from "./src/screens/counselcheck3";

import counseltype from "./src/screens/counseltype"; 
// import counselalgo from "./src/screens/counselalgo";
// import counselalgoyes from "./src/screens/counselalgoyes";
// import counselalgono from "./src/screens/counselalgono";
// import counselalgono1 from "./src/screens/counselalgono1";
// import counselalgono2 from "./src/screens/counselalgono2";
// import counselalgono3 from "./src/screens/counselalgono3";
// import counselalgono4 from "./src/screens/counselalgono4";
// import counselalgono5 from "./src/screens/counselalgono5";
import eduhome from "./src/screens/eduhome";
import eduinfo from "./src/screens/eduinfo";
//import eduquiz from "./src/screens/eduquiz";
import eduvideo from "./src/screens/eduvideo";

import manual1 from "./src/screens/manual1";
import manual2 from "./src/screens/manual2";
import manual3 from "./src/screens/manual3";
import manual4 from "./src/screens/manual4";
import manual5 from "./src/screens/manual5";
import manual6 from "./src/screens/manual6";
import manual7 from "./src/screens/manual7";
//import manual8 from "./src/screens/manual8";

// import blessedmain from "./src/screens/blessedmain";
// import blessedmain2 from "./src/screens/blessedmain2";
// import blessed1 from "./src/screens/blessed1";
// import blessed2 from "./src/screens/blessed2";
// import blessed3 from "./src/screens/blessed3";
// import blessed4 from "./src/screens/blessed4";
// import blessed5 from "./src/screens/blessed5";
// import blessed6 from "./src/screens/blessed6";
// import blessed7 from "./src/screens/blessed7";
// import blessed8 from "./src/screens/blessed8";
// import blessed9 from "./src/screens/blessed9";
// import blessed10 from "./src/screens/blessed10";


/*
const HomeStack = createStackNavigator({ A });
const SettingsStack = createStackNavigator({ B });

HomeStack.navigationOptions = {
  tabBarLabel: 'Home!',
};

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings!',
};

export default createBottomTabNavigator({
  HomeStack,
  SettingsStack,
});

*/

const homeFlow = createStackNavigator(
  {
    Home: HomeScreen
  }, 
  {
    defaultNavigationOptions: {
      title: '홈',
      // headerStyle: {
      //   backgroundColor: "#4189D6"
      // }
      // headerStyle: {
      //   backgroundColor: "orange"
      // }
    }
  });

const counselFlow = createStackNavigator(
  {
    counseltype : counseltype,
    counselhome: counselhome,
    counselid : counselid,
    counselid2 : counselid2,
    counselid3 : counselid3,
    counselid4 : counselid4,
    counselid5 : counselid5,
    counselid6 : counselid6,
    counselid7 : counselid7,
    counselid8 : counselid8,
    counselid9 : counselid9,
    counselid10 : counselid10,
    counselmean : counselmean,
    counselmean2 : counselmean2,
    counselmean3 : counselmean3,
    counselmean4 : counselmean4,
    counselmean5 : counselmean5,
    counselmean6 : counselmean6,
    counselmean7 : counselmean7,
    counselfinish : counselfinish,
    counselenter : counselenter,
    counselenter2 : counselenter2,

    counselannounce : counselannounce,

    counselwrite : counselwrite,
    counselwrite2 : counselwrite2,
    counselwrite3 : counselwrite3,

    counseltalk : counseltalk,
    counseltalk2 : counseltalk2,
    counseltalk3 : counseltalk3,
    counseltalk4 : counseltalk4,
    counseltalk5 : counseltalk5,
    counseltalk6 : counseltalk6,
    counseltalk7 : counseltalk7,

    counseltalkhana : counseltalkhana,
    counseltalkhana2 : counseltalkhana2,
    counseltalkhana3 : counseltalkhana3,
    counseltalkhana4 : counseltalkhana4,
    counseltalkhana5 : counseltalkhana5,
    counseltalkhana6 : counseltalkhana6,
    counseltalkhana7 : counseltalkhana7,
    counseltalkhana8 : counseltalkhana8,
    counseltalkhana9 : counseltalkhana9,
    counseltalkhana10 : counseltalkhana10,
    counseltalkhana11 : counseltalkhana11,
    counseltalkhana12 : counseltalkhana12,
    counseltalkhana13 : counseltalkhana13,
    counseltalkhana14 : counseltalkhana14,
    counseltalkhana15 : counseltalkhana15,

    counseltalkdul : counseltalkdul,
    counseltalkdul2 : counseltalkdul2,
    counseltalkdul3 : counseltalkdul3,


    counseltalkset : counseltalkset,
    counseltalkset2 : counseltalkset2,
    counseltalkset3 : counseltalkset3,
    
    
    counseltalknet : counseltalknet,
    counseltalknet2 : counseltalknet2,
    counseltalknet3 : counseltalknet3,
    
    
    counseltalkdaseot : counseltalkdaseot,
    counseltalkdaseot2 : counseltalkdaseot2,
    counseltalkdaseot3 : counseltalkdaseot3,
    
    
    counseltalkyeoseot : counseltalkyeoseot,
    counseltalkyeoseot2 : counseltalkyeoseot2,
    counseltalkyeoseot3 : counseltalkyeoseot3,

    counselinfo : counselinfo,
    counselinfo2 : counselinfo2,
    counselnormal : counselnormal,
    counselready : counselready,
    counselready2 : counselready2,
    counselready3 : counselready3,
    counselready4 : counselready4,
    // counselalgo : counselalgo,
    // counselalgoyes : counselalgoyes,
    // counselalgono : counselalgono,
    // counselalgono1 : counselalgono1,
    // counselalgono2 : counselalgono2,
    // counselalgono3 : counselalgono3,
    // counselalgono4 : counselalgono4,
    // counselalgono5 : counselalgono5,
    manual1 : manual1,
    manual2 : manual2,
    manual3 : manual3,
    manual4 : manual4,
    manual5 : manual5,
    manual6 : manual6,
    manual7 : manual7,
    //manual8 : manual8
    counselintro : counselintro,
    counselintro2 : counselintro2,

    counselcheck : counselcheck,
    counselcheck2 : counselcheck2,
    counselcheck3 : counselcheck3
  },
  // {
  //   defaultNavigationOptions: {
  //     title: '상담매뉴얼'
  //   }
  // }
  );

const eduFlow = createStackNavigator(
  {
    eduhome : eduhome,
    eduinfo : eduinfo,
    //eduquiz : eduquiz,
    eduvideo : eduvideo
  },
  // {
  //   defaultNavigationOptions: {
  //     title: '교육매뉴얼'
  //   }
  // }
);

// const blessedFlow = createStackNavigator(
//   {
//     blessedmain: blessedmain,
//     blessedmain2: blessedmain2,
//     blessed1 : blessed1,
//     blessed2 : blessed2,
//     blessed3 : blessed3,
//     blessed4 : blessed4,
//     blessed5 : blessed5,
//     blessed6 : blessed6,
//     blessed7 : blessed7,
//     blessed8 : blessed8,
//     blessed9 : blessed9,
//     blessed10 : blessed10
//   }, 
  // {
  //   defaultNavigationOptions: {
  //     title: '간이검사'
  //   }
  // }
  //);

homeFlow.navigationOptions = {
  tabBarLabel: '홈',
  // tabBarOptions: {
  //   labelStyle: {
  //     fontSize: 15,
  //     // margin: 0,
  //     // padding: 0,
  //   }
  // },
  tabBarIcon: ({ tintColor }) => (
    <Ionicons name="home-outline" color={tintColor} size={25} />
  ) 
};

counselFlow.navigationOptions = {
  tabBarLabel: '상담매뉴얼',
  // tabBarOptions: {
  //   labelStyle: {
  //     fontSize: 15,
  //     // margin: 0,
  //     // padding: 0,
  //   }
  // },
  tabBarIcon: ({ tintColor }) => (
    <FontAwesome name="heart-o" color={tintColor} size={25} />
  )
};

eduFlow.navigationOptions = {
  tabBarLabel: '교육매뉴얼',
  // tabBarOptions: {
  //   labelStyle: {
  //     fontSize: 15,
  //     // margin: 0,
  //     // padding: 0,
  //   }
  // },
  tabBarIcon: ({ tintColor }) => (
    <SimpleLineIcons name="book-open" color={tintColor} size={25} />
    //<Fontisto name="heart-alt" color={tintColor} size={25} />
  )
};

// blessedFlow.navigationOptions = {
//   tabBarLabel: '간이검사',
  // tabBarOptions: {
  //   labelStyle: {
  //     fontSize: 15,
  //     // margin: 0,
  //     // padding: 0,
  //   }
  // },
//   tabBarIcon: ({ tintColor }) => (
//     <Feather name="check-square" color={tintColor} size={25} />
//   )
// }

// const navigator = createSwitchNavigator({ 
//     mainFlow: createBottomTabNavigator({
//       homeFlow,
//       counselFlow,
//       eduFlow,
//       blessedFlow
//   })
// }); 

const navigator = createBottomTabNavigator(
  {
    homeFlow,
    counselFlow,
    eduFlow,
    //blessedFlow
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 15,
      },
      // style:{
      //   backgroundColor: "orange"
      // }
    }
  }); 


const App = createAppContainer(navigator);

// export default () => {
//   return (
//       <App />
//   );
// };

export default App;


