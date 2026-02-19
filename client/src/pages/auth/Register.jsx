var register = () => {
    <>
        <div class="row justify-content-center align-items-center vh-100">
            <div class="col-md-5">

                <div class="card shadow-lg border-0 rounded-4">
                    <div class="card-body p-4">

                        <h3 class="text-center mb-4">Register here</h3>

                        <form method="POST" action="/register">

                            {/* Full Name */}
                            <div class="mb-3">
                                <label class="form-label">Full Name</label>
                                <input type="text" name="fullname" 
                                    class="form-control rounded-3" 
                                    placeholder="Enter your full name" required />
                            </div>

                            {/* Email  */}
                            <div class="mb-3">
                                <label class="form-label">Email Address</label>
                                <input type="email" name="email" 
                                    class="form-control rounded-3" 
                                    placeholder="Enter your email" required />
                            </div>

                            {/* Password  */}
                            <div class="mb-3">
                                <label class="form-label">Password</label>
                                <input type="password" name="password" 
                                    class="form-control rounded-3" 
                                    placeholder="Enter password" required />
                            </div>

                            {/* Confirm Password  */}
                            <div class="mb-3">
                                <label class="form-label">Confirm Password</label>
                                <input type="password" name="confirm_password" 
                                    class="form-control rounded-3" 
                                    placeholder="Confirm password" required />
                            </div>

                            {/* Submit Button  */}
                            <div class="d-grid">
                                <button type="submit" 
                                        class="btn btn-success rounded-3">
                                    Register
                                </button>
                            </div>

                        </form>

                        {/* Login Link  */}
                        <div class="text-center mt-3">
                            <small>
                                Already have an account? 
                                <a href="/login" class="text-decoration-none">Login</a>
                            </small>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    </>
}

export default register