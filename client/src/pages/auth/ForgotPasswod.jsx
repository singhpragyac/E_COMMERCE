import React, {useState} from "react";
import axios from "axios";
import Layout from "../../components/layout/layout";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [answer, setAnswer] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("/api/v1/auth/forgot", {email, answer, newPassword});
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
            <h4>Forgot Password</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input type="email" value={email} onChange={
                                (e) => setEmail(e.target.value)} className="form-control" placeholder="Enter Your Email" required />
                </div>

                <div className="mb-3">
                    <label for="answer" className="form-label">Answer</label>
                    <input type="text" value={answer} onChange={
                                (e) => setAnswer(e.target.value)} className="form-control" placeholder="Enter Your Answer" required />
                </div>

                <div className="mb-3">
                    <label for="newPassword" className="form-label"> Set New Password</label>
                    <input type="password" value={newPassword} onChange={
                                (e) => setNewPassword(e.target.value)} className="form-control" placeholder="Enter Your new Password" required />
                </div>

                <button type="submit" className="btn btn-primary">Reset Link</button>
            </form>
        </div>
        </>
    )
};





export default ForgotPassword;
