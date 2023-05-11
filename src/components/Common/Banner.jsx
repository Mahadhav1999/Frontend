import React from "react";

const Banner = (props) => {
  let title = props.name;
  return (
    <>
      <div>
        <div
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(../../images/img-14.jpg) 0% 0% / cover no-repeat",
          }}
          className="flex justify-content-center align-items-center w-full h-30rem"
        >
          <div className="flex justify-content-center align-content-center">
            <h1
              className="text-white text-5xl font-bold"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {title}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
