// Robots.js : route going to render the details of one robot
import React from "react";
import { View, Text, Image, Platform, Button, Share } from "react-native";
import { Link } from "./routing";

const Robot = props => {
  // we get the robots passed down from the app component thru the props
  const { selectedRobot } = props;

  // user action
  const handleAction = () => {
    Share.share({
      message: `Check out this robot from my app! This is the link for the image I wanted to send:,  ${props.selectedRobot.photoUrl}`,
      title: "Bryan's RoboDude Demo",
    });
  };
  // add back button
  const backButton = (
    <View>
      <Link to="/">
        <Text>Go Back</Text>
      </Link>
    </View>
  );
  // if no robot is selected
  if (!selectedRobot) {
    return (
      <View>
        {/* give them a chance to go back */}
        {backButton}
        <Text>No Robot Selected</Text>
      </View>
    );
  }
  return (
    <View>
      {backButton}
      <View>
        <Text>{`#${selectedRobot.number}`}</Text>
      </View>
      <View>
        <Text>{`Name: ${selectedRobot.name}`}</Text>
      </View>
      <View>
        <Text>{`Type: ${selectedRobot.type}`}</Text>
      </View>
      <View>
        <Image
          style={{ width: 200, height: 200 }}
          source={{ uri: selectedRobot.photoUrl }}
        />
      </View>
      {/* only if the platform is not web, add a share button for any social media apps */}
      {Platform.OS !== "web" && (
        <View>
          <Button title="Share" onPress={handleAction} />
        </View>
      )}
    </View>
  );
};

export default Robot;
