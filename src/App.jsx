import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyComponent from "./testcomponent";

function App() {
  return (
    <div>
      <MyComponent />
      <ToastContainer />
    </div>
  );
}

export default App;
