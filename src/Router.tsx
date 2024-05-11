import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomePage } from "./Pages/Home/index-sweetalert";

import { ErrorPage } from "./Pages/Error/NotFound";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Error Handler */}
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
