var forgotpassword = () => {
    <>
        <div class="container">
            <div class="row justify-content-center mt-5">
                <div class="col-md-4">
                    <div class="card shadow">
                        <div class="card-header text-center">
                            <h4>Forgot Password</h4>
                        </div>
                        <div class="card-body">

                            <form method="POST" action="/forgot-password">
                                
                                <div class="mb-3">
                                    <label class="form-label">Enter Your Email</label>
                                    <input type="email" name="email" class="form-control" placeholder="Enter registered email" required />
                                </div>

                                <div class="d-grid">
                                    <button type="submit" class="btn btn-danger">
                                        Send Reset Link
                                    </button>
                                </div>

                            </form>

                            <div class="text-center mt-3">
                                <a href="/login">Back to Login</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default forgotpassword