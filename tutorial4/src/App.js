import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Users from './components/users/Users';
import UserProfile from './components/userprofile/UserProfile';

function App() {
  return (
    <div className="App">
        <CssBaseline/>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/userprofile" element={<UserProfile />} />
        </Routes>
    </div>
  );
}

export default App;
