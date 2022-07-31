import React from "react";
import { Home } from "screens";
import { Routes, Route } from "react-router-dom";
import { Layout } from "components";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
