import logo from './logo.svg';
import './App.css';
import {bindActionCreators, createStore, combineReducers} from 'redux';
function run(){
  const initialState = {count: 0};

  //reducer
  const counter = (state = initialState, action) => {
    switch (action.type) {
      case 'PLUS_ONE':
        return { count: state.count + 1};
      case 'MINUS_ONE':
        return { count: state.count - 1};
      case 'CUSTOM_COUNT':
        return { count: state.count + action.payload.count};
      default:
        break;
    }
    return state;
  }

  function plusOne(){
    return {type: 'PLUS_ONE'};
  }

  function minusOne(){
    return {type: 'MINUS_ONE'};
  }

  function customCount(count){
    return {type: 'CUSTOM_COUNT', payload: { count }}
  }

  const todos = (state ={}) => state;
  const store = createStore(combineReducers({
    counter,
    todos,
  }))


  store.subscribe(() => console.log(store.getState()));

  plusOne = bindActionCreators(plusOne, store.dispatch);
  minusOne = bindActionCreators(minusOne, store.dispatch);
  customCount = bindActionCreators(customCount, store.dispatch);
  plusOne();
  minusOne();
  //测试
  customCount(5);
}

function App() {
  return (
    <div className="App">
      <button onClick={run}>Run</button>
    </div>
  );
}

export default App;
