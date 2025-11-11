import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navlinks from "./components/nav"
import Home from "./pages/home"
import Works from "./pages/work"
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
              <Route path='/curating' element={<Curating/>} />
              <Route path='/systems' element={<Systems/>} />
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