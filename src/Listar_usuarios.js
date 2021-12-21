import Menu_vertical from './Menu_vertical';
import Header from './Header';
import Footer from './Footer';
import Ir_atras from './Ir_atras';
import { useState } from 'react';
import React from 'react';


function Listar_usuarios() {
  
  const [lista_usuarios, setLista] = useState([]);
  React.useEffect(() => {
    actualizar_lista();
  }, [])

  const actualizar_lista = async () => {
    const temp = [];
    await fetch(`http://localhost:8081/listarUsuarios`)
      .then(res => res.json())
      .then(res => {
        for (const iterator of res) {
          temp.push(iterator);
        }
        setLista(temp);
      })
      .catch(err => alert(err))
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
                  {/* aca empieza la table de materias primas */}
                  <div class="card-header">
                    <h4 class="card-title"> Lista de Usuarios</h4>
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
                            Apellido
                          </th>
                          <th>
                            Cargo
                          </th>
                          <th>
                            Usuario
                          </th>
                          <th style={{ textAlign: "center" }}>
                            Opciones
                          </th>
                        </thead>
                        <tbody>
                        {
                            lista_usuarios.map(item =>
                          <tr>
                            <td>
                            {item._id}
                            </td>
                            <td>
                              {item.nombre}
                            </td>
                            <td>
                            {item.apellido}
                            </td>
                            <td>
                            {item.cargo}
                            </td>
                            <td>
                            {item.usuario}
                            </td>


                            <td style={{ textAlign: "center" }}>
                              Eliminar | Editar
                            </td>
                          </tr>
                            )}
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

export default Listar_usuarios;