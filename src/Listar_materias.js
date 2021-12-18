import Menu_vertical from './Menu_vertical';
import Header from './Header';
import Footer from './Footer';
import Ir_atras from './Ir_atras';
import {useState } from 'react';
import React from 'react';

 
function Listar_materias() {
  const [lista, setLista] = useState([]);
  const [listaeditar, setListaeditar] = useState([]);
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

  const editar=(id)=>{
   // const lista_materias_primas = { "id": "5353", "nombre": "tipo1", "descripcion": "cafe prensada", "unidad": "m2", "cantidad": "56", "precio": "29.000" };
    
    const lista_materias_primas=lista.find(item=>item._id===id);
    const lista2=[lista_materias_primas];
    setListaeditar(lista2);
    
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

              <div className="row" id="modal-editar-mp" style={{}}>
                  <div className="col-md-12">
                    <div className="card">
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
                          {
                             listaeditar.map(item =>
                               <tr>
                                 
                                 <td>
                                    <input placeholder={item.nombre}></input>
                                 </td>
                                 <td>
                                 <input placeholder={item.descripcion}></input>
                                 </td>
                                 <td>
                                 <input placeholder={item.unidad}></input>
                                 </td>
                                 <td>
                                 <input placeholder={item.cantidad}></input>
                                 </td>
                                 <td >
                                 <input placeholder={item.precio}></input>
                                 </td>
                                 
                               </tr>

                             )
                          }


                        </tbody>
                        <tfoot>
                          <tr>
                            
                            <td style={{ textAlign: "center" }}>
                                   <a href="#" > Actualizar </a> 
                            </td>
                            <td style={{ textAlign: "center" }}>
                                   <a href="#" > Cancelar </a>
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