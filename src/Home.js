/* eslint-disable no-unused-vars */
// Home.js: component that will render the list
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import robot from "./roboroster";

const Home = props => {
    const handleAction = (robot) => {
        props.selectRobot(robot);
        props.history.push('robot'); //thanks to the routing library, I can dynamically send user corressponding to the path passed in
    }
    return (
        <View>
            <FlatList
                data={robot}
                keyExtractor={robot => robot.number}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleAction(item)}>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default Home;