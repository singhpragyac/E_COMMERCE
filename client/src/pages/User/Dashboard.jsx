import React from "react";
import UserMenu from "../../components/layout/usermenu.jsx"
import Layout from "../../components/layout/layout";
import { useAuth } from "../../Context/auth";

const UserDashboard = () => {
    const [auth] = useAuth();
    return (
        <Layout>
        <div className="container-fluid m-3 p-3 dashboard">
            <div className="row">
                <div className="col-md-3">
                    <UserMenu />
                </div>
                <div className="col-md-9">
                    <div className="card w-75 p-3">
                        <h6><b>User Name:</b> {auth?.user?.name}</h6>
                        <h6><b>User Email:</b> {auth?.user?.email}</h6>
                        <h6><b>User Address:</b> {auth?.user?.address}</h6>
                    </div>
                </div>
            </div>
        </div>
        </Layout>
    );
};

export default UserDashboard;