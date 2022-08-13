import SearchBar from './components/searchBar/SearchBar'
import Home from './components/home/Home'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SearchBar' element={<SearchBar />} />
      </Routes>
    </div>
  );
}

export default App;
