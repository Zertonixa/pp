import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Page404 } from "./Page404";
import { Layout } from "../ui/Layout";

export const Pages = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Page404 />} />
    </Routes>
  </Layout>
);
