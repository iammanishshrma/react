import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "pages/homepage/HomePage";
import Counter from "pages/counter/Counter";
import PageNotFound from "pages/pageNotFound/PageNotFound";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default CustomRoutes;
