import Menu_vertical from './Menu_vertical';
import Header from './Header';
import Footer from './Footer';
import Ir_atras from './Ir_atras';
import {useState, useRef } from 'react';
import React from 'react';

 
function Listar_materias() {
  const [lista, setLista] = useState([]);


  //referencia a las cajas de te texto para editar

  var ref_nombre=useRef();
  var ref_descripcion=useRef();
  var ref_unidad=useRef();
  var ref_disponibilidad=useRef();
  var ref_precio=useRef();
///////////////////////////////////////////////


  React.useEffect(() => {
    actualizar_lista();
  }, [])

  const actualizar_lista = async () => {
    const temp = [];
    await fetch(`http://localhost:8081/listarMaterias`)
      .then(res => res.json())
      .then(res => {
        for (const iterator of res) {
          temp.push(iterator);
        }
      })
      .catch(err => alert(err))
    setLista(temp);
  }
  const ocultar=()=>{
    var x= document.getElementById("prueba");
    x.style.display="none";
  }
  const editar=(id)=>{
   // const lista_materias_primas = { "id": "5353", "nombre": "tipo1", "descripcion": "cafe prensada", "unidad": "m2", "cantidad": "56", "precio": "29.000" };
    console.log(id);
    var x= document.getElementById("prueba");
    x.style.display="block";
    const lista_materias_primas=lista.find(item=>item._id===id);
    
    ref_nombre.current.value=lista_materias_primas.nombre;
    ref_descripcion.current.value=lista_materias_primas.descripcion;
    ref_unidad.current.value=lista_materias_primas.unidad;
    ref_disponibilidad.current.value=lista_materias_primas.cantidad;
    ref_precio.current.value=lista_materias_primas.precio;  
    
  }

  const actualizar_mp=(id2)=>{
    //recojemos los datos de los input de editar
    const editar_nombre=ref_nombre.current.value;
    const editar_descripcion=ref_descripcion.current.value;
    const editar_unidad=ref_unidad.current.value;
    const editar_disponibilidad=ref_disponibilidad.current.value;
    const editar_precio=ref_precio.current.value;

    ///consultar a la base de datos con el nombre y actualizar 
    
  
  }

  return (
    <>
      <div className="wrapper ">
        <div className="sidebar" data-color="white" data-active-color="danger">
          <Menu_vertical />
        </div>
        <div className="main-panel">
          {/*<!-- Navbar -->*/}
          <Header />
          {/*<!-- End Navbar -->*/}
          <div className="content">
            <Ir_atras />
            
            <div id="prueba" className="row"  style={{display:"none"}}>
              <div className="col-md-12">
                <div className="card">
                  <h3 style={{margin:"10px"}}>Editar Materia Prima </h3>
                <table className="table">
                    <thead className=" text-primary">
                      
                      <th>
                        Nombre
                      </th>
                      <th>
                        Descripcion
                      </th>
                      <th>
                        Unidad
                      </th>
                      <th >
                        Disponibilidad
                      </th>
                      <th >
                        Precio
                      </th>
                     
                    </thead>
                    <tbody>
                      
                           <tr>
                             
                             <td>
                                <input ref={ref_nombre}/>
                             </td>
                             <td>
                             <input ref={ref_descripcion}/>
                             </td>
                             <td>
                             <input ref={ref_unidad}/>
                             </td>
                             <td>
                             <input ref={ref_disponibilidad}/>
                             </td>
                             <td >
                             <input ref={ref_precio}/>
                             </td>
                             
                           </tr>

                    </tbody>
                    <tfoot>
                      <tr>
                        
                        <td style={{ textAlign: "center" }}>
                               <a href="#" onClick={()=>actualizar_mp()}> Actualizar </a> 
                        </td>
                        <td style={{ textAlign: "center" }}>
                               <a href="#" onClick={ocultar} > Cancelar </a>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
          </div>
            

              

            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  {/* aca empieza la table de materias primas */}
                  <div className="card-header">
                    <h4 className="card-title"> Lista de Materias Primas</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table">
                        <thead className=" text-primary">
                          <th>
                            ID
                          </th>
                          <th>
                            Nombre
                          </th>
                          <th>
                            Descripcion
                          </th>
                          <th>
                            Unidad
                          </th>
                          <th >
                            Disponibilidad
                          </th>
                          <th >
                            Precio
                          </th>
                          <th style={{ textAlign: "center" }}>
                            Opciones
                          </th>
                        </thead>
                        <tbody>
                          {
                            lista.map(item =>
                              <tr>
                                <td>
                                  {item.id}
                                  
                                </td>
                                <td>
                                  {item.nombre}
                                </td>
                                <td>
                                  {item.descripcion}
                                </td>
                                <td>
                                  {item.unidad}
                                </td>
                                <td>
                                  {item.cantidad}
                                </td>
                                <td >
                                  {item.precio}
                                </td>
                                <td style={{ textAlign: "center" }}>
                                  <a href="#" onClick={() => editar(item._id)}> Editar </a> | eliminar
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
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Listar_materias;