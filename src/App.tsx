import './App.css';
import AppContextProvider from './Components/Context/AppContext';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Anime from './Pages/Anime/Anime';
import Genre from './Pages/Genre/Genre';
import Manga from './Pages/Manga/Manga';
import Create from './Pages/Create/Create';
import Popular from './Pages/Popular/Popular';
import Review from './Pages/Review/Review';


function App() {

  return (
    <AppContextProvider>
      <Header />
      <Routes>
        <Route path='/' element={ <Anime />  } />
        <Route path='/Genre' element={ <Genre /> } />
        <Route path='/Manga' element={ <Manga /> } />
        <Route path='/Popular' element={ <Popular /> } />
        <Route path='/Create' element={ <Create /> } />
        <Route path='/Reviews' element={ <Review /> } />
      </Routes>
    </AppContextProvider>
  )
}

export default App
