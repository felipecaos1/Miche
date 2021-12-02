import { Fragment } from "react";
import { Link} from "react-router-dom";

function Login(){
    return (
        <div class="login">
            <h1>Login</h1>
            <form method="post">
                <input type="text" name="u" placeholder="Username" required="required" />
                <input type="password" name="p" placeholder="Password" required="required" />
                <Link to="/dashboard">
                <button type="submit" class="btn btn-primary btn-block btn-large">Ingresar</button>
                </Link>
            </form>
            
        </div>
        
    )
}

export default Login;