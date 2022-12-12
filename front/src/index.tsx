import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './controller/Home';
import Sobre from './controller/Sobre';
import Servicos from './controller/Servicos';
import Contato from './controller/Contato';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='empresa-bonfim-contabilidade' element={<Sobre />} />
        <Route path='servicos' element={<Servicos />} />
        <Route path='contato' element={<Contato />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
