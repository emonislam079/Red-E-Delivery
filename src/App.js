import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login/Login';
import PrivetRoute from './Component/Login/PrivetRoute/PrivetRoute';
import Register from './Component/Login/Register/Register';
import Myorder from './Component/MyOrder/Myorder';
import NotFound from './Component/NotFound/NotFound';
import Order from './Component/Order/Order';
import AuthProvider from './Contex/AuthProvider';
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivetRoute path="/order">
              <Order></Order>
            </PrivetRoute>
            <PrivetRoute path="/myorder">
              <Myorder></Myorder>
            </PrivetRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
