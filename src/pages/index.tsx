import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Auth } from "./Auth";
import { Page404 } from "./Page404";
import { Layout } from "../ui/Layout";

export const Pages = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/*" element={<Page404 />} />
    </Routes>
  </Layout>
);
