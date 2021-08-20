import React, { useState } from "react";
import Footer from "./Footer";
import Home from "../pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { PageWrapper } from "./PageWrapper";
import Login from "../pages/Login";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Solutions from "../pages/Solutions";
// Colors:
// Purple: #5C05C4
// Athens gray: #E6E3ED
// Greenish: #47CBB0
// Trout: #4E545E
function App() {
  return (
    <Router>
      <Navbar />
      <PageWrapper>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Login} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact_us" component={Contact} />
          <Route exact path="/solutions" component={Solutions} />




        </Switch>
      </PageWrapper>

      <Footer />
    </Router>
  );
}
export default App;
