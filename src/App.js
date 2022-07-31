import React from "react";
import { Home, NotFoundPage } from "screens";
import { Routes, Route } from "react-router-dom";
import { Layout } from "components";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
