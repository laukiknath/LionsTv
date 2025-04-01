import './Register.css'
import { Link ,useNavigate} from "react-router-dom";
import axios from 'axios';

const Register = () => {

    const navigate = useNavigate();
    function handleSubmit(e){

        e.preventDefault();

        const userName = e.target.user.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const mob = e.target.mob.value;
        const pass = e.target.pass.value;
        // const rpass = e.target.rpass.value;

        axios.post('http://localhost:5000/register',{userName,name,email,mob,pass}).then(result => {
            console.log(result);
            window.alert("Signed in");
            navigate('/login')

        })


    }




    return (
        <div>
            <div class="container">
                <h1> Sign Up </h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" name=" user" id="user" /><span class="error"></span>
                    <input type="text" placeholder="Name" name=" name" id="name" /><span class="error" ></span>
                    <input type="text" placeholder="Email-id" name=" email" id="email" /><span class="error" ></span>
                    <input type="tel" placeholder="Mobile no." name=" mob" id="mob" /><span class="error" ></span>
                    <input type="password" placeholder="password" name=" pass" id="pass" /><span class="error" ></span>
                    <input type="password" placeholder="Re-Enter Password" name=" rpass" id="rpass" /><span class="error" ></span>

                    <div class="terms">
                        <input type="checkbox" id="check" />
                        <label for="check" > I agree to the these <Link to="#">Terms & condition</Link> </label><br /><span class="error"></span>

                    </div>
                    <input type="submit" value="Sign Up" class="sub" />
                    <div class="register">
                        Already have an account? <Link to="/login">
                            Login Here
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Register;