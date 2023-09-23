import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="*"
          element={
            <div className="h-screen || flex || colorWrite || h-[calc(100vh-111px)  || justify-center || items-center">
              404 Page
            </div>
          }
        />
      </Routes>
      <Footer/>

    </BrowserRouter>
  );
}

export default App;
