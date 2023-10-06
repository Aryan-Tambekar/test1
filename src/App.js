import './App.css';
import Nav from './NAV.js';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home,About,Contact,Blog } from './F1.js';
import LandingPage from './LandingPage.js';
function App() {
return (
<div>

<HashRouter>
<Nav />
<Routes>
<Route path="/" element={<LandingPage />} />
<Route path="/home" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/blog" element={<Blog />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</HashRouter>
</div>
);
}

export default App;
