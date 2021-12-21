import Menu_vertical from './Menu_vertical';
import Header from './Header';
import Footer from './Footer';
import Ir_atras from './Ir_atras';
import {useState } from 'react';
import React from 'react';

// const pedidos_por_depachar={"id":"5353","contenido":"1-guitarr, 2-tambores","destino":"Pereira","costo":"59.000","fecha_creacion":"23/7/2021","fecha_de_despacho":"4/8/2021"};

// const lista_pedidos=[pedidos_por_depachar];

function Pedidos_despachados(){

  const [lista_pedidos,setLista_pedidos]=useState([]);
  React.useEffect(()=>{
    actualizar_lista();
  },[])
  const actualizar_lista = async () => {
    const temp = [];
    await fetch(`http://localhost:8081/listapedidosDespachados`)
      .then(res => res.json())
      .then(res => {
        for (const iterator of res) {
          temp.push(iterator);
        }
      })
      .catch(err => alert(err))
      console.log("actualizar",lista_pedidos);    
      setLista_pedidos(temp);
    }

    return(
        <>
         <div className="wrapper ">
    <div className="sidebar" data-color="white" data-active-color="danger">
      <Menu_vertical/>
    </div>
    <div className="main-panel">
     {/*<!-- Navbar -->*/}
      <Header/>
     {/*<!-- End Navbar -->*/}
      <div className="content">
          <Ir_atras/>

         <div className="row">
          <div className="col-md-12">
          <div class="card">
              {/* aca empieza la table de materias primas */}
              <div class="card-header">
                <h4 class="card-title"> Pedidos Despachados</h4>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table">
                    <thead class=" text-primary">
                        <th>
                        ID
                      </th>
                      
                      <th>
                       Contenido
                      </th>
                      <th>
                        Destino
                      </th>
                      <th >
                        Costo
                      </th>
                      <th >
                        Fecha de creación
                      </th>
                      <th >
                        Fecha de despacho
                      </th>
                      
                      
                    </thead>
                    <tbody>
                      {
                        lista_pedidos.map(item =>
                          <tr>
                        <td>
                         {item.id}
                        </td>
                       
                        <td>
                          {item.contenido}
                        </td>
                        <td>
                          {item.destino}
                        </td>
                        
                        <td >
                          {item.costo}
                        </td>
                        <td >
                          {item.fecha_creacion}
                        </td>
                        <td >
                          {item.fecha_de_despacho}
                        </td>
                        
                      </tr>
                          )
                      }
                    </tbody>
                  </table>
                </div>
              </div>
              {/* aca termina la table de materias primas */}
            </div>
          </div>
        </div> 
      </div>
      <Footer/>
    </div>
  </div>
        </>
    )
}

export default Pedidos_despachados;