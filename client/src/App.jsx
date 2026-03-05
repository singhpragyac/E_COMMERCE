import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from './pages/home.jsx';
import About from './pages/aboutus.jsx';
import Contact from './pages/contactus.jsx';
import Register from './pages/auth/Register.jsx';
import Login from "./pages/auth/Login.jsx";
import ForgotPasswod from './pages/auth/ForgotPasswod.jsx';


// Admin
import AdminRoute from "./components/Routes/AdminRoute.jsx";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import AdminOrder from "./pages/Admin/AdminOrders.jsx";
import CreateCategory from "./pages/Admin/CreateCategory.jsx";
import CreateProduct from "./pages/Admin/CreateProduct.jsx";
import Product from "./pages/Admin/Products.jsx";
// import UpdateProduct from "./pages/Admin/UpdateProduct.jsx";
import Users from "./pages/Admin/Users.jsx";

// User
import UserRoute from "./components/Routes/UserRoute.jsx";
import Userdashboard from "./pages/User/Dashboard.jsx";
import Orders from "./pages/User/Orders.jsx";
import Profile from "./pages/User/Profile.jsx";


// import Cart from './pages/cartpage.jsx';
// import Footer from './components/layout/footer.jsx';

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/aboutus" element={<About/>} />

        <Route path="/contactus" element={<Contact/>} />

        <Route path="/register" element={<Register/>} />

        <Route path="/login" element={<Login/>} />

        <Route path="/forgot" element={<ForgotPasswod/>} />

        <Route path="/dashboard" element={<UserRoute />}>
          <Route path="user" element={<Userdashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
           <Route path="admin/create-category" element={<CreateCategory />} /> 
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/users" element={<Users />} />
          {/* <Route path="admin/product/:slug" element={<UpdateProduct />} /> */}
          <Route path="admin/product" element={<Product />} />
          <Route path="admin/order" element={<AdminOrder />} />
        </Route>

        {/* <Route path="/cartpage" element={<Cartpage/>} /> */}
      </Routes>
    </>
  )
}

export default App
