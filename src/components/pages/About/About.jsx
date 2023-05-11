import React from "react";
import Banner from "../../Common/Banner";
import axios from "axios";

const About = () => {
  let name = "About Us";
  const [postsData, setPostsData] = React.useState([]);
  const [usersData, setUsersData] = React.useState([]);

  // to get the post details
  let getPostsData = async () => {
    let res = await axios.get("https://dull-shoe-duck.cyclic.app/posts");
    let data = await res.data;
    // console.log(data);
    setPostsData(data);
  };

  React.useEffect(() => {
    getPostsData();
  });

  // to get the users details
  let fetchUsers = async () => {
    let res = await axios.get("https://dull-shoe-duck.cyclic.app/users");
    let data = await res.data;
    console.log(data);
    setUsersData(data);
  };

  React.useEffect(() => {
    fetchUsers();
  });

  return (
    <>
      <Banner name={name} />
      <div class="grid">
        <div class="col-6 overflow-hidden">
          <img
            src="../../images/img-9.jpg"
            alt="hero-1"
            class="md:ml-auto block md:max-w-screen px-6 cover no-repeat"
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6">
          <div className="px-6 py-5">
            <div className="">
              <h2
                className="text-3xl mb-4 text-800"
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontWeight: "900",
                }}
              >
                <span>
                  About Stories
                  <span className="text-3xl mb-2 text-yellow-500">.</span>
                </span>
              </h2>
              <p className="text-gray-500 line-height-4 w-auto">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
          </div>
          <div class="grid mt-4 px-6">
            <div class="col-6">
              <div class="text-center py-6 surface-100 mb-4">
                <div class="p-4">
                  <strong class="number text-4xl text-900">10</strong>
                  <span class="flex justify-content-center align-items-center">
                    Years of experience
                  </span>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="text-center py-6 surface-100 mb-4">
                <div class="p-4">
                  <strong class="number text-4xl text-900">
                    {postsData.length}
                  </strong>
                  <span class="flex justify-content-center align-items-center">
                    Foods
                  </span>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="text-center py-6 surface-100 mb-4">
                <div class="p-4">
                  <strong class="number text-4xl text-900">300</strong>
                  <span class="flex justify-content-center align-items-center">
                    Lifestyle
                  </span>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="text-center py-6 surface-100 mb-4">
                <div class="p-4">
                  <strong class="number text-4xl text-900">
                    {usersData.length}
                  </strong>
                  <span class="flex justify-content-center align-items-center">
                    Happy Customers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
