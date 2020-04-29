import React,{useState} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const Login = (props) => {
   
    const [login,setLogin] = useState({

        username: '',
        password: ''
    })

    const handleChange = event => {
        setLogin({
            ...login, [event.target.name]:event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
    }

    axiosWithAuth()
    .post('/api/login', login)
    .then(response => {
        window.localStorage.setItem('token',response.data.payload);
        props.history.push('/protected')
    })
    .catch(err => console.log('Error',err))


return(
    <>
        <form onSubmit = {handleSubmit}>
            <input type='text' name = 'username' value = {login.username} onChange={handleChange} placeholder='Username'/>
            <input type='password' name='password' value={login.password} onChange={handleChange}placeholder='Password'/>
            <button>Login</button>
        </form>
    </>

)};

export default Login;