import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Login from "./components/login";
import Devices from "./components/devices";
import Layout from "./components/layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="devices" element={<Devices />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
