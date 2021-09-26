���ҧ app => yarn create react-app "name"

install lib =>
yarn add react-redux redux redux-logger redux-thunk @material-ui/core

���ҧ���
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
���ҧ json server ����Ѻ�� api =>
npm i -g json-server
�������������� package.json > "scripts"
"server": "json-server --watch db.json --port 5000"

������ѹ api json => npm run server
http://localhost:5000/user

Setting redux
���ҧ Folder src>Redux ���� ������������
- actions.js
- actionType.js
- reducer.js
- root-reducer.js
- store.js

1. ����ҧ��� store ������ share state

const middlewares = [reduxThunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

2. ����ҧ��� reducer (***�ѹ��� switch case)

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

3. ����ҧ��� root-reducer (�Ѵ��� reducer)

const rootReducer = combineReducers({
  users: usersReducers,
});

export default rootReducer;

4. ������ index.js ����������� redux store ����Ѵ����´ router
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


5. ������ҧ Home component
6. ��˹�� App.js ������¡ route Home
    
<Switch>
	<Route exact path="/" component={Home} />
</Switch>

7. �������� .env
REACT_APP_API=http://localhost:5000/user

Web theme Material v.4 =>
https://v4.mui.com/

8.������ custom ˹�� home ���ҧ table users
***action �鹤�� function ������ => axios �������� �Դ��� yarn add axios

�͹ useSelector �˹�� Home �ѹ�Ҩҡ˹�� root-reducer ������

netstat -ano | findstr :yourPortNumber
taskkill /PID typeyourPIDhere /F
