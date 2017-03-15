import React from 'react'
import {
  TouchableOpacity,
  Text, View, StyleSheet
} from 'react-native'
import { Actions } from 'react-native-router-flux'

var timestamp = (timepost) => {
  const time = Date.now() / 1000 - timepost
  //console.log('Time:', time)
  if (Math.floor(time / 43200) != 0) {
    return Math.floor(time / 43200) + ' day'
  } else if (Math.floor(time / 3600) != 0) {
    return Math.floor(time / 3600) + ' hour'
  } else {
    return Math.floor(time / 60) + ' minute'
  }
}

const Item = ({ item }) => {
  // const time=timstamp()
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => Actions.news({item})}
        style={styles.containerLeft}
      >
        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.common} numberOfLines={1}>{item.by}   {timestamp(item.time)}</Text>
        <Text style={styles.common} numberOfLines={1}>{item.url}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Actions.comments({item})}
        style={styles.containerRight}
      >
        <View style={styles.itemRight}>
          <Text>{item.kids? item.kids.length: 0}</Text>
        </View>
        <View style={styles.itemRight}>
          <Text>{item.score}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginRight: 2
  },
  containerLeft: {
    flex: 6,
    flexDirection: 'column',
    paddingTop:7,
    paddingBottom:7 
  },
  containerRight: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5F5F5'
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black'
  },
  common: {
    fontSize: 10,
    color: '#363636',
    paddingTop: 5,
  },
  itemRight: {
    flex: 1,    
    justifyContent:'center',
    alignItems:'center'
  },
})

Item.propTypes = {
  item: React.PropTypes.object.isRequired
}

export { Item };
