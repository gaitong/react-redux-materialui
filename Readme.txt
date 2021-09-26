สร้าง app => yarn create react-app "name"

install lib =>
yarn add react-redux redux redux-logger redux-thunk @material-ui/core

สร้างไฟล์
- db.json
- .env

{
    "user" : [
    {
        "name": "Adam",
        "address": "London",
        "email": "adam@mail",
        "contact": "112233",
        "id": 1
    },
    {
        "name": "Aoi",
        "address": "Japan",
        "email": "aoi@mail",
        "contact": "567889",
        "id":2
    },
    {
        "name": "Jane",
        "address": "Australia",
        "email": "jane@mail",
        "contact": "988765",
        "id": 3
    }
    ]   
}
สร้าง json server สำหรับเทส api =>
npm i -g json-server
ไปเพิ่มคำสั่งในไฟล์ package.json > "scripts"
"server": "json-server --watch db.json --port 5000"

คำสั่งรัน api json => npm run server
http://localhost:5000/user

Setting redux
สร้าง Folder src>Redux ใหม่ เพิ่มไฟล์ตามนี้
- actions.js
- actionType.js
- reducer.js
- root-reducer.js
- store.js

1. ไปสร้างไฟล์ store เพื่อเก็บ share state

const middlewares = [reduxThunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

2. ไปสร้างไฟล์ reducer (***มันคือ switch case)

const initialState = {
  users: [],
  user: {},
  loading: false,
};

const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default usersReducers;

3. ไปสร้างไฟล์ root-reducer (มัดรวม reducer)

const rootReducer = combineReducers({
  users: usersReducers,
});

export default rootReducer;

4. ไปแก้ไฟล์ index.js ให้เชื่อมต่อ redux store และยัดเหยียด router
(yarn add react-router-dom)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);


5. ให้สร้าง Home component
6. แก้หน้า App.js ให้เรียก route Home
    
<Switch>
	<Route exact path="/" component={Home} />
</Switch>

7. ไปเพิ่มไฟล์ .env
REACT_APP_API=http://localhost:5000/user

Web theme Material v.4 =>
https://v4.mui.com/

8.ไปเริ่ม custom หน้า home สร้าง table users
***action ม้นคือ function ทำอะไร => axios อยู่ที่นี่ ติดตั้ง yarn add axios

ตอน useSelector ในหน้า Home มันมาจากหน้า root-reducer นะเว้ย

netstat -ano | findstr :yourPortNumber
taskkill /PID typeyourPIDhere /F
