import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import { Text } from 'react-native'


import NewsList from './NewsList'
import News from './News'
import Comments from './Comments'

const RouterWithRedux = connect()(Router);
class RouterComponent extends Component {
  render() {
    return (
      <RouterWithRedux>
        <Scene
          hideNavBar='true'
          key="list"
          component={NewsList}
        // title='Hacker News'
        //navigationBarStyle={style.navigationBarStyle}
        />
        <Scene
          key="news"
          component={News}
        // title={this.props.title}
        //navigationBarStyle={style.navigationBarStyle}
        />
        <Scene
          key="comments"
          component={Comments}
        // title={this.props.title}
        //navigationBarStyle={style.navigationBarStyle}
        />
      </RouterWithRedux>
    );
  }
}

const style = {
  navigationBarStyle: {
    backgroundColor: '#FF6B00'
  }
}
export default RouterComponent;
