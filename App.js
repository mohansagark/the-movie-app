/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import LoginPage from "./src/screens/LoginPage";
// import MovieList from './src/screens/MovieList';
import AccordianPage from './src/screens/AccordianPage';
import { Button, TouchableOpacity } from "react-native";
import MovieList from "./src/screens/MovieList";

const App = () => {
  return (
    // <LoginPage />
    // <MovieList />
    // <AccordianPage />
    <TouchableOpacity onPress={() => {}}>
      <Button title="Login" />
    </TouchableOpacity>
  );
};

const AppNavigator = createStackNavigator({
  Home: {
    screen: AccordianPage
    // screen: MovieList
  },

});

export default createAppContainer(AppNavigator);
// export default App;
