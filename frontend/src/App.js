import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./Styles/App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Cartscreen from "./Screens/Cartscreen";
import Homescreen from "./Screens/Homescreen";
import Productscreen from "./Screens/Productscreen";
import Loginscreen from "./Screens/Loginscreen";
import Registerscreen from "./Screens/Registerscreen";
import Profilescreen from "./Screens/Profilescreen";
import Shippingscreen from "./Screens/Shippingscreen";
import Paymentscreen from "./Screens/Paymentscreen";
import Orderscreen from "./Screens/Orderscreen";
import PlaceOrderscreen from "./Screens/PlaceOrderscreen";
import UserListscreen from "./Screens/UserListscreen.jsx";
import UserEditscreen from "./Screens/UserEditscreen";
import ProductListscreen from "./Screens/ProductListscreen.jsx";
import ProductEditscreen from "./Screens/ProductEditscreen.jsx";
import OrdersListscreen from "./Screens/OrdersListscreen";
const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={Homescreen} exact />
          <Route path="/product/:id" component={Productscreen} />
          <Route path="/cart/:id?" component={Cartscreen} />
          <Route path="/login" component={Loginscreen} />
          <Route path="/register" component={Registerscreen} />
          <Route path="/profile" component={Profilescreen} />
          <Route path="/shipping" component={Shippingscreen} />
          <Route path="/payment" component={Paymentscreen} />
          <Route path="/placeorder" component={PlaceOrderscreen} />
          <Route path="/order/:id" component={Orderscreen} />
          <Route path="/admin/userlist" component={UserListscreen} />
          <Route
            path="/admin/productlist"
            component={ProductListscreen}
            exact
          />
          <Route
            path="/admin/productlist/:pageNumber"
            component={ProductListscreen}
            exact
          />
          <Route path="/admin/user/:id/edit" component={UserEditscreen} />
          <Route path="/admin/product/:id/edit" component={ProductEditscreen} />
          <Route path="/admin/orderlist" component={OrdersListscreen} exact />
          <Route path="/search/:keyword" component={Homescreen} />
          <Route path="/page/:pageNumber" component={Homescreen} exact />
          <Route
            path="/search/:keyword/page/:pageNumber"
            component={Homescreen}
            exact
          />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
