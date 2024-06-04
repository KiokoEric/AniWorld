import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Anime from './Pages/Anime/Anime';
import Genre from './Pages/Genre/Genre';


function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/Home' element={ <Anime />  } />
        <Route path='/Genre' element={ <Genre /> } />
      </Routes>
    </div>
  )
}

export default App
