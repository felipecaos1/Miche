import { Fragment } from "react";


function Login(){
    return (
        <Fragment>
            <div class="login">
            <h1>Login</h1>
            <form method="post">
                <input type="text" name="u" placeholder="Username" required="required" />
                <input type="password" name="p" placeholder="Password" required="required" />
                <button type="submit" class="btn btn-primary btn-block btn-large">Ingresar</button>
            </form>
        </div>
        </Fragment>
    )
}

export default Login;