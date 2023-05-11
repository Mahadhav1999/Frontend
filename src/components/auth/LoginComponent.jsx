import React from 'react';
import { InputText } from 'primereact/inputtext';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



const LoginComponent = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const navigate = useNavigate()


  //function for login
  const handleLogin = (e) => {
    e.preventDefault()
    let data = { email, password }
    console.log(data);
    // if (email === '' || email === null) {
    //   toast.error('Please enter your email')
    // }
    // if (password === '' || password === null) {
    //   toast.error('Please enter your password')
    // }
    axios.post("https://dull-shoe-duck.cyclic.app/login", data).then((res) => {
      if (res.data.message === "Logged in successfully!") {
        toast.success(res.data.message);
        navigate("/dashboard");
      } else {
        toast.error(res.data.message);
      }
    });
  }



  return (
    <div className="bg_hero">
      <div className="block-content">
        <div className="flex">
          <div className="surface-section w-full md:w-6 p-6 md:p-8">
            <div className="mb-5">
            <img src="https://jbembalagenscl.com.br/site/wp-content/gallery/parceiros/frimesa-logo.png" alt="user" height="65" className="mb-3 cursor-pointer" />
              <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
              <span className="text-600 font-medium mr-2">Login to continue
              </span>
              <Link to="/auth/signup" className="font-medium no-underline text-blue-500 cursor-pointer">New user ?</Link>
            </div>
            <form onSubmit={handleLogin}>
              <label htmlFor="email2" className="block text-900 font-medium mb-2">Email</label>
              <div className="col-12 md:col-12">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">
                    <i className="pi pi-envelope"></i>
                  </span>
                  <InputText
                    type='email'
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <label htmlFor="password2" className="block text-900 font-medium mb-2">Password</label>
              <div className="col-12 md:col-12">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">
                    <i className="pi pi-eye"></i>
                  </span>
                  <InputText
                    type='password'
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <button aria-label="Sign In" className="p-button p-component w-full mt-3 font-bold border-2 bg-black-alpha-90 border-0 transition-colors transition-duration-100 bg-blue-500 hover:text-white p-button-outlined border-round-sm bg-black-alpha-90 text-white border-transparent transition-colors transition-duration-200 bg-blue-500 hover:bg-orange-500 text-white hover:text-gray-900"
              >
                <span className="p-button-icon  p-button-icon-left pi pi-user"></span>
                <span className="p-button-label p-c">Login</span>
                <span role="presentation" className="p-ink">
                </span>
              </button>
            </form>
          </div>
          <div 
          className="hidden md:inline-flex w-6 h-screen bg-no-repeat bg-cover" 
          style={{ background: 'url(images/img-23.jpg)' }}>
          </div>
        </div>
      </div>

    </div>

  )
}

export default LoginComponent;