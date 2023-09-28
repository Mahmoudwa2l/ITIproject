import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
import PrivateRoute from "./PrivateRoute"; // Import the PrivateRoute component

function App() {
  
  const user = useSelector((state) => state.user.currentUser);
  const admin = user ? user.isAdmin : false;

  return (
    <Router>
      <Switch>
        <Route path="/login">
          {admin ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/">
          {admin ? <Dashboard /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
}

const Dashboard = () => {
  const user = useSelector((state) => state.user.currentUser);
  const admin = user ? user.isAdmin : false;

  return (
    <>
    
      {admin && (
        <>
          <Topbar />
          <div className="container">
            <Sidebar />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="/users" component={UserList} />
            <PrivateRoute path="/user/:userId" component={User} />
            <PrivateRoute path="/newUser" component={NewUser} />
            <PrivateRoute path="/products" component={ProductList} />
            <PrivateRoute path="/product/:productId" component={Product} />
            <PrivateRoute path="/newproduct" component={NewProduct} />
          </div>
        </>
      )}
      
      
    </>
  );
};


export default App;
