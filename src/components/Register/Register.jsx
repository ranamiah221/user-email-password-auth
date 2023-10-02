import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible} from "react-icons/ai";



const Register = () => {
    const [registerError, setRegisterError]=useState('');
    const [success, setSuccess]=useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister= e =>{
        e.preventDefault();
        const email= e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(email, password, accepted);

        setRegisterError('');
        setSuccess('');
        if(password.length < 6){
           setRegisterError('Your password must be in used 6 character...Try again');
           return;
        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError('Your password must be should one uppercase character');
            return;
        }
        else if(!accepted){
            setRegisterError('Please accept our terms and condition');
            return;
        }

      
        // create user...
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            console.log(result);
            setSuccess('User created Sucessfully');
        })
        .catch(error=>{
            setRegisterError(error.message);
        })
    }
    return (
       <div>
         <div className="mt-10 py-6 w-2/4 mx-auto bg-amber-500 rounded-md ">
           <div className="my-6 mx-10">
           <h1 className="text-center text-2xl font-semibold text-white">Please Register </h1>
            <form onSubmit={handleRegister}>
            <input className="w-3/4 mt-4 px-3 py-2 rounded-lg" type="email" name="email" id="1" placeholder="email"/>
            <br />
            
            <input className="w-3/4 mt-4 px-3 py-2 rounded-lg relative" 
            type={ showPassword ? "text":"password"} 
            name="password" 
            id="1" placeholder="password"/>
            
             <span className="absolute mt-7 -ml-8" onClick={()=>setShowPassword(!showPassword) }>
                {
                     showPassword ? <AiFillEye></AiFillEye>: <AiFillEyeInvisible></AiFillEyeInvisible>
                }
             </span>
            <br />
            <br />
            <input type="checkbox" name="terms" id="terms" />
            <label htmlFor="terms"> Accept our <a href="">Terms and Condition</a> </label>
            <br />
            <input className="w-full bg-red-500 text-white mt-4 px-3 py-2 rounded-lg" type="submit" value="Register" />
            </form>
            
           </div>
          
        </div>

        {
    registerError && <p className="text-red-600">{registerError}</p>
}
{
    success && <p className="text-green-500">{success}</p>
}
       </div>
    
    );
};

export default Register;

