import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Sobre from "./pages/sobre";
import Contato from "./pages/contato";
import Login from "./pages/login";


function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/sobre" element={<Sobre/>}/>
        <Route path = "/contato" element={<Contato/>}/>
        <Route path = "/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
