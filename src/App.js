import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Dashboard from './pages/Dashboard/Dashboard';
import RequireAuth from './components/auth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Registration/>} />
        <Route path='/dashboard' element={<RequireAuth><Dashboard/></RequireAuth>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
