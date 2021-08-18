import React, { useState } from "react";
import Footer from "./Footer";
import Home from "../pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { PageWrapper } from "./PageWrapper";
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
        </Switch>
      </PageWrapper>

      <Footer />
    </Router>
  );
}
export default App;
