import {Routes, Route} from 'react-router-dom';
import Layout from './components/layout'
import Home from './pages/home';
import About from './pages/about';
import Books from './pages/books';
import Login from './pages/dashboard/login';
import HomeDashboard from './pages/dashboard';

import './style.css';
import Protected from './components/protected';
import { AuthProvider } from './hooks/useAuth';

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="books" element={<Books />} />
          </Route>
            <Route path="/dashboard">
              <Route index element={
                <Protected>
                  <HomeDashboard />
                </Protected>
              } />
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
      </AuthProvider>
    </>
  )
}

export default App
