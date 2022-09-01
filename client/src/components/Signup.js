import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Signup = ({ handleLogin }) => {

    const [signUpInfo, setSignUpInfo] = useState([])

    const formData = (props) => {
        FormData = {
            username: '',
            email: '',
            password: '',
            errors: '',
        }
    }

    const handleChange = (name, value) => {
        setSignUpInfo({
            ...signUpInfo,
            [name]: value
        })
        console.log(signUpInfo)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (signUpInfo.email.includes('@' && '.com') && signUpInfo.password.length >= 6) {
            const postUserData = async (signUpInfo) => {
                let req = await fetch('http://localhost:3001/user', {
                    method: 'POST',
                    Accept: 'application/json',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(signUpInfo)
                })
                let res = req.json()

            }
            postUserData(signUpInfo)
            alert('You signed up!')
        } else if (signUpInfo.password < 6) {
            e.preventDefault()
            alert('Invalid Password')
        } else {
            e.preventDefault()
            alert('Invalid Email Address or Password')
        }

    }


    return (
        <div>
            <h1>Log In</h1>

            <form onSubmit={(e) => handleSubmit(e, signUpInfo)}>
                <h3>Username</h3>
                <input
                    paceholder="username"
                    type="text"
                    name="username"
                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                />
                <h3>Email</h3>
                <input
                    paceholder="email"
                    type="text"
                    name="email"
                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                />
                <h3>Password</h3>
                <input
                    paceholder="password"
                    type="password"
                    name="password"
                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                />
                <h3>Password Confirmation</h3>
                <input
                    paceholder="password"
                    type="password"
                    name="password_confirmation"
                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                />
                <NavLink to="/login">
                    <button placeholder='submit' type='submit'>Sign Up</button>
                </NavLink>
                <div>
                    or <Link to='/login'>Log In</Link>
                </div>
            </form>
        </div>
    )
}

export default Signup