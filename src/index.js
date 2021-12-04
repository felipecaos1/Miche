import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Dashboard from './Dashboard';
import App2 from './App2';
import Login from './Login';
import Addmateria from './Addmateria';
import Listar_materias from './Listar_materias';
import Reportes from './Reportes';
import Mas_vendidas from './Mas_vendida';
import Pedidos_por_despachar from './Pedidos_por_despachar';
import Pedidos_despachados from './Pedidos_despachados';

import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route,Routes} from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/index" element={<App2/>} />
      <Route path="/add_materias" element={<Addmateria/>}/>
      <Route path="/list_materias" element={<Listar_materias/>}/>
      <Route path="/reportes" element={<Reportes/>}/>
      <Route path="/reportes/mas_vendidas" element={<Mas_vendidas/>}/>
      <Route path="/reportes/pedidos-por-despachar" element={<Pedidos_por_despachar/>}/>
      <Route path="/reportes/pedidos-despachados" element={<Pedidos_despachados/>}/>
      
    </Routes>
</Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
