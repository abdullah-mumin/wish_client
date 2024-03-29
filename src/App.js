<<<<<<< HEAD
=======
<<<<<<< HEAD
import Home from "./Home/Home.js";
function App() {
  return (
    <Home/>
=======
>>>>>>> 2d170b67e47d89016faab96a6bc5c0bc50c2553f
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/css/main.css";
import Footer from "./components/Footer.js";
import ContextProvider from "./contexts/ContextProvider.js";
import Home from "./pages/Home.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import Dashboard from "./pages/Dashboard.js";
import PrivateRoute from "./protectedRoute/PrivateRoute.js";
import Products from "./components/Products.js";
import PlaceOrder from "./pages/PlaceOrder.js";
import PageNotFound from "./pages/PageNotFound.js";
import Header from "./components/Header.js";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/products">
            <Products></Products>
          </Route>
          <PrivateRoute path="/placeorder/:id">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ContextProvider>
<<<<<<< HEAD
=======
>>>>>>> 7751a1c16c529b5314c4df4b23eddc30b6db41a2
>>>>>>> 2d170b67e47d89016faab96a6bc5c0bc50c2553f
  );
}

export default App;