import React from "react";
import Banner from "../../Common/Banner";
import { toast } from "react-toastify";
import axios from "axios";

const AddPosts = () => {
  var name = "Add Posts";

  const [author, setAuthor] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [summary, setSummary] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [location, setLocation] = React.useState("");

  const resetForm = () => {
    setAuthor("");
    setTitle("");
    setSummary("");
    setImageUrl("");
    setLocation("");
  };

  //defining the submit function for the post
  const handleAddPost = (e) => {
    e.preventDefault();
    let data = { author, title, summary, imageUrl, location };
    console.log(data);
    if (author && title && summary && imageUrl && location) {
      axios
        .post("https://dull-shoe-duck.cyclic.app/add/posts", data)
        .then((res) => {
          toast.success(res.data.message);
        })
        .catch((err) => {
          toast.error(err.data.message);
        });
    } else {
      toast.error("Oh noo all inputs are mandatory");
    }
    resetForm();
  };

  return (
    <>
      <Banner name={name} />
      <div className="grid grid-nogutter text-800 p-6">
        <div className="md:col-5 lg:col-6">
          <img
            src="../../images/photo-1.avif"
            alt="hero-1"
            className="sm:h-screen lg:h-full md:h-screen lg:w-full md:w-full"
          />
        </div>
        <div className=" md:col-7 lg:col-6 p-6 md:text-left flex align-items-center">
          <div className="p-5 border-round flex-auto">
            <div className="text-900 font-semibold text-lg mt-3 uppercase underline">
              Add Post{" "}
            </div>

            <div className="flex gap-5 flex-column-reverse md:flex-row mt-3">
              <form className="flex-auto p-fluid" onSubmit={handleAddPost}>
                <div className="mb-4">
                  <label
                    htmlFor="author"
                    className="block font-medium text-900 mb-2 w-full"
                  >
                    Author
                  </label>
                  <input
                    name="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    id="author"
                    type="text"
                    className="p-inputtext p-component"
                    placeholder="Author"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="title"
                    className="block font-medium text-900 mb-2 w-full"
                  >
                    Title
                  </label>
                  <input
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    id="title"
                    type="text"
                    className="p-inputtext p-component"
                    placeholder="Title"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="summary"
                    className="block font-medium text-900 mb-2"
                  >
                    Summary
                  </label>
                  <textarea
                    name="summary"
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    id="bio"
                    type="text"
                    rows="5"
                    className="p-inputtextarea p-inputtext p-component p-inputtextarea-resizable"
                    style={{ overflow: "hidden", height: "131px" }}
                    placeholder="Summary"
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="image Url"
                    className="block font-medium text-900 mb-2"
                  >
                    Image Url
                  </label>
                  <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">Url</span>
                    <input
                      name="imageUrl"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      id="website"
                      type="text"
                      className="p-inputtext p-component"
                      placeholder="Enter the image url of the post"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="location"
                    className="block font-medium text-900 mb-2"
                  >
                    Location
                  </label>
                  <input
                    name="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    id="state"
                    type="text"
                    className="p-inputtext p-component"
                    placeholder="Enter the location"
                  />
                </div>
                <div>
                  <button
                    aria-label="Submit Post"
                    className="p-button p-component p-ripple w-auto
                                     font-bold border-2 bg-black-alpha-90 border-transparent transition-colors transition-duration-200 bg-blue-500 hover:bg-orange-500 text-white hover:text-white-900 
                                    "
                  >
                    <span class="p-button-icon p-c p-button-icon-left pi pi-check"></span>
                    <span className="p-button-label p-c">Submit Post</span>
                    <span role="presentation" className="p-ink"></span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPosts;
