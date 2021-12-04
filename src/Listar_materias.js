import Menu_vertical from './Menu_vertical';
import Header from './Header';
import Opciones from './Opciones';
import Footer from './Footer';

function Listar_materias(){
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
          <Opciones/>

         <div className="row">
          <div className="col-md-12">
          <div class="card">
              {/* aca empieza la table de materias primas */}
              <div class="card-header">
                <h4 class="card-title"> Lista de Materias Primas</h4>
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
                          Dakota Rice
                        </td>
                        <td>
                          Niger
                        </td>
                        <td>
                          Oud-Turnhout
                        </td>
                        <td>
                          Oud-Turnhout
                        </td>
                        <td >
                          $36,738
                        </td>
                        <td style={{textAlign:"center"}}>
                          Editar
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

export default Listar_materias;