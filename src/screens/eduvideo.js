import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-navigation';
//import Spacer from '../components/Spacer';


class eduvideo extends Component {
  // return ( 
    // <SafeAreaView style={styles.viewstyle}> 
    //   <Spacer />   
    //   <View style={{height: "50%"}}>
    //       <WebView 
    //         ref={this.webViewRef}
    //         allowsFullscreenVideo
    //         useWebKit
    //         onLoad={this.webViewLoaded}
    //         allowsInlineMediaPlayback
    //         mediaPlaybackRequiresUserAction
    //         javaScriptEnabled
    //         domStorageEnabled
    //         scrollEnabled={false}
    //         source={{uri:'https://www.youtube.com/embed/fgGg5D66t1w'}}
    //       />
    //     </View>
    // </SafeAreaView>
  // );
  render(){
    return (
      <View style = {styles.viewstyle}>
        <WebView 
          ref={this.webViewRef}
          allowsFullscreenVideo
          useWebKit
          onLoad={this.webViewLoaded}
          allowsInlineMediaPlayback
          mediaPlaybackRequiresUserAction
          javaScriptEnabled
          domStorageEnabled
          scrollEnabled={false}
          source={{uri:'https://www.youtube.com/embed/fgGg5D66t1w'}}
          style={styles.videostyle}
        />
        <View style={{flex:2}}>
          <Text>dd</Text>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  viewstyle: {
    flex :1,
    borderWidth:1,
    borderColor: 'red'
  },
  videostyle:{
    flex : 1
  }
});

export default eduvideo;