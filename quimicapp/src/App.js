import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'; 
import Quiz from './Quiz.js';
import Home from './Home.js';



function Menu() {
  return (
    <div>
    <Topo />
    <div className="topodebaixo">
      <Busca />
      <div className='links'>        
        <Link className='link' exact to="/quiz">Admin</Link>
        <Link className='link' exact to="/">Home</Link>
        <Link className='link' exact to="/compostos">Compostos</Link>
        <Link className='link' exact to="/tabela">Tabela Periódica</Link>
      </div>
    </div>
    </div>
  );
}


function Topo() {
  return (
    <div className="topodetudo">
      <header>
        <img src={`${process.env.PUBLIC_URL}/atomo.png`} alt="Logo" className="logo" />
        <h1>Química Orgânica</h1>
      </header>
      <nav>
        <ul>

          <li><a href="#introducao">Introdução</a></li>
          <li><a href="#funcoes">Grupos Funcionais</a></li>
          <li><a href="#carbonos">Classificação de Carbonos</a></li>
          <li><a href="#cadeias">Classificação de Cadeias</a></li>
          <li><a href="#nomenclatura">Nomenclatura</a></li>
        </ul>
      </nav>



    </div>

  );}

  function Busca(){
    return(
     
  <div class="group">
    <svg viewBox="0 0 24 24" aria-hidden="true" class="icon">
      <g>
        <path
          d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
        ></path>
      </g>
    </svg> 
    
    <input class="input" type="search" placeholder="Buscar..." />
  </div>
  
    );
  }
function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;