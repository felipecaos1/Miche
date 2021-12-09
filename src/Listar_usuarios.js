import Menu_vertical from './Menu_vertical';
import Header from './Header';
import Footer from './Footer';
import Ir_atras from './Ir_atras';


function Listar_usuarios(){
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
                      <th style={{textAlign:"center"}}>
                        Opciones
                      </th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                         1
                        </td>
                        <td>
                         Felipe
                        </td>
                        <td>
                          Castro
                        </td>
                        <td>
                          Jefe de Produccion
                        </td>
                        <td>
                          caos1
                        </td>
                    

                        <td style={{textAlign:"center"}}>
                          Eliminar | Editar
                        </td>
                      </tr>
                      
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

export default Listar_usuarios;