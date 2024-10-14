import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyComponent from "./testcomponent";
import PageContent from "./layout/PageContent";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <MyComponent />
      <ToastContainer />
      <Router>
        <Switch>
            <Route path="/" component={PageContent} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
