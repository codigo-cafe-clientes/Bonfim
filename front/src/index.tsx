import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import LayoutHome from './components/Layout/Home';
import LayoutPage from 'components/Layout/Page';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<LayoutHome />} />
        <Route path="*" element={<LayoutPage />} />          
      </Routes>
    <Footer />
  </BrowserRouter>
);
