import './App.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Basket from './pages/Basket';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />

        <Home />

        <Basket />
      </div>
    </div>
  );
}

export default App;
