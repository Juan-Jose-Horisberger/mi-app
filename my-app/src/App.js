import SearchBar from './components/searchBar/SearchBar';
import Home from './components/home/Home';
import Card from './components/card/card';
import Pagination from './components/pagination/Pagination.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SearchBar' element={<SearchBar />} />
        <Route path='/Card' element={<Card />} />
        <Route path='/Pagination' element={<Pagination />} />
      </Routes>
    </div>
  );
}

export default App;
