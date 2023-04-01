import logo from './logo.svg';
import './App.css';
import store from './store/store';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
function App() {
  return (
    <Provider store={store}>
      <div  className='border border-2 border-danger m-2 p-2'>
        <h1>REDUX</h1>
        <Counter></Counter>
        <TodoList></TodoList>
      </div>
    </Provider>
  );
}

export default App;
