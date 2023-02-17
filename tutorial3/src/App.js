import './App.css';
import Signup from './components/registration/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/profile/Profile';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}> </Route>
        <Route path='/profile' element={<Profile/>}> </Route>
      </Routes >
    </BrowserRouter>
  );
}

export default App;
