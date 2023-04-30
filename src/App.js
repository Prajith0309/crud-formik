import React from 'react';
import Mainpage from './Components/Mainpage';
import Adddata from './Components/Adddata';
import Editdata from './Components/Editdata';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
export const url ='https://62244f233af069a0f9b2f7bb.mockapi.io/Players';

function App() {
  return <>
  <Router>
    <Routes>
      <Route path='*' element={<Mainpage />}/>
      <Route path='/add-data' element={<Adddata />}/>
      <Route path='/edit-data/:id' element={<Editdata />}/>
    </Routes>
  </Router>
  </>
}

export default App;
