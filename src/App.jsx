import { Route, Routes } from "react-router-dom";
import { Demo } from "./components/demo/Demo";
import { Home } from "./components/Home/Home";
import Homeheader from "./components/Home/Navbar.jsx";
import Demoheader from "./components/demo/Navbar.jsx";
function App() {
  const auth = false;
  return (
    <>
      {auth ? <Homeheader></Homeheader> : <Demoheader></Demoheader>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </>
  );
}
export default App;
