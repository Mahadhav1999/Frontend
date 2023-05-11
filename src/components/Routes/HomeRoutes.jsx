import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../Layout/Navbar";
import About from "../pages/About/About";
import Contact from "../pages/contact/Contact";
import AddPosts from "../pages/Posts/AddPosts";
import Posts from "../pages/Posts/Posts";
import SinglePost from "../pages/Posts/SinglePost";
import Footer from "../Layout/Footer";

const HomeRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/add/posts" element={<AddPosts />} />
        <Route path="/posts/:id" element={<SinglePost />} />
      </Routes>
      <Footer />
    </>
  );
};

export default HomeRoutes;
