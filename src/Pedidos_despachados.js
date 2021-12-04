import Menu_vertical from './Menu_vertical';
import Header from './Header';
import Footer from './Footer';
import Ir_atras from './Ir_atras';


function Pedidos_despachados(){
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
                <h4 class="card-title"> Pedidos por Despachar</h4>
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
                      
                      
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                         1
                        </td>
                       
                        <td>
                          Niger
                        </td>
                        <td>
                          Oud-Turnhout
                        </td>
                        
                        <td >
                          $36,738
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

export default Pedidos_despachados;