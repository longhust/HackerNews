import React, {Component} from 'react';
import {
    View, Text, ListView, Platform,
    TouchableOpacity, StyleSheet, ActivityIndicator
} from 'react-native';
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'

import {loadData} from '../actions/LoadPost'
import {Item} from '../components/Item'

class NewsList extends Component{

  componentWillMount(){

    this.props.loadData('topstories');
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps){
    console.log('NewsList:componentWillReceiveProps', nextProps);
    this.createDataSource(nextProps);
  }

  createDataSource({data}){
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.dataSource = ds.cloneWithRows( data);
    console.log('create dataSource', data.length);
  }

  shouldComponentUpdate(nextProps, prevState) {
    if (nextProps.data.length % 10 == 0) {
      return true;
    }
    return false;
  }

  render(){
    render = (item) =>{
      let i = 1;
      console.log('number', i++);
      return <Item item ={item}/>
    }
    let i = 1;
    return (

      <View style={styles.container} >
        {
          this.props.error ?
            <View style={styles.error}>
              <Text>{this.props.error}</Text>
            </View> :
            null
        }
        {
          this.props.isFetching ?
          <View>
            <ActivityIndicator
              animating={true}
              style={styles.centering}
              size="large"
            />
            <Text style={styles.loading}> Loading.... </Text>
          </View>
            :
            null
        }
        {
          (this.props.data.length > 0) ?
          <ListView
            enableEmptySections
            dataSource = {this.dataSource}
            renderRow = {(item) => {
            console.log('number', i++);
            return <Item item ={item}/>}}
          />
          : null
        }

      </View>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center'
   // paddingTop:Platform.OS === 'ios' || Platform.Version > 19 ? 56 : 46
  },
  error: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center'
  },
  loading: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
  }
})

const mapStateToProps = (state) =>{
  //console.log('map', state.newsReducer)
  return {
          data:state.posts.data,
          isFetching: state.posts.isFetching,
          error: state.posts.error
        };
}
export default connect(mapStateToProps, {loadData}) (NewsList);
