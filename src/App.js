import './App.css';
import Home from './components/home/Home';
import { Route, Routes } from 'react-router-dom';
import CountryInfo from './components/CountryInfo/CountryInfo';
import NotFound from "./components/NotFound/NotFound"
import bg from "./img/bg.jpg"

import './App.css';

function App() {
  //f

  return (

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='country/:id' element={<CountryInfo />}></Route>
        <Route path='/notfound' element={<NotFound />}></Route>
        <Route path='*' element={<h1>Not Found!</h1>}></Route>
      </Routes>

  );
}

export default App;
