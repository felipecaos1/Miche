import Menu_vertical from './Menu_vertical';
import Header from './Header';
import Footer from './Footer';
import Ir_atras from './Ir_atras';
import { useEffect } from 'react';


const pedidos={"id":"5353","contenido":"1-guitarr, 2-tambores","destino":"Pereira","costo":"59.000","fecha_creacion":"23/7/2021","fecha_de_despacho":"4/8/2021"};


const lista_pedidos=[pedidos];


function Listar_ordenes(){

  function orden_producida(id){
    console.log(id);
     
    // aca se debe buscar en la base de datos la orden que correponda a "id" y cambiarle el estado a "por despachar"
      
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
              {/* aca empieza la table de ordenes */}
              <div class="card-header" style={{display:"flex", justifyContent:"space-between"}}>
                <h4 class="card-title"> Lista de Ordenes</h4>
                <button type="button" >Actualizar</button>
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
                      
                      <th style={{textAlign:"center"}}>
                        Confirmar
                        <i style={{marginLeft:"10px"}} class="fa fa-check" aria-hidden="true"></i>
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
                        <td style={{textAlign:"center"}}>
                          <button type="button" onClick={()=>orden_producida(item.id)}  > Orden producida </button>
                         
                        </td>
                      </tr>
                          )
                      }
                      
                      
                    </tbody>
                  </table>
                </div>
              </div>
              {/* aca termina la table de ordenes */}
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

export default Listar_ordenes;