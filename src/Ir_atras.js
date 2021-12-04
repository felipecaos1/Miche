import { Link } from "react-router-dom";

function Ir_atras(){
    return(
        <div className="row" style={{justifyContent:"end"}}>

          <Link to="/dashboard" className="col-lg-3 col-md-6 col-sm-6" style={{textDecoration:"none"}}>
            <div className="card card-stats">
              <div className="card-body ">
                <div className="row">
                  <div className="col-5 col-md-2">
                    <div className="icon-big text-center icon-warning" style={{marginTop:"-10px"}}>
                    <i class="fa fa-chevron-left" style={{color:"#51AC3B"}}></i>
                    </div>
                  </div>
                  <div className="col-7 col-md-10">
                    <div className="numbers">
                    <p className="card-title">Atrás</p>
                      
                      
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </Link>
          </div>
    )
}

export default Ir_atras;