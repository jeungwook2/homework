import './App.css';
import Display from './components/display/Display';
import { Provider } from 'react-redux';
import store from './store/Store';
function App() {
  return (
    <Provider store={store}>
   <Display/>
   </Provider>
  );
}

export default App;
