

// Hooks
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Info from "./pages/Info";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SelectOption from "./components/SelectOptional/SelectOption";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<SelectOption />}/>
          <Route path="*" element={<Info />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
