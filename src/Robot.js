// Robots.js : this file will render the information about a single robot the
// user has selected
import React from "react";
import { View, Text, Image, Platform, Button, Share } from "react-native";
import { Link } from "./routing";

//  we pass the selected robot from the app component through the props
const Robot = props => {
  //  and into this variable
  const { selectedRobot } = props;
  /*
    This handle action allows the user to see a 'Share' button only visible in
    the mobile view  giving them the ability to share the page the robot is on.
    The Share component gives the user the ability to share via email, text, and
    social media.
  */
  const handleAction = () => {
    Share.share({
      message: `Check out this robot from my app! This is the link for the image I wanted to send:,  ${props.selectedRobot.photoUrl}`,
      title: "Bryan's RoboDude Demo",
    });
  };
  // Add a navigation back button to go back to the list located in the root page via 'Link'.
  const backButton = (
    <View>
      <Link to="/">
        <Text>Go Back</Text>
      </Link>
    </View>
  );
  // If we somehow end up here and no robot is selected.
  if (!selectedRobot) {
    return (
      <View>
        {/*
          Render the back button here to give the user an option to go back.
        */}
        {backButton}
        {/*
          Return a view letting the user know that there is no robot selected.
        */}
        <Text>No Robot Selected</Text>
      </View>
    );
  }
  // Otherwise return a detailed view of the selected robot.
  return (
    <View>
      {backButton}
      <View>
        {/*
          We use the props passed in from the app component to display the details of our selected robot.
        */}
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
          style={{
            width: 200,
            height: 200,
          }}
          source={{
            uri: selectedRobot.photoUrl,
          }}
        />
      </View>
      {/*
        Only if the platform is not web, add a share button for any social media apps.
        'Share' is explained at the top of this page.
      */}
      {Platform.OS !== "web" && (
        <View>
          <Button title="Share" onPress={handleAction} />
        </View>
      )}
    </View>
  );
};

export default Robot;
