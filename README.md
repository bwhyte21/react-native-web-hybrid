# react-native-web-hybrid

Just a demo of how to create a react native app and make it display on the web.

Requirements:
-------------
  * Have Expo CLI on your machine already, if not try [this link](https://docs.expo.io/versions/v34.0.0/introduction/installation/)
  * Have Expo Client on your phone (for testing obviously)
  * Have npm installed on your machine (and/or in your project)
  * Have an understanding of ES6
  * Yarn should come in this bundle, so don't worry about that. We will use Yarn to run the web half of the project. Npm will get confused on the web compile command, so yarn will be useful here.

Dependencies:
---------------
  * Open that terminal and navigate to your new project folder to run the following:
    "npm install --save react-scripts react-dom react-native-web react-art react-router-native react-router-dom" to get those packages into your project.
  * Dependency descriptions:
     * react-scripts: this library contains the scripts used in 'create-react-app'.
     * react-dom: allows react code to be rendered into an HTML page.
     * react-native-web: this where the magic happens! This library will convert our react-native components into web elements. Lucky for us, react-scripts is already configured to use it, so we won't need to touch any Webpack ourselves to get it up and running.
     * react-art: a [node peer-dependency](https://nodejs.org/en/blog/npm/peer-dependencies/) for react-native-web
     * react-router-native: routing library for React Native
     * react-router-dom: routing library for React on the web
  * Properties to add to your project's package.json to run the web scripts:
    "scripts": {
      "start-web": "react-scripts start",
      "build-web": "react-scripts build"
    }
  
