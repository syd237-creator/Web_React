import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/mainlayout";
import Home from "./components/pages/Home/Home";
import SingleBlogPage from "./components/pages/singleBlogPage/SingleBlogPage";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<SingleBlogPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
