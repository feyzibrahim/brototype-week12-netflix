import Home from "./page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import User from "./page/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
