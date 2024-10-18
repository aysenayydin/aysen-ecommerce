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
    <Router>
      <Header />
      <MyComponent />
      <ToastContainer />
      <Switch>
        <Route path="/" component={PageContent} exact />
        <Route path="/Home" component={PageContent} />
        <Route path="/Product" component={PageContent} />
        <Route path="/Pricing" component={PageContent} />
        <Route path="/Contact" component={PageContent} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
