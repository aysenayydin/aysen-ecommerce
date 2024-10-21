import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyComponent from "./testcomponent";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Header />
        {/* <MyComponent /> */}
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
