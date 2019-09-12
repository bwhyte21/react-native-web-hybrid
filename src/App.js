/* eslint-disable no-unused-vars */
// (Native) App.js : this is where the react scripts will look for the react[native] code
// use FlatListing to render the list of robofriends
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Router, Switch, Route } from './routing'; //importing like this makes it conveinient to however you're routing it; web or native
import Home from './Home';
import Robot from './Robot';

export default class App extends Component {
   
    // init state to null
    state = { selectedRobot: null };
    // set state to selected robot (user input)
    selectRobot = selectedRobot => {
        this.setState({
            selectedRobot,
        });
    };
    render() {
        return (
            <View style={styles.container}>
                {/* Render routes here */}
                <Router>
                    <Switch>
                        {/* Render home component, passing all the props */}
                        <Route
                            exact
                            path="/"
                            render={props => (
                                <Home
                                    {...props}
                                    selectRobot={this.selectRobot}
                                />
                            )}
                        />
                        <Route
                            path="/robot"
                            render={props => (
                                <Robot
                                    selectedRobot={this.state.selectedRobot}
                                    {...props}
                                />
                            )}
                        />
                    </Switch>
                </Router>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        padding: 50,
    },
});
