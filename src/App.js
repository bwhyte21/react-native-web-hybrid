//  (Native) App.js : this is entry point one for the app  : essentially where
// Expo will look for the react native scripts that power the app.  : use
// FlatListing to render the list of robots
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Router, Switch, Route } from "./routing"; //importing 'routing' like this makes it conveinient to however you're routing it; web or native
import Home from "./Home";
import Robot from "./Robot";

export default class App extends Component {
  //  init state to null
  state = {
    selectedRobot: null,
  };
  //  this function will take the robot as a parameter and set the robot to the state via user input
  selectRobot = selectedRobot => {
    this.setState({ selectedRobot });
  };
  render() {
    return (
      <View style={styles.container}>
        {/* Render routes here */}
        <Router>
          <Switch>
            {/*
              -Pass the function 'selectRobot' into the home component. When this function is called,
              it will pass the selected robot information into the setState, letting it know what robot
              the user selected.
            */}
            <Route
              exact
              path="/"
              render={props => (
                <Home {...props} selectRobot={this.selectRobot} />
              )}
            />{" "}
            {/*
              -Now we are going to pass that selected robot into the view so the user can
              see the details of their selection via the setState.
            */}
            <Route
              path="/robot"
              render={props => (
                <Robot selectedRobot={this.state.selectedRobot} {...props} />
              )}
            />
          </Switch>
        </Router>
      </View>
    );
  }
}
//  view styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    padding: 50,
  },
});
