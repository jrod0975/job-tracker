import { div } from "framer-motion/client"


function Login({changeScreen}){


    function logInOnClick(){
        changeScreen("dashboard")
    }



    return <div className="login-container">
       <div className="login-square gradient-border">

        <div className="login-title">
            <h1>Job Tracker</h1>
        </div>

        <div className="login-fields">
            <input className="user-field" type="text" />
            <input className="password-field" type="text" />
        </div>

        <div className="login-button-field">
            <button className="login-button">Login</button>
        </div>

       </div>
    </div>
}



export default Login