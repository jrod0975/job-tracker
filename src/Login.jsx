import { div } from "framer-motion/client"


function Login({changeScreen}){


    function logInOnClick(){
        changeScreen("dashboard")
    }



    return <div>
        <h1>This is the log in page</h1>
        <button onClick={logInOnClick}> Click here to log in</button>
    </div>
}



export default Login