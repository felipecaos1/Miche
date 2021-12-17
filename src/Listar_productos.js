import Menu_vertical from './Menu_vertical';
import Header from './Header';
import Footer from './Footer';
import Ir_atras from './Ir_atras';
import { useState } from 'react';
import React from 'react';

// const productos={"id":"34343", "nombre":"Guitarra","materias_primas":"madera tipo 1, madera tipo 2"}

// const lista_pro=[productos,productos];

function Listar_productos() {

  const [lista_pro, setLista] = useState([]);
  React.useEffect(() => {
    actualizar_lista();
  }, [])

  const actualizar_lista = async () => {
    const temp = [];
    await fetch(`http://localhost:8081/listarProductos`)
      .then(res => res.json())
      .then(res => {
        for (const iterator of res) {
          temp.push(iterator);
        }
      })
      .catch(err => alert(err))
    setLista(temp);
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

            <div className="row">
              <div className="col-md-12">
                <div class="card">
                  {/* aca empieza la table de ordenes */}
                  <div class="card-header">
                    <h4 class="card-title"> Lista de Productos Configurados</h4>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table">
                        <thead class=" text-primary">
                          <th>
                            ID
                          </th>
                          <th>
                            Nombre
                          </th>
                          <th>
                            Materias Primas
                          </th>

                        </thead>
                        <tbody>
                          {
                            lista_pro.map(item =>
                              <tr>
                                <td>
                                  {item.id}
                                </td>
                                <td>
                                  {item.nombre}
                                </td>
                                <td>
                                  {item.materias_primas}
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
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Listar_productos;