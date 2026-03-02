import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Layout from "../../components/layout/layout";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log({
            name,
            email,
            password,
            phone,
            address,
            answer
            });

        try {
            const res = await axios.post("/api/v1/auth/register", { name, email, password, phone, address, answer });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                navigate("/login");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("somthing went worng");
        }
    };

    return (
        <>
        <div className="form-container" style={{minHeight: "90vh"}}>
            <h4>Register form</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    {/* <label for="name" className="form-label">Full Name</label> */}
                    <input type="text" value={name} onChange={
                            (e) => setName(e.target.value)} className="form-control" placeholder="Enter Your Name" required autoFocus />
                </div>

                <div className="mb-3">
                    {/* <label for="email" className="form-label">Email address</label> */}
                    <input type="email" value={email} onChange={
                            (e) => setEmail(e.target.value)} className="form-control" placeholder="Enter Your Email" required />
                </div>

                <div className="mb-3">
                    {/* <label for="password" className="form-label">Password</label> */}
                    <input type="password" value={password} onChange={
                            (e) => setPassword(e.target.value)} className="form-control" placeholder="Enter Your Password" required />
                </div>

                <div className="mb-3">
                    {/* <label for="phone" className="form-label">Phone</label> */}
                    <input type="text" value={phone} onChange={
                            (e) => setPhone(e.target.value)} className="form-control" placeholder="Enter Your Phone No." required />
                </div>

                <div className="mb-3">
                    {/* <label for="address" className="form-label">Address</label> */}
                    <input type="text" value={address} onChange={
                            (e) => setAddress(e.target.value)} className="form-control" placeholder="Enter Your Address" required />
                </div>

                <div className="mb-3">
                    {/* <label for="answer" className="form-label">Answer</label> */}
                    <input type="text" value={answer} onChange={
                            (e) => setAnswer(e.target.value)} className="form-control" placeholder="Enter Your Favoutite sports" required />
                </div>
                
                <button type="submit" className="btn btn-primary">REGISTER</button>
            </form>
        </div>
        </>
    );
};


export default Register;