import React from "react";
import { Container } from "react-bootstrap";
import "./Styles/App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
