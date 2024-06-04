import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Anime from './Pages/Anime/Anime';
import Genre from './Pages/Genre/Genre';
import Manga from './Pages/Manga/Manga';
import Create from './Pages/Create/Create';
import Popular from './Pages/Popular/Popular';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/Home' element={ <Anime />  } />
        <Route path='/Genre' element={ <Genre /> } />
        <Route path='/Manga' element={ <Manga /> } />
        <Route path='/Popular' element={ <Popular /> } />
        <Route path='/Create' element={ <Create /> } />
      </Routes>
    </div>
  )
}

export default App
