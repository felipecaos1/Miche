import { Fragment } from "react";
import { Link} from "react-router-dom";

function Login(){
    return (
        <div className="container" style={{paddingTop:"50px"}}>
             <div className="text-miche">
                <a href="index.html"><img src="assets/img/logo.png" alt="" width="80"/></a>
                <h1>Bienvenido a Miche</h1>
                <h5> Éste es un Sistema de Gestión de Inventario Musical en donde podrás consultar la disponibilidad de materia prima para la producción de tus instrumentos musicales, al igual que gestionar los pedidos realizados por clientes.</h5>
                <h5>En Miche nos especializamos en la producción de instrumentos musicales de calidad desde 1980, hasta la fecha, contando con gran experiencia en el mercado a través de clientes que nos avalan.</h5>
             </div>

            <div>
            <div class="login" style={{backgroundColor:"rgba(0,0,0,0.8)",padding:"20px"}}>
                <h1 style={{color:"#fff"}}>Login</h1>
                <form method="post">
                    <input type="text" name="u" placeholder="Username" required="required" />
                    <input type="password" name="p" placeholder="Password" required="required" />
                    <Link to="/dashboard">
                    <button type="submit" class="btn btn-primary btn-block btn-large">Ingresar</button>
                    </Link>
                </form>
            
             </div>
            </div>
            

            
        </div>
       
        
    )
}

export default Login;