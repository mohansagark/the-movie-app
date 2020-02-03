import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, FlatList } from 'react-native';

class AccordianPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        accordianData: [
            {'id':1,'title':'Title 1', 'body': 'body 1'},
            {'id':2,'title':'Title 2', 'body': 'body 2'},
            {'id':3,'title':'Title 3', 'body': 'body 3'},
            {'id':4,'title':'Title 4', 'body': 'body 4'},
        ],
        activeAccordian: []
    };
  }

  componentDidUpdate = () => {
    this.setState({activeAccordian:Array(this.state.accordianData.length).fill(false)})
    console.log(activeAccordian)
}

handleAccordianSelection = () => {

}

  render() {
    const accordianItems = this.state.accordianData.map(i=>(
        <TouchableOpacity key={i.id}>
            <View style={styles.accordianTitle}>
                <Text style={styles.accordianTitleText}>
                    {i.title}
                </Text>
            </View>
        </TouchableOpacity>
    ))
    return (
      <View style={styles.container}>
          {/* {accordianItems} */}
          <FlatList 
            data = {this.state.accordianData}
            key = {this.state.accordianData.id}
            renderItem = {({item, index})=> (
                <View key={index}>
                    <Text>{item.title}</Text>
                </View>
            )}
          />
      </View>
    );
  }
}

export default AccordianPage;

const SW = Math.round(Dimensions.get('window').width);
const SH = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
},
accordianTitle:{
    borderColor: '#42d1f5',
    borderWidth: 1,
    width: 0.9*SW,
    height: SH/20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#42d1f5'
},
accordianTitleText:{
    fontWeight: 'bold',
    color: 'white'
}
})
