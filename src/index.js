/* eslint-disable no-unused-vars */
//  index.js : What the react scripts code will look for in order to render the app
//           : as stated in 'index.html', here is where we will pull our native code from 'HybridApp' in App.js(root)
//  note : This is where react-native-web comes in handy
//       : "react-scripts start" and "react-scripts build" scripts will run the web based react code [created/located in package.json] via terminal/cmd
//       : To run the script(s) use "yarn start-web" or "yarn build-web"
import React from "react";
import { render } from "react-dom"; // let react know that it's website time
import App from "./App"; // import the App.js(root) file to put <HybridApp/> to good use
import "./index.css"; // we can always add styling to the outer web layer (outside the component)

// render our good friend 'root' in index.html
render(<App />, document.getElementById("root"));
