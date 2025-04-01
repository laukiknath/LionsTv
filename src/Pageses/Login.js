import './Login.css';
import axios from 'axios';
import { Link , useNavigate} from "react-router-dom";
const Login=()=>{
    const navigate = useNavigate();
    function handleSubmit(e){
        e.preventDefault();

        const userName = e.target.user.value;
        const pass = e.target.pass.value;
        console.log(userName)
        console.log(pass)
        axios.post('http://localhost:5000/login',{userName,pass})
        .then(result=>{
            console.log(result)
            if(result.data === "Success"){
                navigate('/')
            }else{
                window.alert("Invalid");
            }
        })
        .catch(err => console.log(err))

    }



    return(
        <div>
            <div className="container">
        <h1> Login </h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" name="user" className="user"/><span className="error"></span>
            <input type="password" placeholder="password" name="pass" id="pass"/><span className="error"></span>
            <div className="recover">
                <Link to="">Forgot Password?</Link>
                <input type="submit" value="Login" className="sub"/>
            </div>
        </form>

        <div className="register">
            Not have an account? <Link to="/register">
                Register Now</Link>
            
        </div>
    </div>
        </div>
    );
}
export default Login;
