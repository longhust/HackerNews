import React from 'react'
import { WebView, StyleSheet, ActivityIndicator,View,Text } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

class News extends React.Component {
  render() {
    return (
        <WebView
          source={{ uri: this.props.item.url }}
          style={styles.webview}
          onLoadStart={() => <ActivityIndicator
            animating={true}
            style={[styles.centering, { height:80 }]}
            size="large"
          />}
        />
    );
  }
}
const styles = StyleSheet.create({
  containers:{
    flex:1
  },
  titel:{
    flex:1,
  },
  webview:{
    flex:5,
    paddingTop:5
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
})
export default News;
