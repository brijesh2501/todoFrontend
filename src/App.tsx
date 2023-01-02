import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Detail from "./components/Detail";
import Home from "./components/Home";

const App: React.FC = () => {

  return (
      <BrowserRouter>
          <Routes>
                <Route path='/' element={<Home/>}  />
                <Route path='/details/:id' element={<Detail/>}  />
          </Routes>
      </BrowserRouter>
    
  )
}

export default App