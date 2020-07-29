import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import HomePage from "./hompage.component";
import Header from "./components/header/header.component";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FootBar from "./components/foot-bar/foot-bar.component";

/*
import logo from './logo.svg';
import './App.css';
*/

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/info" component={() => <div>info</div>}></Route>
          <Route path="/products" component={() => <div>products</div>}></Route>
          <Route path="/cart" component={() => <div>cart</div>}></Route>
          <Route path="/profile" component={() => <div>profile</div>}></Route>
          <Route path="/message" component={() => <div>messages</div>}></Route>
          <Route path="/aboutus" component={() => <div>about us</div>}></Route>
          <Route
            path="/contact"
            component={() => <div>contact us</div>}
          ></Route>
        </Switch>
        <FootBar />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
