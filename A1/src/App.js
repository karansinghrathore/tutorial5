import { BrowserRouter, Routes, Route } from "react-router-dom";
import StaffHomePage from "./components/staff/StaffHomePage";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StaffHomePage/>}> </Route>
        <Route path='/orders' element={<StaffHomePage/>}> </Route>
        <Route path='/menu' element={<StaffHomePage/>}> </Route>
        <Route path='/staff' element={<StaffHomePage/>}> </Route>
        <Route path='/logout' element={<StaffHomePage/>}> </Route>
      </Routes >
    </BrowserRouter >

  );
}

export default App;
