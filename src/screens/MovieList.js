import React, { Component, isValidElement } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList
} from "react-native";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["Id", "Name", "Rating /5", "Favourite"],
      tableData: [
        { id: 1, name: "Inception", rating: 4, Favourite: "Y" },
        { id: 2, name: "Lucy", rating: 4.3, Favourite: "N" },
        { id: 3, name: "The Godfather", rating: 4.2, Favourite: "Y" },
        { id: 4, name: "12 Angry Men", rating: 4, Favourite: "Y" }
      ],
      isFavourite: [],
      isSorted : false
    };
  }

  componentDidMount = () => {
    this.setState({
      isFavourite: Array(this.state.tableData.length).fill(false)
    });
  };

  handleFavourite = i => {
    var temp = this.state.isFavourite;
    temp[i] = !this.state.isFavourite[i];
    this.setState({
      isFavourite : temp
    });
  };

  handleSort = () => {
    var temp = this.state.tableData;
    var temp2 = this.state.isSorted;
    temp.sort((a,b)=>a.name.localeCompare(b.name));
    this.setState(
      {
        tableData : temp,
        isSorted : !temp2
      }
    )
    console.log(this.state.isSorted)
  }

  render() {
    const tableHeadItems = [];
    for (i = 0; i < this.state.tableHead.length; i++) {
      tableHeadItems.push(
        i === 1 ? (
          <View key={i + 1} style={styles.tableHeaderItem}>
            <Text style={styles.textStyleFav}>{this.state.tableHead[i]}</Text>
            <TouchableOpacity onPress ={this.handleSort}>
            {(this.state.isSorted) ?
            (<Image
                style={{ width: 10, height: 10 }}
                source={require("../assets/sort_up.png")}
              /> ):
              (<Image
                style={{ width: 10, height: 10 }}
                source={require("../assets/sort_down.png")}
              />)}
            </TouchableOpacity>
          </View>
        ) : (
          <View key={i+1} style={styles.tableHeaderItem}>
            <Text style={styles.textStyle}>{this.state.tableHead[i]}</Text>
          </View>
        )
      );
    }
    const Item = props => {
      return (
        <View style={styles.tableItem}>
          <Text>{props.children}</Text>
        </View>
      );
    };
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.tableHeader}>{tableHeadItems}</View>
        <View style={styles.tableBody}>
          <FlatList
            data={this.state.tableData}
            key={this.state.tableData.id}
            renderItem={({ item, index }) => (
              <View key={index} style={styles.tableItem}>
                <Item>{index + 1}</Item>
                <Item>{item.name}</Item>
                <Item>{item.rating}</Item>
                <TouchableOpacity
                  key={index}
                  onPress={() => this.handleFavourite(index)}
                >
                  <Item key={index}>
                    {this.state.isFavourite[index] ? (
                      <Image
                        source={require("../assets/fav_on.png")}
                        style={{ resizeMode: "center", height: 50 }}
                      />
                    ) : (
                      <Image
                        source={require("../assets/fav_off.png")}
                        style={{ resizeMode: "center", height: 50 }}
                      />
                    )}
                  </Item>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default MovieList;

const SW = Math.round(Dimensions.get("window").width);
const SH = Math.round(Dimensions.get("window").height);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  tableHeader: {
    flexDirection: "row",
    width: 0.9 * SW
  },
  tableHeaderItem: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "grey",
    justifyContent: "center",
    height: SH / 15,
    width: SW/(4/0.9),
    alignItems: 'center',
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 15,
    color: "white"
  },
  textStyleFav: {
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
    marginRight: "5%"
  },
  tableBody: {
    width: 0.9 * SW,
    borderWidth: 2,
    borderColor: "black"
  },
  tableItem: {
    flexDirection: "row",
    borderWidth: 1,
    height: SH / 20,
    width: SW/(4/0.9),
    alignItems: 'center'
  }
});
