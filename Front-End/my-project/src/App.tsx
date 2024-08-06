import React from 'react';
import  ReactDOM  from 'react-dom/client';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

import Layout from './pages/Layout';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Authentication from './pages/Authenticaton';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
<Route index element={<Authentication/>}></Route>
<Route path='aboutus' element={<AboutUs/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
