ติดตั้ง extendtion vscode
1.Bracket Pair Colorizer
2.Color Highlight
3.ES7+ React/Redux/React-Native snippets
4.Path Intellisense
5.Prettier - Code formatter
6.vscode-icons

ตั้งค่า vscode json ให้จัด format ทุกครั้งที่บันทึก
{
    "editor.formatOnSave": true,
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "files.autoSave": "afterDelay",
    "editor.bracketPairColorization.enabled": true,
    "editor.guides.bracketPairs":"active"
}

yarn create react-app project-name

yarn add axios react-redux redux redux-logger redux-thunk @material-ui/core

yarn add react-router-dom (แนะนำ yarn add react-router-dom@5.2.0)

ให้สร้างไฟล์ store.js

import {createStore, ApplyMiddleware} from "redux";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import rootReducer from "./root-reducer";

const middleware = [reduxThunk];

if(process.env.NODE_ENV === "development"){
	middlewares.push(logger);
}

const store - createStore(rootReducer, applyMiddleware(...middleware));

export default store;