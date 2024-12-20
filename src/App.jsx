import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyComponent from "./testcomponent";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FruitsPage from "./pages/FruitsPage";
import VegetablesPage from "./pages/VegetablesPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import AboutUsPage from "./pages/AboutUsPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import { useDispatch } from "react-redux";
import { setUser } from "./reducers/clientActions"; // Adjust path as needed
import { verifyToken } from "./lib/apiService"; // Import verifyToken API function
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      verifyToken()
        .then((response) => {
          if (response.data) {
            dispatch(setUser(response.data));

            // Renew token in localStorage
            localStorage.setItem("token", response.data.token);
          }
        })
        .catch((error) => {
          // If token is not authorized, remove token and header
          console.error("Token verification failed:", error);
          toast.error("Session expired. Please log in again.");
          localStorage.removeItem("token");
        });
    }
  }, [dispatch]);

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
            <Route path="/shop/fruits" element={<FruitsPage />} />
            <Route path="/shop/vegetables" element={<VegetablesPage />} />
            <Route path="/product/:productId" element={<ProductDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
