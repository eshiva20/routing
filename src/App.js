import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import About from "./Components/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="profile" element={<h1>this is profile page</h1>}/>
            <Route path="education" element={<h1>this is education page</h1>}/>
            <Route path="experience" element={<h1>this is experience page</h1>}/>
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:name?/:id?" element={<Blog />} />
        </Routes>
      </BrowserRouter>

      
    </>
  );
}

export default App;
