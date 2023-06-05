import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Setting } from './Router/Setting';
import { Sleep } from './Router/Sleep';
import { Notification } from './Router/Notification';
import { Search } from './Router/Search';
import { Edit } from './Router/Edit';
import Homee from './Router/Homee';
import Contactt from './Router/Contact';
import Calendarr from './Router/Calendar';
import Beloww from './Router/Below';
import Gridd from './Router/Grid';
import Messagee from './Router/Message';
import Game from './Game';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
     <Routes>
     <Route path='/home' element={<Homee/>}></Route>
     <Route path='/contact' element={<Contactt/>}></Route>
     <Route path='/calendar' element={<Calendarr/>}></Route>
     <Route path='/below' element={<Beloww/>}></Route>
     <Route path='/grid' element={<Gridd/>}></Route>
     <Route path='/message' element={<Messagee/>}></Route>
     <Route path='/setting' element={<Setting/>}></Route>
     <Route path='/sleep' element={<Sleep/>}></Route>
     <Route path='/notification' element={<Notification/>}></Route>
     <Route path='/search' element={<Search/>}></Route>
     <Route path='/edit' element={<Edit/>}></Route>
     <Route path='/person' element={<App/>}></Route> 
     <Route path='/game' element={<Game/>}></Route>
  
     </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
