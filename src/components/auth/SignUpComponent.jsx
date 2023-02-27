import React from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputMask } from "primereact/inputmask";
import { Link, useNavigate } from 'react-router-dom';
import axios  from 'axios';
import { toast } from 'react-toastify';




const SignUpComponent = () => {
  const [name, setName] = React.useState("")
  const [mobile, setMobile] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [confirmPassword, setConfirmPassword] = React.useState("")

  const navigate = useNavigate()

  const handleSignUp = (e) => {
    e.preventDefault();
    const data = { name, mobile, email, password, confirmPassword }
    console.log(data);
    if (name && email && (password === confirmPassword)) {
      axios.post('http://localhost:4000/auth/signup', data)
      .then((res) =>{
        toast.success(res.data.message)
        navigate('/')
      })
    }else{
      toast.error('Invalid Credentials')
    }
  }


  // const validate = () => {
    // if (name && password (password === confirmPassword)) {
    //   axios.post('http://localhost:8000/auth/signup', data).then((res) =>{
    //     toast.success(res.data.message)
    //     navigate('/')
    //   })
    // }else{
    //   toast.error('Invalid Credentials')
    // }
    
  // }
  // const validate = () => {
  //   let result = true;
  //   if (name === '' || name === null) {
  //     result = false;
  //     toast.warning('Please enter username');
  //   }
  //   if (mobile === '' || mobile === null) {
  //     result = false;
  //     toast.warning('Please enter mobile number');
  //   }
  //   if (email === '' || email === null) {
  //     result = false;
  //     toast.warning('Please enter email');
  //   }
  //   if (password === '' || password === null) {
  //     result = false;
  //     toast.warning('Please enter password');
  //   }
  //   if (confirmPassword !== password || confirmPassword === null) {
  //     result = false;
  //     toast.error('Please Confirm Password OR Passwords do not match  ');
  //   }
  //   return result;
  // }


  return (
    <div className="bg_hero">
      <div className="flex align-items-center justify-content-center">
        <div className="surface-card p-4 shadow-4 border-round border-blue-500 w-full lg:w-5 lg:h-32rem mt-3">
          <div className="text-center mb-2">
            <img
              src="https://blocks.primereact.org/assets/images/blocks/logos/hyper.svg"
              alt="logo" height={50} className="mb-3 cursor-pointer"
            />
            <div className="text-900 text-xl font-medium mb-3">
              <i className="pi pi-user-plus mx-3 text-xl" />
              Sign Up</div>

            <span className="text-600 font-medium mr-2 line-height-3">Already have an account ?
            </span>
            <Link to="/" className="font-medium no-underline text-blue-500 cursor-pointer">Login here</Link>
          </div>

          <form onSubmit={handleSignUp}>
            <label htmlFor="username" className="block text-900 font-medium mb-2">Username</label>
            <InputText
              value={name}
              name='name'
              onChange={(e) => setName(e.target.value)}
              id="name"
              type="text"
              autoFocus
              placeholder="Name"
              className="w-full mb-3"
            />
            <label htmlFor="email" className="block text-900 font-medium mb-2">Mobile Number</label>
            <InputMask
              id="mobile"
              name='mobile'
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              mask="+91-99999999"
              placeholder="+91-99999999"
              className="w-full mb-3" />
            {/* <InputText
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              id="mobile"
              type="text"
              autoFocus
              placeholder="Username"
              className="w-full mb-3"
            /> */}
            <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
            <InputText
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name='email'
              type="text"
              placeholder="Example email@gmail.com"
              className="w-full mb-3"
            />

            <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
            <InputText
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              name='password'
              type="password"
              placeholder="Password"
              className="w-full mb-3"
            />
            <label htmlFor="password" className="block text-900 font-medium mb-2">Confirm Password</label>
            <InputText
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              name='confirmPassword'
              id="cnfpassword"
              type="password"
              placeholder="Confirm Password"
              className="w-full mb-3"
            />

            <div className="flex align-items-center justify-content-between mb-3">
            </div>
            <Button
              label="Sign Up"
              icon="pi pi-user"
              className="w-full"
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUpComponent;