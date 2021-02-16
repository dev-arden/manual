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
import counselid from "./src/screens/counselid";
import counselid1 from "./src/screens/counselid1";
import counselid2 from "./src/screens/counselid2";
import counselid3 from "./src/screens/counselid3";
import counselid4 from "./src/screens/counselid4";
import counselid5 from "./src/screens/counselid5";
import counselid55 from "./src/screens/counselid55";
import counselid6 from "./src/screens/counselid6";
import counselid7 from "./src/screens/counselid7";
import counselid8 from "./src/screens/counselid8";
import counselid9 from "./src/screens/counselid9";
import counselid10 from "./src/screens/counselid10";

import counselinfo from "./src/screens/counselinfo";
import counselinfo1 from "./src/screens/counselinfo1";
import counselinfo2 from "./src/screens/counselinfo2";

import counselfinish from "./src/screens/counselfinish";
import counselfinish1 from "./src/screens/counselfinish1";
import counselenter from "./src/screens/counselenter";
import counselenter1 from "./src/screens/counselenter1";
import counselenter2 from "./src/screens/counselenter2";

import counselannounce from "./src/screens/counselannounce";
import counselannounce1 from "./src/screens/counselannounce1";

import counselwrite from "./src/screens/counselwrite";
import counselwrite1 from "./src/screens/counselwrite1";
import counselwrite2 from "./src/screens/counselwrite2";
import counselwrite3 from "./src/screens/counselwrite3";
import counselwrite12 from "./src/screens/counselwrite12";
import counselwrite23 from "./src/screens/counselwrite23";
import counselwrite4 from "./src/screens/counselwrite4";


import counseltalk from "./src/screens/counseltalk";
import counseltalk1 from "./src/screens/counseltalk1";
import counseltalk2 from "./src/screens/counseltalk2";
import counseltalk3 from "./src/screens/counseltalk3";
import counseltalk34 from "./src/screens/counseltalk34";
import counseltalk4 from "./src/screens/counseltalk4";
import counseltalk5 from "./src/screens/counseltalk5";
import counseltalk6 from "./src/screens/counseltalk6";
import counseltalk7 from "./src/screens/counseltalk7";


import counseltalkhana from "./src/screens/counseltalkhana";
import counseltalkhana1 from "./src/screens/counseltalkhana1";
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

import counseltalkdul from "./src/screens/counseltalkdul";
import counseltalkdul1 from "./src/screens/counseltalkdul1";
import counseltalkdul2 from "./src/screens/counseltalkdul2";
import counseltalkdul3 from "./src/screens/counseltalkdul3";

import counseltalkset from "./src/screens/counseltalkset";
import counseltalkset1 from "./src/screens/counseltalkset1";
import counseltalkset2 from "./src/screens/counseltalkset2";
import counseltalkset3 from "./src/screens/counseltalkset3";


import counseltalknet from "./src/screens/counseltalknet";
import counseltalknet1 from "./src/screens/counseltalknet1";
import counseltalknet2 from "./src/screens/counseltalknet2";
import counseltalknet3 from "./src/screens/counseltalknet3";

import counseltalkdaseot from "./src/screens/counseltalkdaseot";
import counseltalkdaseot1 from "./src/screens/counseltalkdaseot1";
import counseltalkdaseot2 from "./src/screens/counseltalkdaseot2";

import counseltalkyeoseot from "./src/screens/counseltalkyeoseot";
import counseltalkyeoseot1 from "./src/screens/counseltalkyeoseot1";
import counseltalkyeoseot2 from "./src/screens/counseltalkyeoseot2";

import counselready from "./src/screens/counselready";
import counselready1 from "./src/screens/counselready1";
import counselready2 from "./src/screens/counselready2";
import counselready3 from "./src/screens/counselready3";
import counselready4 from "./src/screens/counselready4";
import counselready5 from "./src/screens/counselready5";

import counselintro from "./src/screens/counselintro";
import counselintro1 from "./src/screens/counselintro1";
import counselintro2 from "./src/screens/counselintro2";
import counselintro3 from "./src/screens/counselintro3";

import counselcheck from "./src/screens/counselcheck";
import counselcheck1 from "./src/screens/counselcheck1";

import counseltype from "./src/screens/counseltype"; 

import manual1 from "./src/screens/manual1";
import manual2 from "./src/screens/manual2";
import manual3 from "./src/screens/manual3";
import manual4 from "./src/screens/manual4";
import manual5 from "./src/screens/manual5";
import manual6 from "./src/screens/manual6";
import manual7 from "./src/screens/manual7";

import blindmanual from "./src/screens/blind/blindmanual";

import blindready from "./src/screens/blind/blindready";
import blindready1 from "./src/screens/blind/blindready1";
import blindready2 from "./src/screens/blind/blindready2";
import blindready3 from "./src/screens/blind/blindready3";
import blindready4 from "./src/screens/blind/blindready4";
import blindready5 from "./src/screens/blind/blindready5";

import blindinfo from "./src/screens/blind/blindinfo";
import blindinfo1 from "./src/screens/blind/blindinfo1";
import blindinfo2 from "./src/screens/blind/blindinfo2";

import blindintro from "./src/screens/blind/blindintro";
import blindintro1 from "./src/screens/blind/blindintro1";
import blindintro2 from "./src/screens/blind/blindintro2";
import blindintro3 from "./src/screens/blind/blindintro3";

import blindcheck from "./src/screens/blind/blindcheck";
import blindcheck1 from "./src/screens/blind/blindcheck1";

import blindid from "./src/screens/blind/blindid";
import blindid1 from "./src/screens/blind/blindid1";
import blindid2 from "./src/screens/blind/blindid2";
import blindid3 from "./src/screens/blind/blindid3";
import blindid4 from "./src/screens/blind/blindid4";
import blindid5 from "./src/screens/blind/blindid5";
import blindid55 from "./src/screens/blind/blindid55";
import blindid6 from "./src/screens/blind/blindid6";
import blindid7 from "./src/screens/blind/blindid7";
import blindid8 from "./src/screens/blind/blindid8";
import blindid9 from "./src/screens/blind/blindid9";
import blindid10 from "./src/screens/blind/blindid10";

import blindtalk from "./src/screens/blind/blindtalk";
import blindtalk1 from "./src/screens/blind/blindtalk1";
import blindtalk2 from "./src/screens/blind/blindtalk2";
import blindtalk3 from "./src/screens/blind/blindtalk3";
import blindtalk34 from "./src/screens/blind/blindtalk34";
import blindtalk4 from "./src/screens/blind/blindtalk4";
import blindtalk5 from "./src/screens/blind/blindtalk5";
import blindtalk6 from "./src/screens/blind/blindtalk6";
import blindtalk7 from "./src/screens/blind/blindtalk7";

import blindtalkhana from "./src/screens/blind/blindtalkhana";
import blindtalkhana1 from "./src/screens/blind/blindtalkhana1";
import blindtalkhana2 from "./src/screens/blind/blindtalkhana2";
import blindtalkhana3 from "./src/screens/blind/blindtalkhana3";
import blindtalkhana4 from "./src/screens/blind/blindtalkhana4";
import blindtalkhana5 from "./src/screens/blind/blindtalkhana5";
import blindtalkhana6 from "./src/screens/blind/blindtalkhana6";
import blindtalkhana7 from "./src/screens/blind/blindtalkhana7";
import blindtalkhana8 from "./src/screens/blind/blindtalkhana8";
import blindtalkhana9 from "./src/screens/blind/blindtalkhana9";
import blindtalkhana10 from "./src/screens/blind/blindtalkhana10";
import blindtalkhana11 from "./src/screens/blind/blindtalkhana11";

import blindtalkdul from "./src/screens/blind/blindtalkdul";
import blindtalkdul1 from "./src/screens/blind/blindtalkdul1";
import blindtalkdul2 from "./src/screens/blind/blindtalkdul2";
import blindtalkdul3 from "./src/screens/blind/blindtalkdul3";

import blindtalkset from "./src/screens/blind/blindtalkset";
import blindtalkset1 from "./src/screens/blind/blindtalkset1";
import blindtalkset2 from "./src/screens/blind/blindtalkset2";
import blindtalkset3 from "./src/screens/blind/blindtalkset3";

import blindtalknet from "./src/screens/blind/blindtalknet";
import blindtalknet1 from "./src/screens/blind/blindtalknet1";
import blindtalknet2 from "./src/screens/blind/blindtalknet2";
import blindtalknet3 from "./src/screens/blind/blindtalknet3";

import blindtalkdaseot from "./src/screens/blind/blindtalkdaseot";
import blindtalkdaseot1 from "./src/screens/blind/blindtalkdaseot1";
import blindtalkdaseot2 from "./src/screens/blind/blindtalkdaseot2";

import blindtalkyeoseot from "./src/screens/blind/blindtalkyeoseot";
import blindtalkyeoseot1 from "./src/screens/blind/blindtalkyeoseot1";
import blindtalkyeoseot2 from "./src/screens/blind/blindtalkyeoseot2";

import blindwrite from "./src/screens/blind/blindwrite";
import blindwrite1 from "./src/screens/blind/blindwrite1";
import blindwrite2 from "./src/screens/blind/blindwrite2";
import blindwrite3 from "./src/screens/blind/blindwrite3";
import blindwrite12 from "./src/screens/blind/blindwrite12";
import blindwrite23 from "./src/screens/blind/blindwrite23";
import blindwrite4 from "./src/screens/blind/blindwrite4";

import blindfinish from "./src/screens/blind/blindfinish";
import blindfinish1 from "./src/screens/blind/blindfinish1";

import blindenter from "./src/screens/blind/blindenter";
import blindenter1 from "./src/screens/blind/blindenter1";
import blindenter2 from "./src/screens/blind/blindenter2";

import blindannounce from "./src/screens/blind/blindannounce";
import blindannounce1 from "./src/screens/blind/blindannounce1";

import blind from "./src/screens/blind/blind";
import blind1 from "./src/screens/blind/blind1";
import blind2 from "./src/screens/blind/blind2";
import blind3 from "./src/screens/blind/blind3";

import deaf1 from "./src/screens/deaf/deaf1";
import deaf2 from "./src/screens/deaf/deaf2";
import deaf3 from "./src/screens/deaf/deaf3";
import deaf4 from "./src/screens/deaf/deaf4";
//
import deafmanual from "./src/screens/deaf/deafmanual.js";

import deafready from "./src/screens/deaf/deafready";
import deafready1 from "./src/screens/deaf/deafready1";
import deafready2 from "./src/screens/deaf/deafready2";
import deafready3 from "./src/screens/deaf/deafready3";
import deafready4 from "./src/screens/deaf/deafready4";
import deafready5 from "./src/screens/deaf/deafready5";

import deafinfo from "./src/screens/deaf/deafinfo";
import deafinfo1 from "./src/screens/deaf/deafinfo1";
import deafinfo2 from "./src/screens/deaf/deafinfo2";

import deafintro from "./src/screens/deaf/deafintro";
import deafintro1 from "./src/screens/deaf/deafintro1";
import deafintro2 from "./src/screens/deaf/deafintro2";
import deafintro3 from "./src/screens/deaf/deafintro3";

import deafcheck from "./src/screens/deaf/deafcheck";
import deafcheck1 from "./src/screens/deaf/deafcheck1";

import deafid from "./src/screens/deaf/deafid";
import deafid1 from "./src/screens/deaf/deafid1";
import deafid2 from "./src/screens/deaf/deafid2";
import deafid3 from "./src/screens/deaf/deafid3";
import deafid4 from "./src/screens/deaf/deafid4";
import deafid5 from "./src/screens/deaf/deafid5";
import deafid55 from "./src/screens/deaf/deafid55";
import deafid6 from "./src/screens/deaf/deafid6";
import deafid7 from "./src/screens/deaf/deafid7";
import deafid8 from "./src/screens/deaf/deafid8";
import deafid9 from "./src/screens/deaf/deafid9";
import deafid10 from "./src/screens/deaf/deafid10";

import deaftalk from "./src/screens/deaf/deaftalk";
import deaftalk1 from "./src/screens/deaf/deaftalk1";
import deaftalk2 from "./src/screens/deaf/deaftalk2";
import deaftalk3 from "./src/screens/deaf/deaftalk3";
import deaftalk34 from "./src/screens/deaf/deaftalk34";
import deaftalk4 from "./src/screens/deaf/deaftalk4";
import deaftalk5 from "./src/screens/deaf/deaftalk5";
import deaftalk6 from "./src/screens/deaf/deaftalk6";
import deaftalk7 from "./src/screens/deaf/deaftalk7";

import deaftalkhana from "./src/screens/deaf/deaftalkhana";
import deaftalkhana1 from "./src/screens/deaf/deaftalkhana1";
import deaftalkhana2 from "./src/screens/deaf/deaftalkhana2";
import deaftalkhana3 from "./src/screens/deaf/deaftalkhana3";
import deaftalkhana4 from "./src/screens/deaf/deaftalkhana4";
import deaftalkhana5 from "./src/screens/deaf/deaftalkhana5";
import deaftalkhana6 from "./src/screens/deaf/deaftalkhana6";
import deaftalkhana7 from "./src/screens/deaf/deaftalkhana7";
import deaftalkhana8 from "./src/screens/deaf/deaftalkhana8";
import deaftalkhana9 from "./src/screens/deaf/deaftalkhana9";
import deaftalkhana10 from "./src/screens/deaf/deaftalkhana10";
import deaftalkhana11 from "./src/screens/deaf/deaftalkhana11";

import deaftalkdul from "./src/screens/deaf/deaftalkdul";
import deaftalkdul1 from "./src/screens/deaf/deaftalkdul1";
import deaftalkdul2 from "./src/screens/deaf/deaftalkdul2";
import deaftalkdul3 from "./src/screens/deaf/deaftalkdul3";

import deaftalkset from "./src/screens/deaf/deaftalkset";
import deaftalkset1 from "./src/screens/deaf/deaftalkset1";
import deaftalkset2 from "./src/screens/deaf/deaftalkset2";
import deaftalkset3 from "./src/screens/deaf/deaftalkset3";

import deaftalknet from "./src/screens/deaf/deaftalknet";
import deaftalknet1 from "./src/screens/deaf/deaftalknet1";
import deaftalknet2 from "./src/screens/deaf/deaftalknet2";
import deaftalknet3 from "./src/screens/deaf/deaftalknet3";

import deaftalkdaseot from "./src/screens/deaf/deaftalkdaseot";
import deaftalkdaseot1 from "./src/screens/deaf/deaftalkdaseot1";
import deaftalkdaseot2 from "./src/screens/deaf/deaftalkdaseot2";

import deaftalkyeoseot from "./src/screens/deaf/deaftalkyeoseot";
import deaftalkyeoseot1 from "./src/screens/deaf/deaftalkyeoseot1";
import deaftalkyeoseot2 from "./src/screens/deaf/deaftalkyeoseot2";

import deafwrite from "./src/screens/deaf/deafwrite";
import deafwrite1 from "./src/screens/deaf/deafwrite1";
import deafwrite2 from "./src/screens/deaf/deafwrite2";
import deafwrite3 from "./src/screens/deaf/deafwrite3";
import deafwrite12 from "./src/screens/deaf/deafwrite12";
import deafwrite23 from "./src/screens/deaf/deafwrite23";
import deafwrite4 from "./src/screens/deaf/deafwrite4";

import deaffinish from "./src/screens/deaf/deaffinish";
import deaffinish1 from "./src/screens/deaf/deaffinish1";

import deafenter from "./src/screens/deaf/deafenter";
import deafenter1 from "./src/screens/deaf/deafenter1";
import deafenter2 from "./src/screens/deaf/deafenter2";

import deafannounce from "./src/screens/deaf/deafannounce";
import deafannounce1 from "./src/screens/deaf/deafannounce1";


import disable1 from "./src/screens/disable/disable1";
import disable2 from "./src/screens/disable/disable2";
//
import disablemanual from "./src/screens/disable/disablemanual.js";

import disableready from "./src/screens/disable/disableready";
import disableready1 from "./src/screens/disable/disableready1";
import disableready2 from "./src/screens/disable/disableready2";
import disableready3 from "./src/screens/disable/disableready3";
import disableready4 from "./src/screens/disable/disableready4";
import disableready5 from "./src/screens/disable/disableready5";

import disableinfo from "./src/screens/disable/disableinfo";
import disableinfo1 from "./src/screens/disable/disableinfo1";
import disableinfo2 from "./src/screens/disable/disableinfo2";

import disableintro from "./src/screens/disable/disableintro";
import disableintro1 from "./src/screens/disable/disableintro1";
import disableintro2 from "./src/screens/disable/disableintro2";
import disableintro3 from "./src/screens/disable/disableintro3";

import disablecheck from "./src/screens/disable/disablecheck";
import disablecheck1 from "./src/screens/disable/disablecheck1";

import disableid from "./src/screens/disable/disableid";
import disableid1 from "./src/screens/disable/disableid1";
import disableid2 from "./src/screens/disable/disableid2";
import disableid3 from "./src/screens/disable/disableid3";
import disableid4 from "./src/screens/disable/disableid4";
import disableid5 from "./src/screens/disable/disableid5";
import disableid55 from "./src/screens/disable/disableid55";
import disableid6 from "./src/screens/disable/disableid6";
import disableid7 from "./src/screens/disable/disableid7";
import disableid8 from "./src/screens/disable/disableid8";
import disableid9 from "./src/screens/disable/disableid9";
import disableid10 from "./src/screens/disable/disableid10";

import disabletalk from "./src/screens/disable/disabletalk";
import disabletalk1 from "./src/screens/disable/disabletalk1";
import disabletalk2 from "./src/screens/disable/disabletalk2";
import disabletalk3 from "./src/screens/disable/disabletalk3";
import disabletalk34 from "./src/screens/disable/disabletalk34";
import disabletalk4 from "./src/screens/disable/disabletalk4";
import disabletalk5 from "./src/screens/disable/disabletalk5";
import disabletalk6 from "./src/screens/disable/disabletalk6";
import disabletalk7 from "./src/screens/disable/disabletalk7";

import disabletalkhana from "./src/screens/disable/disabletalkhana";
import disabletalkhana1 from "./src/screens/disable/disabletalkhana1";
import disabletalkhana2 from "./src/screens/disable/disabletalkhana2";
import disabletalkhana3 from "./src/screens/disable/disabletalkhana3";
import disabletalkhana4 from "./src/screens/disable/disabletalkhana4";
import disabletalkhana5 from "./src/screens/disable/disabletalkhana5";
import disabletalkhana6 from "./src/screens/disable/disabletalkhana6";
import disabletalkhana7 from "./src/screens/disable/disabletalkhana7";
import disabletalkhana8 from "./src/screens/disable/disabletalkhana8";
import disabletalkhana9 from "./src/screens/disable/disabletalkhana9";
import disabletalkhana10 from "./src/screens/disable/disabletalkhana10";
import disabletalkhana11 from "./src/screens/disable/disabletalkhana11";

import disabletalkdul from "./src/screens/disable/disabletalkdul";
import disabletalkdul1 from "./src/screens/disable/disabletalkdul1";
import disabletalkdul2 from "./src/screens/disable/disabletalkdul2";
import disabletalkdul3 from "./src/screens/disable/disabletalkdul3";

import disabletalkset from "./src/screens/disable/disabletalkset";
import disabletalkset1 from "./src/screens/disable/disabletalkset1";
import disabletalkset2 from "./src/screens/disable/disabletalkset2";
import disabletalkset3 from "./src/screens/disable/disabletalkset3";

import disabletalknet from "./src/screens/disable/disabletalknet";
import disabletalknet1 from "./src/screens/disable/disabletalknet1";
import disabletalknet2 from "./src/screens/disable/disabletalknet2";
import disabletalknet3 from "./src/screens/disable/disabletalknet3";

import disabletalkdaseot from "./src/screens/disable/disabletalkdaseot";
import disabletalkdaseot1 from "./src/screens/disable/disabletalkdaseot1";
import disabletalkdaseot2 from "./src/screens/disable/disabletalkdaseot2";

import disabletalkyeoseot from "./src/screens/disable/disabletalkyeoseot";
import disabletalkyeoseot1 from "./src/screens/disable/disabletalkyeoseot1";
import disabletalkyeoseot2 from "./src/screens/disable/disabletalkyeoseot2";

import disablewrite from "./src/screens/disable/disablewrite";
import disablewrite1 from "./src/screens/disable/disablewrite1";
import disablewrite2 from "./src/screens/disable/disablewrite2";
import disablewrite3 from "./src/screens/disable/disablewrite3";
import disablewrite12 from "./src/screens/disable/disablewrite12";
import disablewrite23 from "./src/screens/disable/disablewrite23";
import disablewrite4 from "./src/screens/disable/disablewrite4";

import disablefinish from "./src/screens/disable/disablefinish";
import disablefinish1 from "./src/screens/disable/disablefinish1";

import disableenter from "./src/screens/disable/disableenter";
import disableenter1 from "./src/screens/disable/disableenter1";
import disableenter2 from "./src/screens/disable/disableenter2";

import disableannounce from "./src/screens/disable/disableannounce";
import disableannounce1 from "./src/screens/disable/disableannounce1";

//
import brain1 from "./src/screens/brain/brain1";
import brain2 from "./src/screens/brain/brain2";
import brain3 from "./src/screens/brain/brain3";
import brainmanual from "./src/screens/brain/brainmanual.js";

import brainready from "./src/screens/brain/brainready";
import brainready1 from "./src/screens/brain/brainready1";
import brainready2 from "./src/screens/brain/brainready2";
import brainready3 from "./src/screens/brain/brainready3";
import brainready4 from "./src/screens/brain/brainready4";
import brainready5 from "./src/screens/brain/brainready5";

import braininfo from "./src/screens/brain/braininfo";
import braininfo1 from "./src/screens/brain/braininfo1";
import braininfo2 from "./src/screens/brain/braininfo2";

import brainintro from "./src/screens/brain/brainintro";
import brainintro1 from "./src/screens/brain/brainintro1";
import brainintro2 from "./src/screens/brain/brainintro2";
import brainintro3 from "./src/screens/brain/brainintro3";

import braincheck from "./src/screens/brain/braincheck";
import braincheck1 from "./src/screens/brain/braincheck1";

import brainid from "./src/screens/brain/brainid";
import brainid1 from "./src/screens/brain/brainid1";
import brainid2 from "./src/screens/brain/brainid2";
import brainid3 from "./src/screens/brain/brainid3";
import brainid4 from "./src/screens/brain/brainid4";
import brainid5 from "./src/screens/brain/brainid5";
import brainid55 from "./src/screens/brain/brainid55";
import brainid6 from "./src/screens/brain/brainid6";
import brainid7 from "./src/screens/brain/brainid7";
import brainid8 from "./src/screens/brain/brainid8";
import brainid9 from "./src/screens/brain/brainid9";
import brainid10 from "./src/screens/brain/brainid10";

import braintalk from "./src/screens/brain/braintalk";
import braintalk1 from "./src/screens/brain/braintalk1";
import braintalk2 from "./src/screens/brain/braintalk2";
import braintalk3 from "./src/screens/brain/braintalk3";
import braintalk34 from "./src/screens/brain/braintalk34";
import braintalk4 from "./src/screens/brain/braintalk4";
import braintalk5 from "./src/screens/brain/braintalk5";
import braintalk6 from "./src/screens/brain/braintalk6";
import braintalk7 from "./src/screens/brain/braintalk7";

import braintalkhana from "./src/screens/brain/braintalkhana";
import braintalkhana1 from "./src/screens/brain/braintalkhana1";
import braintalkhana2 from "./src/screens/brain/braintalkhana2";
import braintalkhana3 from "./src/screens/brain/braintalkhana3";
import braintalkhana4 from "./src/screens/brain/braintalkhana4";
import braintalkhana5 from "./src/screens/brain/braintalkhana5";
import braintalkhana6 from "./src/screens/brain/braintalkhana6";
import braintalkhana7 from "./src/screens/brain/braintalkhana7";
import braintalkhana8 from "./src/screens/brain/braintalkhana8";
import braintalkhana9 from "./src/screens/brain/braintalkhana9";
import braintalkhana10 from "./src/screens/brain/braintalkhana10";
import braintalkhana11 from "./src/screens/brain/braintalkhana11";

import braintalkdul from "./src/screens/brain/braintalkdul";
import braintalkdul1 from "./src/screens/brain/braintalkdul1";
import braintalkdul2 from "./src/screens/brain/braintalkdul2";
import braintalkdul3 from "./src/screens/brain/braintalkdul3";

import braintalkset from "./src/screens/brain/braintalkset";
import braintalkset1 from "./src/screens/brain/braintalkset1";
import braintalkset2 from "./src/screens/brain/braintalkset2";
import braintalkset3 from "./src/screens/brain/braintalkset3";

import braintalknet from "./src/screens/brain/braintalknet";
import braintalknet1 from "./src/screens/brain/braintalknet1";
import braintalknet2 from "./src/screens/brain/braintalknet2";
import braintalknet3 from "./src/screens/brain/braintalknet3";

import braintalkdaseot from "./src/screens/brain/braintalkdaseot";
import braintalkdaseot1 from "./src/screens/brain/braintalkdaseot1";
import braintalkdaseot2 from "./src/screens/brain/braintalkdaseot2";

import braintalkyeoseot from "./src/screens/brain/braintalkyeoseot";
import braintalkyeoseot1 from "./src/screens/brain/braintalkyeoseot1";
import braintalkyeoseot2 from "./src/screens/brain/braintalkyeoseot2";

import brainwrite from "./src/screens/brain/brainwrite";
import brainwrite1 from "./src/screens/brain/brainwrite1";
import brainwrite2 from "./src/screens/brain/brainwrite2";
import brainwrite3 from "./src/screens/brain/brainwrite3";
import brainwrite12 from "./src/screens/brain/brainwrite12";
import brainwrite23 from "./src/screens/brain/brainwrite23";
import brainwrite4 from "./src/screens/brain/brainwrite4";

import brainfinish from "./src/screens/brain/brainfinish";
import brainfinish1 from "./src/screens/brain/brainfinish1";

import brainenter from "./src/screens/brain/brainenter";
import brainenter1 from "./src/screens/brain/brainenter1";
import brainenter2 from "./src/screens/brain/brainenter2";

import brainannounce from "./src/screens/brain/brainannounce";
import brainannounce1 from "./src/screens/brain/brainannounce1";

//
import lang1 from "./src/screens/lang/lang1";
import lang2 from "./src/screens/lang/lang2"
import langmanual from "./src/screens/lang/langmanual.js";

import langready from "./src/screens/lang/langready";
import langready1 from "./src/screens/lang/langready1";
import langready2 from "./src/screens/lang/langready2";
import langready3 from "./src/screens/lang/langready3";
import langready4 from "./src/screens/lang/langready4";
import langready5 from "./src/screens/lang/langready5";

import langinfo from "./src/screens/lang/langinfo";
import langinfo1 from "./src/screens/lang/langinfo1";
import langinfo2 from "./src/screens/lang/langinfo2";

import langintro from "./src/screens/lang/langintro";
import langintro1 from "./src/screens/lang/langintro1";
import langintro2 from "./src/screens/lang/langintro2";
import langintro3 from "./src/screens/lang/langintro3";

import langcheck from "./src/screens/lang/langcheck";
import langcheck1 from "./src/screens/lang/langcheck1";

import langid from "./src/screens/lang/langid";
import langid1 from "./src/screens/lang/langid1";
import langid2 from "./src/screens/lang/langid2";
import langid3 from "./src/screens/lang/langid3";
import langid4 from "./src/screens/lang/langid4";
import langid5 from "./src/screens/lang/langid5";
import langid55 from "./src/screens/lang/langid55";
import langid6 from "./src/screens/lang/langid6";
import langid7 from "./src/screens/lang/langid7";
import langid8 from "./src/screens/lang/langid8";
import langid9 from "./src/screens/lang/langid9";
import langid10 from "./src/screens/lang/langid10";

import langtalk from "./src/screens/lang/langtalk";
import langtalk1 from "./src/screens/lang/langtalk1";
import langtalk2 from "./src/screens/lang/langtalk2";
import langtalk3 from "./src/screens/lang/langtalk3";
import langtalk34 from "./src/screens/lang/langtalk34";
import langtalk4 from "./src/screens/lang/langtalk4";
import langtalk5 from "./src/screens/lang/langtalk5";
import langtalk6 from "./src/screens/lang/langtalk6";
import langtalk7 from "./src/screens/lang/langtalk7";

import langtalkhana from "./src/screens/lang/langtalkhana";
import langtalkhana1 from "./src/screens/lang/langtalkhana1";
import langtalkhana2 from "./src/screens/lang/langtalkhana2";
import langtalkhana3 from "./src/screens/lang/langtalkhana3";
import langtalkhana4 from "./src/screens/lang/langtalkhana4";
import langtalkhana5 from "./src/screens/lang/langtalkhana5";
import langtalkhana6 from "./src/screens/lang/langtalkhana6";
import langtalkhana7 from "./src/screens/lang/langtalkhana7";
import langtalkhana8 from "./src/screens/lang/langtalkhana8";
import langtalkhana9 from "./src/screens/lang/langtalkhana9";
import langtalkhana10 from "./src/screens/lang/langtalkhana10";
import langtalkhana11 from "./src/screens/lang/langtalkhana11";

import langtalkdul from "./src/screens/lang/langtalkdul";
import langtalkdul1 from "./src/screens/lang/langtalkdul1";
import langtalkdul2 from "./src/screens/lang/langtalkdul2";
import langtalkdul3 from "./src/screens/lang/langtalkdul3";

import langtalkset from "./src/screens/lang/langtalkset";
import langtalkset1 from "./src/screens/lang/langtalkset1";
import langtalkset2 from "./src/screens/lang/langtalkset2";
import langtalkset3 from "./src/screens/lang/langtalkset3";

import langtalknet from "./src/screens/lang/langtalknet";
import langtalknet1 from "./src/screens/lang/langtalknet1";
import langtalknet2 from "./src/screens/lang/langtalknet2";
import langtalknet3 from "./src/screens/lang/langtalknet3";

import langtalkdaseot from "./src/screens/lang/langtalkdaseot";
import langtalkdaseot1 from "./src/screens/lang/langtalkdaseot1";
import langtalkdaseot2 from "./src/screens/lang/langtalkdaseot2";

import langtalkyeoseot from "./src/screens/lang/langtalkyeoseot";
import langtalkyeoseot1 from "./src/screens/lang/langtalkyeoseot1";
import langtalkyeoseot2 from "./src/screens/lang/langtalkyeoseot2";

import langwrite from "./src/screens/lang/langwrite";
import langwrite1 from "./src/screens/lang/langwrite1";
import langwrite2 from "./src/screens/lang/langwrite2";
import langwrite3 from "./src/screens/lang/langwrite3";
import langwrite12 from "./src/screens/lang/langwrite12";
import langwrite23 from "./src/screens/lang/langwrite23";
import langwrite4 from "./src/screens/lang/langwrite4";

import langfinish from "./src/screens/lang/langfinish";
import langfinish1 from "./src/screens/lang/langfinish1";

import langenter from "./src/screens/lang/langenter";
import langenter1 from "./src/screens/lang/langenter1";
import langenter2 from "./src/screens/lang/langenter2";

import langannounce from "./src/screens/lang/langannounce";
import langannounce1 from "./src/screens/lang/langannounce1";


//

import foreign1 from "./src/screens/foreign/foreign1";
import foreign2 from "./src/screens/foreign/foreign2";
import foreignmanual from "./src/screens/foreign/foreignmanual.js";

import foreignready from "./src/screens/foreign/foreignready";
import foreignready1 from "./src/screens/foreign/foreignready1";
import foreignready2 from "./src/screens/foreign/foreignready2";
import foreignready3 from "./src/screens/foreign/foreignready3";
import foreignready4 from "./src/screens/foreign/foreignready4";
import foreignready5 from "./src/screens/foreign/foreignready5";

import foreigninfo from "./src/screens/foreign/foreigninfo";
import foreigninfo1 from "./src/screens/foreign/foreigninfo1";
import foreigninfo2 from "./src/screens/foreign/foreigninfo2";

import foreignintro from "./src/screens/foreign/foreignintro";
import foreignintro1 from "./src/screens/foreign/foreignintro1";
import foreignintro2 from "./src/screens/foreign/foreignintro2";
import foreignintro3 from "./src/screens/foreign/foreignintro3";

import foreigncheck from "./src/screens/foreign/foreigncheck";
import foreigncheck1 from "./src/screens/foreign/foreigncheck1";

import foreignid from "./src/screens/foreign/foreignid";
import foreignid1 from "./src/screens/foreign/foreignid1";
import foreignid2 from "./src/screens/foreign/foreignid2";
import foreignid3 from "./src/screens/foreign/foreignid3";
import foreignid4 from "./src/screens/foreign/foreignid4";
import foreignid5 from "./src/screens/foreign/foreignid5";
import foreignid55 from "./src/screens/foreign/foreignid55";
import foreignid6 from "./src/screens/foreign/foreignid6";
import foreignid7 from "./src/screens/foreign/foreignid7";
import foreignid8 from "./src/screens/foreign/foreignid8";
import foreignid9 from "./src/screens/foreign/foreignid9";
import foreignid10 from "./src/screens/foreign/foreignid10";

import foreigntalk from "./src/screens/foreign/foreigntalk";
import foreigntalk1 from "./src/screens/foreign/foreigntalk1";
import foreigntalk2 from "./src/screens/foreign/foreigntalk2";
import foreigntalk3 from "./src/screens/foreign/foreigntalk3";
import foreigntalk34 from "./src/screens/foreign/foreigntalk34";
import foreigntalk4 from "./src/screens/foreign/foreigntalk4";
import foreigntalk5 from "./src/screens/foreign/foreigntalk5";
import foreigntalk6 from "./src/screens/foreign/foreigntalk6";
import foreigntalk7 from "./src/screens/foreign/foreigntalk7";

import foreigntalkhana from "./src/screens/foreign/foreigntalkhana";
import foreigntalkhana1 from "./src/screens/foreign/foreigntalkhana1";
import foreigntalkhana2 from "./src/screens/foreign/foreigntalkhana2";
import foreigntalkhana3 from "./src/screens/foreign/foreigntalkhana3";
import foreigntalkhana4 from "./src/screens/foreign/foreigntalkhana4";
import foreigntalkhana5 from "./src/screens/foreign/foreigntalkhana5";
import foreigntalkhana6 from "./src/screens/foreign/foreigntalkhana6";
import foreigntalkhana7 from "./src/screens/foreign/foreigntalkhana7";
import foreigntalkhana8 from "./src/screens/foreign/foreigntalkhana8";
import foreigntalkhana9 from "./src/screens/foreign/foreigntalkhana9";
import foreigntalkhana10 from "./src/screens/foreign/foreigntalkhana10";
import foreigntalkhana11 from "./src/screens/foreign/foreigntalkhana11";

import foreigntalkdul from "./src/screens/foreign/foreigntalkdul";
import foreigntalkdul1 from "./src/screens/foreign/foreigntalkdul1";
import foreigntalkdul2 from "./src/screens/foreign/foreigntalkdul2";
import foreigntalkdul3 from "./src/screens/foreign/foreigntalkdul3";

import foreigntalkset from "./src/screens/foreign/foreigntalkset";
import foreigntalkset1 from "./src/screens/foreign/foreigntalkset1";
import foreigntalkset2 from "./src/screens/foreign/foreigntalkset2";
import foreigntalkset3 from "./src/screens/foreign/foreigntalkset3";

import foreigntalknet from "./src/screens/foreign/foreigntalknet";
import foreigntalknet1 from "./src/screens/foreign/foreigntalknet1";
import foreigntalknet2 from "./src/screens/foreign/foreigntalknet2";
import foreigntalknet3 from "./src/screens/foreign/foreigntalknet3";

import foreigntalkdaseot from "./src/screens/foreign/foreigntalkdaseot";
import foreigntalkdaseot1 from "./src/screens/foreign/foreigntalkdaseot1";
import foreigntalkdaseot2 from "./src/screens/foreign/foreigntalkdaseot2";

import foreigntalkyeoseot from "./src/screens/foreign/foreigntalkyeoseot";
import foreigntalkyeoseot1 from "./src/screens/foreign/foreigntalkyeoseot1";
import foreigntalkyeoseot2 from "./src/screens/foreign/foreigntalkyeoseot2";

import foreignwrite from "./src/screens/foreign/foreignwrite";
import foreignwrite1 from "./src/screens/foreign/foreignwrite1";
import foreignwrite2 from "./src/screens/foreign/foreignwrite2";
import foreignwrite3 from "./src/screens/foreign/foreignwrite3";
import foreignwrite12 from "./src/screens/foreign/foreignwrite12";
import foreignwrite23 from "./src/screens/foreign/foreignwrite23";
import foreignwrite4 from "./src/screens/foreign/foreignwrite4";

import foreignfinish from "./src/screens/foreign/foreignfinish";
import foreignfinish1 from "./src/screens/foreign/foreignfinish1";

import foreignenter from "./src/screens/foreign/foreignenter";
import foreignenter1 from "./src/screens/foreign/foreignenter1";
import foreignenter2 from "./src/screens/foreign/foreignenter2";

import foreignannounce from "./src/screens/foreign/foreignannounce";
import foreignannounce1 from "./src/screens/foreign/foreignannounce1";


//

import eduhome from "./src/screens/edu/eduhome";
import eduinfo from "./src/screens/edu/eduinfo";
import eduvideo from "./src/screens/edu/eduvideo";

import eduback1 from "./src/screens/edu/eduback1";
import edupurpose1 from "./src/screens/edu/edupurpose1";
import eduword1 from "./src/screens/edu/eduword1";
import edurule1 from "./src/screens/edu/edurule1";
import eduprocess1 from "./src/screens/edu/eduprocess1";
import eduprocess2 from "./src/screens/edu/eduprocess2";
import eduprocess3 from "./src/screens/edu/eduprocess3";

import edukind1 from "./src/screens/edu/edukind1";
import edukind2 from "./src/screens/edu/edukind2";
import edukind3 from "./src/screens/edu/edukind3";
import edukind4 from "./src/screens/edu/edukind4";
import edukind5 from "./src/screens/edu/edukind5";
import edukind6 from "./src/screens/edu/edukind6";
import edukind7 from "./src/screens/edu/edukind7";
import edukind8 from "./src/screens/edu/edukind8";
import edukind9 from "./src/screens/edu/edukind9";

import eduhos1 from "./src/screens/edu/eduhos1";
import eduhos2 from "./src/screens/edu/eduhos2";
import eduform from "./src/screens/edu/eduform";

import edusum1 from "./src/screens/edu/edusum1";
import edusum2 from "./src/screens/edu/edusum2";
import edusup1 from "./src/screens/edu/edusup1";
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
    counselid : counselid,
    counselid1 : counselid1,
    counselid2 : counselid2,
    counselid3 : counselid3,
    counselid4 : counselid4,
    counselid5 : counselid5,
    counselid55 : counselid55,
    counselid6 : counselid6,
    counselid7 : counselid7,
    counselid8 : counselid8,
    counselid9 : counselid9,
    counselid10 : counselid10,
    counselfinish : counselfinish,
    counselfinish1 : counselfinish1,
    counselenter : counselenter,
    counselenter1 : counselenter1,
    counselenter2 : counselenter2,

    counselannounce : counselannounce,
    counselannounce1 : counselannounce1,

    counselwrite : counselwrite,
    counselwrite1 : counselwrite1,
    counselwrite2 : counselwrite2,
    counselwrite3 : counselwrite3,
    counselwrite12 : counselwrite12,
    counselwrite23 : counselwrite23,
    counselwrite4 : counselwrite4,

    counseltalk : counseltalk,
    counseltalk1 : counseltalk1,
    counseltalk2 : counseltalk2,
    counseltalk3 : counseltalk3,
    counseltalk34 : counseltalk34,
    counseltalk4 : counseltalk4,
    counseltalk5 : counseltalk5,
    counseltalk6 : counseltalk6,
    counseltalk7 : counseltalk7,

    counseltalkhana : counseltalkhana,
    counseltalkhana1 : counseltalkhana1,
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

    counseltalkdul : counseltalkdul,
    counseltalkdul1 : counseltalkdul1,
    counseltalkdul2 : counseltalkdul2,
    counseltalkdul3 : counseltalkdul3,


    counseltalkset : counseltalkset,
    counseltalkset1 : counseltalkset1,
    counseltalkset2 : counseltalkset2,
    counseltalkset3 : counseltalkset3,
    
    
    counseltalknet : counseltalknet,
    counseltalknet1 : counseltalknet1,
    counseltalknet2 : counseltalknet2,
    counseltalknet3 : counseltalknet3,
    
    counseltalkdaseot : counseltalkdaseot,
    counseltalkdaseot1 : counseltalkdaseot1,
    counseltalkdaseot2 : counseltalkdaseot2,
    
    counseltalkyeoseot : counseltalkyeoseot,
    counseltalkyeoseot1 : counseltalkyeoseot1,
    counseltalkyeoseot2 : counseltalkyeoseot2,

    counselinfo : counselinfo,
    counselinfo1 : counselinfo1,
    counselinfo2 : counselinfo2,
    counselready : counselready,
    counselready1 : counselready1,
    counselready2 : counselready2,
    counselready3 : counselready3,
    counselready4 : counselready4,
    counselready5 : counselready5,
    manual1 : manual1,
    manual2 : manual2,
    manual3 : manual3,
    manual4 : manual4,
    manual5 : manual5,
    manual6 : manual6,
    manual7 : manual7,
    
    counselintro : counselintro,
    counselintro1 : counselintro1,
    counselintro2 : counselintro2,
    counselintro3 : counselintro3,

    counselcheck : counselcheck,
    counselcheck1 : counselcheck1,

    blindmanual : blindmanual,
    blindready : blindready,
    blindready1 : blindready1,
    blindready2 : blindready2,
    blindready3 : blindready3,
    blindready4 : blindready4,
    blindready5 : blindready5,

    blindinfo : blindinfo,
    blindinfo1 : blindinfo1,
    blindinfo2 : blindinfo2,

    blindintro : blindintro,
    blindintro1 : blindintro1,
    blindintro2 : blindintro2,
    blindintro3 : blindintro3,

    blindcheck : blindcheck,
    blindcheck1 : blindcheck1,

    blindid : blindid,
    blindid1 : blindid1,
    blindid2 : blindid2,
    blindid3 : blindid3,
    blindid4 : blindid4,
    blindid5 : blindid5,
    blindid55 : blindid55,
    blindid6 : blindid6,
    blindid7 : blindid7,
    blindid8 : blindid8,
    blindid9 : blindid9,
    blindid10 : blindid10,

    blindtalk : blindtalk,
    blindtalk1 : blindtalk1,
    blindtalk2 : blindtalk2,
    blindtalk3 : blindtalk3,
    blindtalk34 : blindtalk34,
    blindtalk4 : blindtalk4,
    blindtalk5 : blindtalk5,
    blindtalk6 : blindtalk6,
    blindtalk7 : blindtalk7,

    blindtalkhana : blindtalkhana,
    blindtalkhana1 : blindtalkhana1,
    blindtalkhana2 : blindtalkhana2,
    blindtalkhana3 : blindtalkhana3,
    blindtalkhana4 : blindtalkhana4,
    blindtalkhana5 : blindtalkhana5,
    blindtalkhana6 : blindtalkhana6,
    blindtalkhana7 : blindtalkhana7,
    blindtalkhana8 : blindtalkhana8,
    blindtalkhana9 : blindtalkhana9,
    blindtalkhana10 : blindtalkhana10,
    blindtalkhana11 : blindtalkhana11,

    blindtalkdul : blindtalkdul,
    blindtalkdul1 : blindtalkdul1,
    blindtalkdul2 : blindtalkdul2,
    blindtalkdul3 : blindtalkdul3,

    blindtalkset : blindtalkset,
    blindtalkset1 : blindtalkset1,
    blindtalkset2 : blindtalkset2,
    blindtalkset3 : blindtalkset3,

    blindtalknet : blindtalknet,
    blindtalknet1 : blindtalknet1,
    blindtalknet2 : blindtalknet2,
    blindtalknet3 : blindtalknet3,
    
    blindtalkdaseot : blindtalkdaseot,
    blindtalkdaseot1 : blindtalkdaseot1,
    blindtalkdaseot2 : blindtalkdaseot2,
    
    blindtalkyeoseot : blindtalkyeoseot,
    blindtalkyeoseot1 : blindtalkyeoseot1,
    blindtalkyeoseot2 : blindtalkyeoseot2,

    blindwrite : blindwrite,
    blindwrite1 : blindwrite1,
    blindwrite2 : blindwrite2,
    blindwrite3 : blindwrite3,
    blindwrite12 : blindwrite12,
    blindwrite23 : blindwrite23,
    blindwrite4 : blindwrite4,

    blindfinish : blindfinish,
    blindfinish1 : blindfinish1,

    blindenter : blindenter,
    blindenter1 : blindenter1,
    blindenter2 : blindenter2,

    blindannounce : blindannounce,
    blindannounce1 : blindannounce1,

    blind : blind,
    blind1 : blind1,
    blind2 : blind2,
    blind3 : blind3,

    deaf1 : deaf1,
    deaf2 : deaf2,
    deaf3 : deaf3,
    deaf4 : deaf4,
    //
    deafmanual : deafmanual,
    deafready : deafready,
    deafready1 : deafready1,
    deafready2 : deafready2,
    deafready3 : deafready3,
    deafready4 : deafready4,
    deafready5 : deafready5,

    deafinfo : deafinfo,
    deafinfo1 : deafinfo1,
    deafinfo2 : deafinfo2,

    deafintro : deafintro,
    deafintro1 : deafintro1,
    deafintro2 : deafintro2,
    deafintro3 : deafintro3,

    deafcheck : deafcheck,
    deafcheck1 : deafcheck1,

    deafid : deafid,
    deafid1 : deafid1,
    deafid2 : deafid2,
    deafid3 : deafid3,
    deafid4 : deafid4,
    deafid5 : deafid5,
    deafid55 : deafid55,
    deafid6 : deafid6,
    deafid7 : deafid7,
    deafid8 : deafid8,
    deafid9 : deafid9,
    deafid10 : deafid10,

    deaftalk : deaftalk,
    deaftalk1 : deaftalk1,
    deaftalk2 : deaftalk2,
    deaftalk3 : deaftalk3,
    deaftalk34 : deaftalk34,
    deaftalk4 : deaftalk4,
    deaftalk5 : deaftalk5,
    deaftalk6 : deaftalk6,
    deaftalk7 : deaftalk7,

    deaftalkhana : deaftalkhana,
    deaftalkhana1 : deaftalkhana1,
    deaftalkhana2 : deaftalkhana2,
    deaftalkhana3 : deaftalkhana3,
    deaftalkhana4 : deaftalkhana4,
    deaftalkhana5 : deaftalkhana5,
    deaftalkhana6 : deaftalkhana6,
    deaftalkhana7 : deaftalkhana7,
    deaftalkhana8 : deaftalkhana8,
    deaftalkhana9 : deaftalkhana9,
    deaftalkhana10 : deaftalkhana10,
    deaftalkhana11 : deaftalkhana11,

    deaftalkdul : deaftalkdul,
    deaftalkdul1 : deaftalkdul1,
    deaftalkdul2 : deaftalkdul2,
    deaftalkdul3 : deaftalkdul3,

    deaftalkset : deaftalkset,
    deaftalkset1 : deaftalkset1,
    deaftalkset2 : deaftalkset2,
    deaftalkset3 : deaftalkset3,

    deaftalknet : deaftalknet,
    deaftalknet1 : deaftalknet1,
    deaftalknet2 : deaftalknet2,
    deaftalknet3 : deaftalknet3,
    
    deaftalkdaseot : deaftalkdaseot,
    deaftalkdaseot1 : deaftalkdaseot1,
    deaftalkdaseot2 : deaftalkdaseot2,
    
    deaftalkyeoseot : deaftalkyeoseot,
    deaftalkyeoseot1 : deaftalkyeoseot1,
    deaftalkyeoseot2 : deaftalkyeoseot2,

    deafwrite : deafwrite,
    deafwrite1 : deafwrite1,
    deafwrite2 : deafwrite2,
    deafwrite3 : deafwrite3,
    deafwrite12 : deafwrite12,
    deafwrite23 : deafwrite23,
    deafwrite4 : deafwrite4,

    deaffinish : deaffinish,
    deaffinish1 : deaffinish1,

    deafenter : deafenter,
    deafenter1 : deafenter1,
    deafenter2 : deafenter2,

    deafannounce : deafannounce,
    deafannounce1 : deafannounce1,

    //
    disable1 : disable1,
    disable2 : disable2,
    disablemanual : disablemanual,
    disableready : disableready,
    disableready1 : disableready1,
    disableready2 : disableready2,
    disableready3 : disableready3,
    disableready4 : disableready4,
    disableready5 : disableready5,

    disableinfo : disableinfo,
    disableinfo1 : disableinfo1,
    disableinfo2 : disableinfo2,

    disableintro : disableintro,
    disableintro1 : disableintro1,
    disableintro2 : disableintro2,
    disableintro3 : disableintro3,

    disablecheck : disablecheck,
    disablecheck1 : disablecheck1,

    disableid : disableid,
    disableid1 : disableid1,
    disableid2 : disableid2,
    disableid3 : disableid3,
    disableid4 : disableid4,
    disableid5 : disableid5,
    disableid55 : disableid55,
    disableid6 : disableid6,
    disableid7 : disableid7,
    disableid8 : disableid8,
    disableid9 : disableid9,
    disableid10 : disableid10,

    disabletalk : disabletalk,
    disabletalk1 : disabletalk1,
    disabletalk2 : disabletalk2,
    disabletalk3 : disabletalk3,
    disabletalk34 : disabletalk34,
    disabletalk4 : disabletalk4,
    disabletalk5 : disabletalk5,
    disabletalk6 : disabletalk6,
    disabletalk7 : disabletalk7,

    disabletalkhana : disabletalkhana,
    disabletalkhana1 : disabletalkhana1,
    disabletalkhana2 : disabletalkhana2,
    disabletalkhana3 : disabletalkhana3,
    disabletalkhana4 : disabletalkhana4,
    disabletalkhana5 : disabletalkhana5,
    disabletalkhana6 : disabletalkhana6,
    disabletalkhana7 : disabletalkhana7,
    disabletalkhana8 : disabletalkhana8,
    disabletalkhana9 : disabletalkhana9,
    disabletalkhana10 : disabletalkhana10,
    disabletalkhana11 : disabletalkhana11,

    disabletalkdul : disabletalkdul,
    disabletalkdul1 : disabletalkdul1,
    disabletalkdul2 : disabletalkdul2,
    disabletalkdul3 : disabletalkdul3,

    disabletalkset : disabletalkset,
    disabletalkset1 : disabletalkset1,
    disabletalkset2 : disabletalkset2,
    disabletalkset3 : disabletalkset3,

    disabletalknet : disabletalknet,
    disabletalknet1 : disabletalknet1,
    disabletalknet2 : disabletalknet2,
    disabletalknet3 : disabletalknet3,
    
    disabletalkdaseot : disabletalkdaseot,
    disabletalkdaseot1 : disabletalkdaseot1,
    disabletalkdaseot2 : disabletalkdaseot2,
    
    disabletalkyeoseot : disabletalkyeoseot,
    disabletalkyeoseot1 : disabletalkyeoseot1,
    disabletalkyeoseot2 : disabletalkyeoseot2,

    disablewrite : disablewrite,
    disablewrite1 : disablewrite1,
    disablewrite2 : disablewrite2,
    disablewrite3 : disablewrite3,
    disablewrite12 : disablewrite12,
    disablewrite23 : disablewrite23,
    disablewrite4 : disablewrite4,

    disablefinish : disablefinish,
    disablefinish1 : disablefinish1,

    disableenter : disableenter,
    disableenter1 : disableenter1,
    disableenter2 : disableenter2,

    disableannounce : disableannounce,
    disableannounce1 : disableannounce1,

    //

    brain1 : brain1,
    brain2 : brain2,
    brain3 : brain3,
    brainmanual : brainmanual,
    brainready : brainready,
    brainready1 : brainready1,
    brainready2 : brainready2,
    brainready3 : brainready3,
    brainready4 : brainready4,
    brainready5 : brainready5,

    braininfo : braininfo,
    braininfo1 : braininfo1,
    braininfo2 : braininfo2,

    brainintro : brainintro,
    brainintro1 : brainintro1,
    brainintro2 : brainintro2,
    brainintro3 : brainintro3,

    braincheck : braincheck,
    braincheck1 : braincheck1,

    brainid : brainid,
    brainid1 : brainid1,
    brainid2 : brainid2,
    brainid3 : brainid3,
    brainid4 : brainid4,
    brainid5 : brainid5,
    brainid55 : brainid55,
    brainid6 : brainid6,
    brainid7 : brainid7,
    brainid8 : brainid8,
    brainid9 : brainid9,
    brainid10 : brainid10,

    braintalk : braintalk,
    braintalk1 : braintalk1,
    braintalk2 : braintalk2,
    braintalk3 : braintalk3,
    braintalk34 : braintalk34,
    braintalk4 : braintalk4,
    braintalk5 : braintalk5,
    braintalk6 : braintalk6,
    braintalk7 : braintalk7,

    braintalkhana : braintalkhana,
    braintalkhana1 : braintalkhana1,
    braintalkhana2 : braintalkhana2,
    braintalkhana3 : braintalkhana3,
    braintalkhana4 : braintalkhana4,
    braintalkhana5 : braintalkhana5,
    braintalkhana6 : braintalkhana6,
    braintalkhana7 : braintalkhana7,
    braintalkhana8 : braintalkhana8,
    braintalkhana9 : braintalkhana9,
    braintalkhana10 : braintalkhana10,
    braintalkhana11 : braintalkhana11,

    braintalkdul : braintalkdul,
    braintalkdul1 : braintalkdul1,
    braintalkdul2 : braintalkdul2,
    braintalkdul3 : braintalkdul3,

    braintalkset : braintalkset,
    braintalkset1 : braintalkset1,
    braintalkset2 : braintalkset2,
    braintalkset3 : braintalkset3,

    braintalknet : braintalknet,
    braintalknet1 : braintalknet1,
    braintalknet2 : braintalknet2,
    braintalknet3 : braintalknet3,
    
    braintalkdaseot : braintalkdaseot,
    braintalkdaseot1 : braintalkdaseot1,
    braintalkdaseot2 : braintalkdaseot2,
    
    braintalkyeoseot : braintalkyeoseot,
    braintalkyeoseot1 : braintalkyeoseot1,
    braintalkyeoseot2 : braintalkyeoseot2,

    brainwrite : brainwrite,
    brainwrite1 : brainwrite1,
    brainwrite2 : brainwrite2,
    brainwrite3 : brainwrite3,
    brainwrite12 : brainwrite12,
    brainwrite23 : brainwrite23,
    brainwrite4 : brainwrite4,

    brainfinish : brainfinish,
    brainfinish1 : brainfinish1,

    brainenter : brainenter,
    brainenter1 : brainenter1,
    brainenter2 : brainenter2,

    brainannounce : brainannounce,
    brainannounce1 : brainannounce1,

    //

    lang1 : lang1,
    lang2 : lang2,
    langmanual : langmanual,
    langready : langready,
    langready1 : langready1,
    langready2 : langready2,
    langready3 : langready3,
    langready4 : langready4,
    langready5 : langready5,

    langinfo : langinfo,
    langinfo1 : langinfo1,
    langinfo2 : langinfo2,

    langintro : langintro,
    langintro1 : langintro1,
    langintro2 : langintro2,
    langintro3 : langintro3,

    langcheck : langcheck,
    langcheck1 : langcheck1,

    langid : langid,
    langid1 : langid1,
    langid2 : langid2,
    langid3 : langid3,
    langid4 : langid4,
    langid5 : langid5,
    langid55 : langid55,
    langid6 : langid6,
    langid7 : langid7,
    langid8 : langid8,
    langid9 : langid9,
    langid10 : langid10,

    langtalk : langtalk,
    langtalk1 : langtalk1,
    langtalk2 : langtalk2,
    langtalk3 : langtalk3,
    langtalk34 : langtalk34,
    langtalk4 : langtalk4,
    langtalk5 : langtalk5,
    langtalk6 : langtalk6,
    langtalk7 : langtalk7,

    langtalkhana : langtalkhana,
    langtalkhana1 : langtalkhana1,
    langtalkhana2 : langtalkhana2,
    langtalkhana3 : langtalkhana3,
    langtalkhana4 : langtalkhana4,
    langtalkhana5 : langtalkhana5,
    langtalkhana6 : langtalkhana6,
    langtalkhana7 : langtalkhana7,
    langtalkhana8 : langtalkhana8,
    langtalkhana9 : langtalkhana9,
    langtalkhana10 : langtalkhana10,
    langtalkhana11 : langtalkhana11,

    langtalkdul : langtalkdul,
    langtalkdul1 : langtalkdul1,
    langtalkdul2 : langtalkdul2,
    langtalkdul3 : langtalkdul3,

    langtalkset : langtalkset,
    langtalkset1 : langtalkset1,
    langtalkset2 : langtalkset2,
    langtalkset3 : langtalkset3,

    langtalknet : langtalknet,
    langtalknet1 : langtalknet1,
    langtalknet2 : langtalknet2,
    langtalknet3 : langtalknet3,
    
    langtalkdaseot : langtalkdaseot,
    langtalkdaseot1 : langtalkdaseot1,
    langtalkdaseot2 : langtalkdaseot2,
    
    langtalkyeoseot : langtalkyeoseot,
    langtalkyeoseot1 : langtalkyeoseot1,
    langtalkyeoseot2 : langtalkyeoseot2,

    langwrite : langwrite,
    langwrite1 : langwrite1,
    langwrite2 : langwrite2,
    langwrite3 : langwrite3,
    langwrite12 : langwrite12,
    langwrite23 : langwrite23,
    langwrite4 : langwrite4,

    langfinish : langfinish,
    langfinish1 : langfinish1,

    langenter : langenter,
    langenter1 : langenter1,
    langenter2 : langenter2,

    langannounce : langannounce,
    langannounce1 : langannounce1,


    foreign1 : foreign1,
    foreign2 : foreign2,
    foreignmanual : foreignmanual,
    foreignready : foreignready,
    foreignready1 : foreignready1,
    foreignready2 : foreignready2,
    foreignready3 : foreignready3,
    foreignready4 : foreignready4,
    foreignready5 : foreignready5,

    foreigninfo : foreigninfo,
    foreigninfo1 : foreigninfo1,
    foreigninfo2 : foreigninfo2,

    foreignintro : foreignintro,
    foreignintro1 : foreignintro1,
    foreignintro2 : foreignintro2,
    foreignintro3 : foreignintro3,

    foreigncheck : foreigncheck,
    foreigncheck1 : foreigncheck1,

    foreignid : foreignid,
    foreignid1 : foreignid1,
    foreignid2 : foreignid2,
    foreignid3 : foreignid3,
    foreignid4 : foreignid4,
    foreignid5 : foreignid5,
    foreignid55 : foreignid55,
    foreignid6 : foreignid6,
    foreignid7 : foreignid7,
    foreignid8 : foreignid8,
    foreignid9 : foreignid9,
    foreignid10 : foreignid10,

    foreigntalk : foreigntalk,
    foreigntalk1 : foreigntalk1,
    foreigntalk2 : foreigntalk2,
    foreigntalk3 : foreigntalk3,
    foreigntalk34 : foreigntalk34,
    foreigntalk4 : foreigntalk4,
    foreigntalk5 : foreigntalk5,
    foreigntalk6 : foreigntalk6,
    foreigntalk7 : foreigntalk7,

    foreigntalkhana : foreigntalkhana,
    foreigntalkhana1 : foreigntalkhana1,
    foreigntalkhana2 : foreigntalkhana2,
    foreigntalkhana3 : foreigntalkhana3,
    foreigntalkhana4 : foreigntalkhana4,
    foreigntalkhana5 : foreigntalkhana5,
    foreigntalkhana6 : foreigntalkhana6,
    foreigntalkhana7 : foreigntalkhana7,
    foreigntalkhana8 : foreigntalkhana8,
    foreigntalkhana9 : foreigntalkhana9,
    foreigntalkhana10 : foreigntalkhana10,
    foreigntalkhana11 : foreigntalkhana11,

    foreigntalkdul : foreigntalkdul,
    foreigntalkdul1 : foreigntalkdul1,
    foreigntalkdul2 : foreigntalkdul2,
    foreigntalkdul3 : foreigntalkdul3,

    foreigntalkset : foreigntalkset,
    foreigntalkset1 : foreigntalkset1,
    foreigntalkset2 : foreigntalkset2,
    foreigntalkset3 : foreigntalkset3,

    foreigntalknet : foreigntalknet,
    foreigntalknet1 : foreigntalknet1,
    foreigntalknet2 : foreigntalknet2,
    foreigntalknet3 : foreigntalknet3,
    
    foreigntalkdaseot : foreigntalkdaseot,
    foreigntalkdaseot1 : foreigntalkdaseot1,
    foreigntalkdaseot2 : foreigntalkdaseot2,
    
    foreigntalkyeoseot : foreigntalkyeoseot,
    foreigntalkyeoseot1 : foreigntalkyeoseot1,
    foreigntalkyeoseot2 : foreigntalkyeoseot2,

    foreignwrite : foreignwrite,
    foreignwrite1 : foreignwrite1,
    foreignwrite2 : foreignwrite2,
    foreignwrite3 : foreignwrite3,
    foreignwrite12 : foreignwrite12,
    foreignwrite23 : foreignwrite23,
    foreignwrite4 : foreignwrite4,

    foreignfinish : foreignfinish,
    foreignfinish1 : foreignfinish1,

    foreignenter : foreignenter,
    foreignenter1 : foreignenter1,
    foreignenter2 : foreignenter2,

    foreignannounce : foreignannounce,
    foreignannounce1 : foreignannounce1,

  },
  {
    defaultNavigationOptions: {
      title: 'PART 2'
    }
  }
  );

const eduFlow = createStackNavigator(
  {
    eduhome : eduhome,
    eduinfo : eduinfo,
    eduvideo : eduvideo,

    eduback1 : eduback1,
    edupurpose1 : edupurpose1,
    eduword1 : eduword1,
    edurule1 : edurule1,
    eduprocess1 : eduprocess1,
    eduprocess2 : eduprocess2,
    eduprocess3 : eduprocess3,
    edukind1 : edukind1,
    edukind2 : edukind2,
    edukind3 : edukind3,
    edukind4 : edukind4,
    edukind5 : edukind5,
    edukind6 : edukind6,
    edukind7 : edukind7,
    edukind8 : edukind8,
    edukind9 : edukind9,

    eduhos1 : eduhos1,
    eduhos2 : eduhos2,
    eduform : eduform,
    edusum1 : edusum1,
    edusum2 : edusum2,
    edusup1 : edusup1
  },
  {
    defaultNavigationOptions: {
      title: 'PART 1'
    }
  }
);

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
  tabBarLabel: 'PART2',
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
  tabBarLabel: 'PART1',
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
    eduFlow,
    counselFlow,
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


