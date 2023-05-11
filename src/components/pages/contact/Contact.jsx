import React from "react";
import Banner from "../../Common/Banner";

const Contact = () => {
  var name = "Contact US";
  return (
    <>
      <Banner name={name} />
      <div class="surface-section">
        <div class="grid grid-nogutter p-5">
          <div
            class="col-12 md:col-6 lg:col-6 bg-no-repeat bg-cover p-6 lg:h-screen"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(../../images/photo-2.avif) 0% 0% / cover no-repeat",
            }}
          >
            <h1 style={{ fontFamily: "Playfair Display, serif" }} className="">
              <span className="text-4xl text-white">
                {name}
                <span className="text-3xl mb-2 text-yellow-500">.</span>
              </span>
            </h1>
            <div
              class="text-gray-300 line-height-4 mb-6 font-normal text-1xl"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <a
              href="#a"
              class="inline-flex align-items-center font-bold no-underline cursor-pointer"
            >
              <span
                class="mr-3 text-xl transition-colors transition-duration-100 hover:text-orange-500 text-white"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                View Address on Google Maps
              </span>
              <i class="pi pi-arrow-right transition-colors transition-duration-100 hover:text-orange-500 text-white"></i>
            </a>
            <ul
              class="list-none p-0 m-0 mt-6 text-white text-xl"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              <li class="flex align-items-center mb-3">
                <i class="pi pi-phone mr-2 cursor-pointer transition-colors transition-duration-100 hover:text-orange-500 text-white"></i>
                <span>+123456789</span>
              </li>
              <li class="flex align-items-center mb-3">
                <i class="pi pi-twitter mr-2 cursor-pointer transition-colors transition-duration-100 hover:text-orange-500 text-white"></i>
                <span>@foodies_bnglr</span>
              </li>
              <li class="flex align-items-center">
                <i class="pi pi-inbox mr-2 cursor-pointer transition-colors transition-duration-100 hover:text-orange-500 text-white"></i>
                <span>contact@foodies.bnglr.com</span>
              </li>
            </ul>
          </div>
          <div class="col-12 md:col-6 lg:col-5">
            <div class="p-fluid formgrid grid mx-4 px-4 py-8 md:px-6 lg:px-1">
              <div class="field col-12  mb-4">
                <input
                  id="firstname"
                  type="text"
                  class="p-inputtext p-component py-3 px-2 text-lg"
                  placeholder="First Name"
                />
              </div>
              <div class="field col-12  mb-4">
                <input
                  id="lastname"
                  type="text"
                  class="p-inputtext p-component py-3 px-2 text-lg"
                  placeholder="Last Name"
                />
              </div>
              <div class="field col-12 mb-4">
                <input
                  id="email2"
                  type="text"
                  class="p-inputtext p-component py-3 px-2 text-lg"
                  placeholder="Email"
                />
              </div>
              <div class="field col-12 mb-4">
                <input
                  id="phone"
                  type="text"
                  class="p-inputtext p-component py-3 px-2 text-lg"
                  placeholder="Phone"
                />
              </div>
              <div class="field col-12 mb-4">
                <textarea
                  id="message"
                  rows="3"
                  class="p-inputtextarea p-inputtext p-component p-inputtextarea-resizable py-3 px-2 text-lg"
                  placeholder="Message"
                  style={{ overflow: "hidden", height: "104px" }}
                ></textarea>
              </div>
              <div class="col-12 text-start">
                <button
                  aria-label="Send Message"
                  class="p-button p-component w-auto
                                bg-black-alpha-90 border-transparent transition-colors transition-duration-100 bg-blue-500 hover:bg-orange-500 text-white hover:text-white
                                "
                >
                  <span class="p-button-icon p-c p-button-icon-left pi pi-send"></span>
                  <span class="p-button-label p-c">Send Message</span>
                  <span role="presentation" class="p-ink"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
