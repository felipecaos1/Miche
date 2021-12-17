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
import Configurar_productos from './Configurar_productos';
import Crear_orden_produccion from './Crear_orden_produccion';
import Listar_ordenes from './Listar_ordenes'; 
import Listar_productos from './Listar_productos';
import Listar_usuarios from './Listar_usuarios';
import CrearUsuario  from './CrearUsuario';

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
      <Route path="/crear_usuario" element={<CrearUsuario/>}/>
      <Route path="/list_materias" element={<Listar_materias/>}/>
      <Route path="/reportes" element={<Reportes/>}/>
      <Route path="/reportes/mas_vendidas" element={<Mas_vendidas/>}/>
      <Route path="/reportes/pedidos-por-despachar" element={<Pedidos_por_despachar/>}/>
      <Route path="/reportes/pedidos-despachados" element={<Pedidos_despachados/>}/>
      <Route path="/configurar-productos" element={<Configurar_productos/>}/>
      <Route path="/crear-orden-produccion" element={<Crear_orden_produccion/>}/>
      <Route path="/list_order" element={<Listar_ordenes/>}/>
      <Route path="/list_productos" element={<Listar_productos/>}/>
      <Route path="/list_usuarios" element={<Listar_usuarios/>}/>



    </Routes>
</Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
