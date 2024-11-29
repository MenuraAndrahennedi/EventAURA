import React from "react";
import "./TBLogin.scss";
import MainHeader from "./../../Components/Header/MainHeader";
import SubFooter from "./../../Components/Footer/SubFooter";
import { Link, useForm } from "@inertiajs/react"; //here

const EHLogin = () => {
    return (
        <>
            <header>
                <MainHeader />
            </header>

            <main className="login-page d-flex align-items-stretch">
                <div className="image-section"></div>

                <div className="login-form-section d-flex justify-content-center ">
                    <div className="login-form">
                        <div className="border-0 shadow card">
                            <div className="p-4 card-body">
                                <h2 className="mb-4 text-center">
                                    Sign in to EventAURA
                                </h2>

                                <form>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            placeholder="Email / Username"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="mb-3 text-end">
                                        <small>
                                            <Link to="/ForgotPW">
                                                Forgot Password?
                                            </Link>
                                        </small>
                                    </div>

                                    <button className="mb-3 btn btn-primary w-100">
                                        Sign In
                                    </button>

                                    <div className="divider">
                                        <span className="text-center">
                                            or login with
                                        </span>
                                    </div>

                                    <div className="social-login d-flex justify-content-around">
                                        <button className="btn btn-outline-secondary">
                                            Google
                                        </button>
                                        <button className="btn btn-outline-secondary">
                                            Facebook
                                        </button>
                                        <button className="btn btn-outline-secondary">
                                            Apple
                                        </button>
                                    </div>

                                    <div className="mt-4 text-center">
                                        <small>
                                            Don’t have an account?{" "}
                                            <Link to="/EHCreateAccount">
                                                {" "}
                                                Create an account
                                            </Link>
                                        </small>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <SubFooter />
            </footer>
        </>
    );
};

export default EHLogin;
