import React from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';


//getting username and password for login info
// const userData = JSON.parse(localStorage.getItem('user'))


const LoginComponent = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const navigate = useNavigate()

//   const header = <div className="font-bold mb-3">Pick a password</div>;
//     const footer = (
//         <>
//             <Divider />
//             <p className="mt-2">Suggestions</p>
//             <ul className="pl-2 ml-2 mt-0 line-height-3">
//                 <li>At least one lowercase</li>
//                 <li>At least one uppercase</li>
//                 <li>At least one numeric</li>
//                 <li>Minimum 8 characters</li>
//             </ul>
//         </>
//     );


  // const FormReset = () =>{
  //     setEmail("")
  //     setPassword("")
  // }

  const handleLogin = (e) => {
    e.preventDefault()
    let values ={email,password}
    console.log(values);
    if (validate()) {
        toast.success('Logged in successfully')
    //   localStorage.setItem('LoggedIn',true)
    //   toast.success("Logged in successfully")
    //   navigate('/dashboard')
    }
    else
    {
      toast.error('Invalid email OR password!')
    }
    // if (validate()) {
    //   toast.success('Logged in successfully')
    //   navigate('/dashboard/employee')
    // }
    // else{
    //   toast.error("Denied Access")
    // }
  }

  const validate = () => {
    let result = true;
    if (email === '' || email === null) {
      result = false;
      toast.warning('Please enter username');
    }
    if (password === '' || password === null) {
      result = false;
      toast.warning('Please enter password');
    }
    // if( email === Email && password === userPassword){
    //   result = true;
    // }
    return result;
  }


  return (
    <div className="bg_hero">
      <div className="flex align-items-center justify-content-center">
        <div className="surface-card p-4 shadow-2 border-round w-full lg:w-5 lg:h-28rem mt-8">
          <div className="text-center mb-2">
            <img
              src="https://blocks.primereact.org/assets/images/blocks/logos/hyper.svg"
              alt="logo" height={50} className="mb-3 cursor-pointer"
            />
            <div className="text-900 text-xl font-medium mb-3">
              <i className="pi pi-user mx-3 text-xl" />
              Log in</div>

            <span className="text-600 font-medium mr-2 line-height-3">Don't have an account ?
            </span>
            <Link to="/auth/signup" className="font-medium no-underline text-blue-500 cursor-pointer">Create a new one</Link>
          </div>

          <form action="#" onSubmit={handleLogin}>
            <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
            <InputText
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name='email'
              type="email"
              autoFocus
              placeholder="Enter the email"
              className="w-full mb-3"
            />

            <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
            {/* <Password
            component={InputText}
            value={password}
            name='password'
            id="password"
            type="password"
            placeholder="Password"
            className="min-w-full mb-3 btn"
            onChange={(e) => setPassword(e.target.value)} 
            header={header} 
            footer={footer} /> */}
            <InputText
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name='password'
              id="password"
              type="password"
              placeholder="Password"
              className="w-full mb-3"
            />

            <div className="flex align-items-center justify-content-between mb-3">
            </div>
            <Button
              label="Log In"
              icon="pi pi-user"
              className="w-full"
            />
          </form>
        </div>
      </div>

    </div>

  )
}

export default LoginComponent;