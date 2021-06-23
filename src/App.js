import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Container } from "react-bootstrap";

import PrivateRoute from "./components/route/PrivateRoute";
import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import DetailProduct from "./pages/DetailProduct";

/**
 * Our main app
 * For routing, make sure to use BrowserRouter, Switch, and Route
 * Route important attribute: path and component
 * @returns
 */
const App = () => {
  const headerTitle = "Dumbways Batch 24";
  return (
    <div className="App">
      <Router>
        <Header title={headerTitle} />
        <Container fluid="lg">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <PrivateRoute exact path="/product/:id" component={DetailProduct} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
};

export default App;
