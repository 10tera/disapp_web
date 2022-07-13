import React from 'react';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import DashboardVC from "./pages/DashboardVC";



const App = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={'/'} element={<Home/>}/>
              <Route path={'/login'} element={<Login/>}/>
              <Route path={'/about'} element={<About/>}/>
              <Route path={'/contact'} element={<Contact/>}/>
              <Route path={'/*/'} element={<NotFound/>}/>
              <Route path={'/dashboard/:id/home'} element={<Dashboard/>}/>
              <Route path={'/dashboard/:id/vc'} element={<DashboardVC/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
