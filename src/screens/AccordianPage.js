import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class AccordianPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        accordianData: [
            {'title':'Title 1', 'body': ''},
            {},
            {},
            {}
        ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> AccordianPage </Text>
      </View>
    );
  }
}

export default AccordianPage;

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
}
})
