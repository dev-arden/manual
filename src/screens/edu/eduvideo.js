import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Buttonlist from '../../components/Buttonlist';
import Exwithhead from '../../components/Exwithhead';
import ExImage from '../../components/ExImage';


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
      <SafeAreaView style={{flex:1}}>
        <TitlewithoutImage 
          title="사전연명의료의향서 영상"
        />
        <ScrollView contentContainerStyle={{
          flexGrow: 1
        }}>
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
            source={{uri:'https://www.youtube.com/embed/OTReePAwVSY'}}
            style={styles.videostyle}
          />
        </ScrollView>
        <Buttonlist 
          title="완료"
          routename="eduhome"
        />
      </SafeAreaView>
    )
  }
};

const styles = StyleSheet.create({
  videostyle:{
    margin:10
  }
});

export default eduvideo;