// Home.js: this file will render the list of robots to select from.
import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import robot from "./roboroster";

//  Given the selectRobot function passed in via src/App.js...
const Home = props => {
  const handleAction = robot => {
    //  Pass in the robot's information based on the user's selection.
    props.selectRobot(robot);
    /*
      props.history.push() is a function we receive from the routing library.
      It allows us to dynamically change routes with our code, corressponding to the
      string that we pass in it.
    */
    props.history.push("robot");
  };
  return (
    <View>
      {/*
        'TouchableOpacity' will allow us to pass in the information of the robot that
        has been 'clicked' on // via the 'onPress' property.
      */}
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
