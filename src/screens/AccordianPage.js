import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList
} from "react-native";

class AccordianPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accordianData: [
        { id: 1, title: "Title 1", body: "body 1" },
        { id: 2, title: "Title 2", body: "body 2" },
        { id: 3, title: "Title 3", body: "body 3" },
        { id: 4, title: "Title 4", body: "body 4" }
      ],
      activeAccordian: []
    };
  }
  componentDidMount(prevProps,prevState) {
      console.log(prevState)
    //if (prevState.activeAccordian !== this.state.activeAccordian) {
      const c = Array(this.state.accordianData.length).fill(false);
      this.setState({activeAccordian:c})
      console.log(c);
    //}
  }

  handleAccordianSelection = i => () => {
    console.log(i);
    var temp = this.state.activeAccordian;
    temp[i] = !this.state.activeAccordian[i];
    this.setState({activeAccordian: temp})
    console.log("handleSelection" + this.state.activeAccordian);
  };

  render() {
    const AccordianInactive = props => {
      return (
        <View style={styles.accordianInactive}>
          <Text style={styles.accordianTitleText}>{props.children}</Text>
        </View>
      );
    };

    const AccordianActive = props => {
      return (
        <View style={styles.accordianActive}>
          <Text style={styles.accordianTitleText}>{props.children}</Text>
        </View>
      );
    };

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.accordianData}
          key={this.state.accordianData.id}
          renderItem={({ item, index }) =>
            this.state.activeAccordian[index] ? (
              <TouchableOpacity onPress={this.handleAccordianSelection(index)}>
                <AccordianActive>
                  <Text>{item.title}</Text>
                </AccordianActive>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={this.handleAccordianSelection(index)}>
                <AccordianInactive>{item.title}</AccordianInactive>
              </TouchableOpacity>
            )
          }
        />
      </View>
    );
  }
}

export default AccordianPage;

const SW = Math.round(Dimensions.get("window").width);
const SH = Math.round(Dimensions.get("window").height);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
    // borderWidth:1
  },
  accordianActive: {
    borderColor: "#42d1f5",
    borderWidth: 1,
    width: 0.9 * SW,
    height: SH / 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#42d1f5"
  },
  accordianInactive: {
    // borderColor: '#42d1f5',
    borderColor: "black",
    borderWidth: 1,
    width: 0.9 * SW,
    height: SH / 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  accordianTitleText: {
    fontWeight: "bold",
    color: "black"
  }
});
