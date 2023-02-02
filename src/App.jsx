import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import Produtos from "./Components/Produtos/Produtos"
import Produto from "./Components/Produto/Produto"
import Contato from "./Components/Contato/Contato.jsx";




const App = () => {
      
      return (<>
            <BrowserRouter>
            <Header />
            <Routes>
                  <Route path="/" element={<Produtos />} />
                  <Route path="produto/:id" element={<Produto />} />
                  <Route path="contato" element={<Contato />} />
            </Routes>  
             </BrowserRouter>
             </>)
        
};

export default App;
