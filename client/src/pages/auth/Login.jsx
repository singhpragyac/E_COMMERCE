import React, {useState} from "react";
import axios from "axios";
import { useNavigate, Link, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import Layout from "../../components/layout/layout";
import { useAuth } from "../../Context/auth"

var Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");   
    const [auth, setAuth] = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("/api/v1/auth/login", {email, password});
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                });
                localStorage.setItem("auth", JSON.stringify(res.data));
                navigate(location.state || "/");
            } else {
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("somthing went worng");
        }
    };

    return (
   
        <Layout>
        <div className="form-container" style={{minHeight: "90vh"}}>
            <h4>Login Here</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" value={email} onChange={
                                (e) => setEmail(e.target.value)} className="form-control" placeholder="Enter Your Email" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" value={password} onChange={
                                (e) => setPassword(e.target.value)} className="form-control" placeholder="Enter Your Password" required />
                </div>

                <button type="submit" className="btn btn-primary ms-1">Login</button>
            </form><br></br>
            <Link to="/forgot" className="btn btn-danger ms-1">
            Forgot Password
            </Link>
        </div>


        </Layout>
   );
};

export default Login;