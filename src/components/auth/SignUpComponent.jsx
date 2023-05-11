import React from "react";
import { InputText } from "primereact/inputtext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const SignUpComponent = () => {
  const [name, setName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const navigate = useNavigate();

  //signup logic code
  const handleSignUp = (e) => {
    e.preventDefault();
    let values = { name, phoneNumber, email, password, confirmPassword };
    console.log(values);
    if (name && email && phoneNumber && password && confirmPassword && password === confirmPassword) {
      axios
        .post("https://dull-shoe-duck.cyclic.app/auth/signup", values)
        .then((res) => {
          toast.success(res.data.message);
          navigate("/");
        })
        .catch((err) => {
          toast.error(err.data.message);
        });
    } else {
      toast.error("All inputs are mandatory");
    }
  };

  return (
    <div className="bg_hero">
      <div className="block-content">
        <div className="flex">
          <div className="surface-section w-full md:w-6 p-6 md:p-8">
            <div className="mb-5">
              <img
                src="https://jbembalagenscl.com.br/site/wp-content/gallery/parceiros/frimesa-logo.png"
                alt="user"
                height="65"
                className="mb-3 cursor-pointer"
              />
              <div className="text-900 text-3xl font-medium mb-3">
                Create an account
              </div>
              <span className="text-600 font-medium mr-2">
                Login to continue
              </span>
              <Link
                to="/"
                className="font-medium no-underline text-blue-500 cursor-pointer"
              >
                Returning user ?
              </Link>
            </div>

            <form onSubmit={handleSignUp}>
              <label htmlFor="name" className="block text-900 font-medium mb-2">
                Name
              </label>
              <div className="col-12 md:col-12">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">
                    <i className="pi pi-user"></i>
                  </span>
                  <InputText
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <label
                htmlFor="mobile"
                className="block text-900 font-medium mb-2"
              >
                Mobile
              </label>
              <div className="col-12 md:col-12">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">
                    <i className="pi pi-phone"></i>
                  </span>
                  <InputText
                    maxLength={10}
                    type="tel"
                    name="phoneNumber"
                    placeholder="Mobile"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>

              <label
                htmlFor="email"
                className="block text-900 font-medium mb-2"
              >
                Email
              </label>
              <div className="col-12 md:col-12">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon w-auto">
                    <i className="pi pi-envelope"></i>
                  </span>
                  <InputText
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <label
                htmlFor="password2"
                className="block text-900 font-medium mb-2"
              >
                Password
              </label>
              <div className="col-12 md:col-12">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">
                    <i className="pi pi-eye"></i>
                  </span>
                  <InputText
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <label
                htmlFor="password2"
                className="block text-900 font-medium mb-2"
              >
                Re-Enter Password
              </label>
              <div className="col-12 md:col-12">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">
                    <i className="pi pi-eye"></i>
                  </span>
                  <InputText
                    name="confirmPassword"
                    type="password"
                    placeholder="Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>

              <button
                aria-label="Sign Up"
                className="p-button p-component w-full mt-3 font-bold
              text-white border-2 bg-black-alpha-90 border-0 transition-colors transition-duration-100 bg-dark-500 hover:text-white p-button-outlined border-round-sm bg-black-alpha-90 border-transparent transition-colors transition-duration-200 bg-blue-500 hover:bg-orange-500 text-white hover:text-gray-900"
              >
                <span className="p-button-icon p-c p-button-icon-left pi pi-user"></span>
                <span className="p-button-label p-c">Sign Up</span>
                <span role="presentation" className="p-ink"></span>
              </button>
            </form>
          </div>

          <div
            className="md:inline-flex w-6 h-auto bg-no-repeat bg-cover"
            style={{ background: "url(../images/img-17.jpg)" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;
