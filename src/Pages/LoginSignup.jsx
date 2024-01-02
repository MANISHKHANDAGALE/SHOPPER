import React from 'react'
import './CSS/login.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="container">
        <h1>Sign Up</h1>
        <div className="fields">
<input type="text" placeholder='Your Name' />
<input type="email" placeholder='email...' />
<input type="password" placeholder='paswword..' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'> Already have an account? <span>Login</span></p>
        <div className="agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing ,i agree to the terms and conditions.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup