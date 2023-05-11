import React from "react";

const LandingPage = () => {
  return (
    <>
      <div className="grid grid-nogutter text-800">
        <div className="col-12 md:col-7 lg:col-7">
          <img
            src="images/img-9.jpg"
            alt="hero-1"
            className="sm:h-screen lg:h-screen lg:w-full md:w-full"
          />
        </div>
        <div className="col-12 md:col-5 lg:col-5 p-6 text-center md:text-left flex align-items-center bg-yellow-400">
          <section>
            <span
              className="uppercase text-gray-600"
              style={{ letterSpacing: "2px" }}
            >
              Featured Posts
            </span>
            <span className="block text-6xl font-bold mb-1">Love the</span>
            <div className="text-6xl font-bold mb-3 underline">
              Delicious & Tasty Foods
            </div>
            <p className="text-1xl mt-0 mb-4 text-700 line-height-3 w-8">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>

            <button
              aria-label="Read More"
              type="button"
              className="p-button p-component p-button-outlined border-round-sm px-4 py-3 bg-black-alpha-90 border-transparent transition-colors transition-duration-100 bg-blue-500 hover:bg-orange-500 text-white hover:text-gray-900 w-max"
            >
              <span
                className="p-button-label p-c text-white"
                sx={{ fontFamily: "Poppins,sans-serif" }}
              >
                Read More
              </span>
              <span className="p-button-icon p-c p-button-icon-right pi pi-arrow-right text-white mx-3"></span>
              <span role="presentation" className="p-ink"></span>
            </button>
          </section>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
