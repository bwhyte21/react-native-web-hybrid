/* eslint-disable no-unused-vars */
// index.js : What the react scripts code will look for in order to render the app
// note : "react-scripts start" and "react-scripts build" scripts will activate the react web based code [created/located in package.json]
//      : To run the script(s) use "yarn start-web" or "yarn build-web"
import React from 'react';
import { render } from 'react-dom';

import App from './App';

import './index.css';

render(<App />, document.getElementById('root'));
