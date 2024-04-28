import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from './components/Sidebar'

import Inicio from './pages/Inicio';
import SobreMim from './pages/SobreMim';
import Experiencias from './pages/Experiencias';
import Formacoes from './pages/Formacoes';
import Habilidades from './pages/Habilidades';
import Projetos from './pages/Projetos';

const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/sobremim' element={<SobreMim />} />            
          <Route path='/experiencias' element={<Experiencias />} />
          <Route path='/formacoes' element={<Formacoes />} />
          <Route path='/habilidades' element={<Habilidades />} />
          <Route path='/projetos' element={<Projetos />} />    
        </Routes>
        <SobreMim/>
        <Experiencias/>
      </Router> 

    </>
  )
}

export default App