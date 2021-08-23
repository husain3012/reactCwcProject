import React, { useState } from "react";
import Footer from "./Footer";
import Home from "../pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { PageWrapper } from "./PageWrapper";
import Login from "../pages/Login";
import About from "../pages/About";
import Contact from "../pages/Contact";
import * as Solutions from "./Solutions/Solution";
import GoToTop from "./GoToTop";
import PrivacyPolicy from "../pages/PrivacyPolicy";
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
          <Route exact path="/privacy_policy" component={PrivacyPolicy} />
          <Route exact path="/solutions/solution1" component={Solutions.Solution1} />
          <Route exact path="/solutions/solution2" component={Solutions.Solution2} />
          <Route exact path="/solutions/solution3" component={Solutions.Solution3} />
          <Route exact path="/solutions/solution4" component={Solutions.Solution4} />

        </Switch>
        <GoToTop />
      </PageWrapper>

      <Footer />
   
    </Router>
  );
}
export default App;
