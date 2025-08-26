import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navegation } from "./components/Navegation";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
    <div className="container mx-auto">
      <Navegation/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App