import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./Styles/App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Cartscreen from "./Screens/Cartscreen";
import Homescreen from "./Screens/Homescreen";
import Productscreen from "./Screens/Productscreen";
const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={Homescreen} exact />
          <Route path="/product/:id" component={Productscreen} />
          <Route path="/cart/:id?" component={Cartscreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
