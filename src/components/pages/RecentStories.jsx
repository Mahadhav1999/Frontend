import React from "react";

const RecentStories = () => {
  return (
    <>
      <section className="py-8">
        <div>
          <div className="" style={{ minHeight: "35rem" }}>
            <h1 style={{ fontFamily: "Playfair Display, serif" }} className="">
              <span className="mx-4 text-4xl text-black-alpha-90">
                Recent Stories
                <span className="text-3xl mb-2 text-yellow-500">.</span>
              </span>
            </h1>

            <div className="grid grid-nogutter p-4">
              <div className="col-6">
                <div className="grid">
                  <div className="col-6">
                    <img
                      src="images/img-14.jpg"
                      alt="Ime"
                      className="w-15rem border-round"
                    />
                    <h4 className="mt-3 mb-2 font-normal text-700 flex">
                      Dessert ---- March 01, 2018
                    </h4>
                    <span
                      className="text-900 line-height-3 text-xl"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      Tasty & Delicious Foods
                    </span>
                    <a
                      href="#a"
                      tabindex="0"
                      className="text-orange-500 font-medium flex align-items-center mt-2 no-underline"
                    >
                      <span>Read More</span>
                      <i className="pi pi-arrow-right ml-5"></i>
                    </a>
                  </div>
                  <div className="col-6">
                    <img
                      src="images/img-4.avif"
                      alt="Ime"
                      className="w-15rem border-round"
                    />
                    <h4 className="mt-3 mb-2 font-normal text-700 flex">
                      Dessert ---- March 01, 2018
                    </h4>
                    <span
                      className="text-900 line-height-3 text-xl"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      Tasty & Delicious Foods
                    </span>
                    <a
                      href="#a"
                      tabindex="0"
                      className="text-orange-500 font-medium flex align-items-center mt-2 no-underline"
                    >
                      <span>Read More</span>
                      <i className="pi pi-arrow-right ml-5"></i>
                    </a>
                  </div>
                  <div className="col-6 mt-8 py-1">
                    <img
                      src="images/img-20.jpg"
                      alt="Ime"
                      className="w-15rem border-round"
                    />
                    <h4 className="mt-3 mb-2 font-normal text-700 flex">
                      Dessert ---- March 01, 2018
                    </h4>
                    <span
                      className="text-900 text-xl line-height-3"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      Tasty & Delicious Foods
                    </span>
                    <a
                      href="#a"
                      tabindex="0"
                      className="text-orange-500 font-medium flex align-items-center mt-2 no-underline"
                    >
                      <span>Read More</span>
                      <i className="pi pi-arrow-right ml-5"></i>
                    </a>
                  </div>
                  <div className="col-6 mt-8 py-1">
                    <img
                      src="images/img-14.jpg"
                      alt="Ime"
                      className="w-15rem border-round"
                    />
                    <h4 className="mt-3 mb-2 font-normal text-700 flex">
                      Dessert ---- March 01, 2018
                    </h4>
                    <span
                      className="text-900 line-height-3 text-xl"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      Tasty & Delicious Foods
                    </span>
                    <a
                      href="#a"
                      tabindex="0"
                      className="text-orange-500 font-medium flex align-items-center mt-2 no-underline"
                    >
                      <span>Read More</span>
                      <i className="pi pi-arrow-right ml-5"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-6 lg:col-6 bg-image border-round-top">
                <div className="text">
                  <span className="text-yellow-500 text-xl">Food</span>
                  <h3
                    className="text-white text-5xl"
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontWeight: "500",
                    }}
                  >
                    Tasty & Delicious Foods
                  </h3>
                  <a
                    href="#a"
                    tabindex="0"
                    className="text-orange-500 font-medium flex align-items-center no-underline custom-btn"
                  >
                    <span className="p-button p-button bg-white text-900 border-0 border-noround">
                      Read More
                      <i className="pi pi-arrow-right ml-5"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentStories;
