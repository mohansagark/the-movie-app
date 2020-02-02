import React, { Component } from 'react';
import { 
  SafeAreaView,
  Text, 
  View,
  StyleSheet, 
  TouchableOpacity, 
  Image,
  Dimensions,
 } from 'react-native';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Id', 'Name', 'Rating /5', 'Favourite'],
      tableData: 
      [
          {'id':1, 'name':'Inception', 'rating': 4, 'Favourite': 'Y'},
          {'id':2, 'name':'Lucy', 'rating': 4.3, 'Favourite': 'N'},
          {'id':3, 'name':'The Godfather', 'rating': 4.2, 'Favourite': 'Y'},
          {'id':4, 'name':'12 Angry Men', 'rating': 4, 'Favourite': 'Y'},
      ]
    };
  }

  render() {
    const tableHeadItems = [];
    for(i=0; i<this.state.tableHead.length;i++)
    {
        tableHeadItems.push(
            (i===1 || i===2) ?
            <View key={i+1} style={styles.tableHeaderItem}>
                <Text style={styles.textStyleFav}>{this.state.tableHead[i]}</Text>
                <TouchableOpacity>
                    <Image 
                    style={{width: 10, height: 10}}
                    source={require('../assets/sort_up.png')}/>
                </TouchableOpacity>
            </View>
            :
            <View key={i+1} style={styles.tableHeaderItem}>
                <Text style={styles.textStyle}>{this.state.tableHead[i]}</Text>
            </View>
        )
    }

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.tableHeader}>
          {tableHeadItems}
        </View>
        <View style={styles.tableBody}>
          <Text>test</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default MovieList;

const SW = Math.round(Dimensions.get('window').width);
const SH = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  tableHeader: {
    flexDirection: 'row',
    width: 0.9 * SW,
  },
  tableHeaderItem: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'grey',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems:'center',
    height: SH/15
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },
  textStyleFav: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
    marginRight: '5%'
  },
  // tableBody:{
  //   width: 0.9 * SW,
  //   borderWidth: 2,
  //   borderColor: 'black',
  // }
})
