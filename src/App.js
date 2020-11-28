import React from "react";
// Global styling
import GlobalStyle from "./components/GlobalStyle";
// Import pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
// router
import {Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <GlobalStyle/>
        <Nav/>
        <Switch>
            <Route path="/" exact>
                <AboutUs/>
            </Route>

            <Route path="/work">
                <OurWork/>
            </Route>

            <Route path="/contact">
                <ContactUs/>
            </Route>
        </Switch>
    </div>
  );
}

export default App;
