/*  
(Root) App.js : render our native code in expo
              : The sole job of this file is to import and render our App.js in /src
              : to the web so we may see it in a browser.
*/
import React from "react";
import HybridApp from "./src/App";

export default function App() {
  // this line imports and renders our native code
  return <HybridApp />;
}
