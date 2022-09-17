import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navy"
import Home from "./pages/home"
import Music from "./pages/music"
import Webwork from "./pages/webwork"
import Software from "./pages/software"
import Veil from "./pages/veil"
import Devlog from "./pages/devlog"
import Tripleperc from "./pages/tripleperc"
import Logo from "./components/logo"
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>

        <Route path='/home' exact element={<Home/>} />
        <Route path='/music' exact element={<Music/>} />
        <Route path='/webwork' element={<Webwork/>} />
        <Route path='/veil' element={<Veil/>} />
        <Route path='/tripleperc' element={<Tripleperc/>} />
        <Route path='/software' element={<Software/>} />
        <Route path='/devlog' element={<Devlog/>} />
      </Routes>

    </Router>

  );
}

export default App;
