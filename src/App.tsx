import {Routes, Route} from 'react-router-dom';
import Layout from './components/layout'
import Home from './pages/home';
import About from './pages/about';
import Books from './pages/books';

import './style.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="books" element={<Books />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
