import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React  from 'react';
import Navlinks from "./components/nav"
import Home from "./pages/home"
import Works from "./pages/work"
import Sculpture from "./pages/sculpture"
import Webwork from "./pages/webwork"
import Software from "./pages/software"
import Imsys from "./pages/imsys"
import Veil from "./pages/veil"
import RTLEARNER from "./pages/rtlearner"
import Devlog from "./pages/devlog"
import Tripleperc from "./pages/tripleperc"
import Timelayer from "./pages/timelayer"
import Curating from "./pages/curating"
import Systems from "./pages/systems"
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="max-w-screen-2xl p-6 mx-auto grid grid-cols-12 gap-6">
    <Router>
      <div className="col-span-12 lg:col-span-4">
        <nav className="bg-roundy shadows">
          <Navlinks />
        </nav>
      </div>
      <div className="col-span-12 lg:col-span-8">
        {/* Probably a better abstraction than 'shadows', but this adds an additional wraper with a border radius to fix the scrollbar overflow issue */}
        <main className="shadows bg-roundy">
          {/* calc function measures the height of the viewport and subtracts the height of vertical padding (2x) on desktop, see wrapper in index.css */}
          <div className="wrapper lg:h-[calc(100vh-theme(space.12))]">
            <div className="
              font-serif 
              text-black 
              prose 
              prose-lg 
              prose-h1:font-normal
              prose-h2:font-normal
              prose-h3:font-normal
              prose-h4:font-bold
              prose-h5:font-bold
              prose-ul:list-none
              prose-ul:pl-0
              prose-figcaption:text-black 
              prose-figure:mt-0
              prose-figure:flex
              prose-figure:flex-col
              prose-figure:space-y-4
              prose-video:aspect-video
              prose-a:italic
              hover:prose-a:text-blue" style={{maxWidth: 'none'}}>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path='/work' element={<Works/>} />
              <Route path='/sculpture' element={<Sculpture/>} />
              <Route path='/webwork' element={<Webwork/>} />
              <Route path='/veil' element={<Veil/>} />
              <Route path='/imsys' element={<Imsys/>} />
              <Route path='/tripleperc' element={<Tripleperc/>} />
              <Route path='/rtlearner' element={<RTLEARNER/>} />
              <Route path='/timelayer' element={<Timelayer/>} />
              <Route path='/software' element={<Software/>} />
              <Route path='/curating' element={<Curating/>} />
              <Route path='/systems' element={<Systems/>} />
              <Route path='/devlog' element={<Devlog/>} />
            </Routes>
            </div>
          </div>
        </main>
      </div>
    </Router>
    <Analytics />
    </div>
  );
}
export default App;